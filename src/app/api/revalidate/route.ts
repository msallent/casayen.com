import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { tags as allTags } from '@/constants/tags';
import { paths } from '@/constants/paths';

type TagValue = (typeof allTags)[keyof typeof allTags];

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const tags = request.nextUrl.searchParams.getAll('tag') as Array<TagValue>;

  if (secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  if (tags.length > 0 && !tags.every((tag) => Object.values(allTags).includes(tag))) {
    return NextResponse.json({ message: 'Invalid tag(s).' }, { status: 400 });
  }

  if (tags.length === 0) {
    Object.values(paths).forEach((path) => revalidatePath(path));
  } else {
    tags.forEach((tag) => revalidateTag(tag));
  }

  return NextResponse.json({
    target: tags.length > 0 ? tags : 'all',
    revalidated: true,
    now: Date.now(),
  });
}
