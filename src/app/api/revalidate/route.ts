import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const tag = request.nextUrl.searchParams.get('tag');

  if (secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  if (!tag) {
    return NextResponse.json({ message: 'Tag not specified.' }, { status: 400 });
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
