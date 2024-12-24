import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { ContentfulResponse } from '@/types/contentful';

export async function fetchContent<T = any>(query: string, init?: RequestInit) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      ...init,
    },
  );

  return response.json() as Promise<ContentfulResponse<T>>;
}

const imageFields = `
  items {
    sys {
      id
    }
    height
    title
    url
    width
  }
`;

export const eventFields = `
  items {
    hot
    title
    shortDescription
    longDescription
    startDate
    duration
    photosFirstRowCollection {
      ${imageFields}
    }
    photosSecondRowCollection {
      ${imageFields}
    }
    mercadoPagoUrl
    payPalUrl
    value {
      json
    }
    includes {
      json
    }
    photosThirdRowCollection {
      ${imageFields}
    }
    forYou {
      json
    }
    info {
      json
    }
    syllabus {
      json
    }
    participation {
      json
    }
    photosFourthRowCollection {
      ${imageFields}
    }
    photosFifthRowCollection {
      ${imageFields}
    }
  }
`;
