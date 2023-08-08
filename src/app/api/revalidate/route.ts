import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { paths } from '@/constants/paths';
import { tags } from '@/constants/tags';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const tag = request.nextUrl.searchParams.get('tag') as (typeof tags)[keyof typeof tags] | null;

  if (secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  if (tag && !Object.values(tags).includes(tag)) {
    return NextResponse.json({ message: 'Invalid tag.' }, { status: 400 });
  }

  if (!tag) {
    Object.values(paths).forEach((path) => revalidatePath(path));
  } else {
    revalidateTag(tag);
  }

  return NextResponse.json({ target: tag || 'all', revalidated: true, now: Date.now() });
}
