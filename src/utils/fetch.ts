import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { ContentfulResponse } from '@/types/contentful';

export async function fetchContent<T = any>(input: string, init?: RequestInit) {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries${input}`,
    { headers: { Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}` }, ...init }
  );

  return response.json() as Promise<ContentfulResponse<T>>;
}
