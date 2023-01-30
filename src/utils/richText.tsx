import Image from 'next/image';
import NextLink from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types';
import { ContentfulAsset } from '@/types/contentful';

export function parseRichText(richTextDocument: Document, assets?: Array<ContentfulAsset>) {
  const assetMap = new Map<string, ContentfulAsset>();

  if (assets && assets.length > 0) {
    assets.forEach((asset) => {
      assetMap.set(asset.sys.id, asset);
    });
  }

  return documentToReactComponents(richTextDocument, {
    renderMark: {
      [MARKS.BOLD]: (children) => <span className="font-bold">{children}</span>,
      [MARKS.ITALIC]: (children) => <span className="italic">{children}</span>,
      [MARKS.UNDERLINE]: (children) => <span className="underline">{children}</span>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => <h1 className="text-5xl">{children}</h1>,
      [BLOCKS.HEADING_2]: (_, children) => <h2 className="text-5xl">{children}</h2>,
      [BLOCKS.HEADING_3]: (_, children) => <h3 className="text-4xl">{children}</h3>,
      [BLOCKS.HEADING_4]: (_, children) => <h4 className="text-2xl">{children}</h4>,
      [BLOCKS.HEADING_5]: (_, children) => <h5 className="text-xl">{children}</h5>,
      [BLOCKS.HEADING_6]: (_, children) => <h6 className="text-lg">{children}</h6>,
      [BLOCKS.LIST_ITEM]: (_, children) => (
        <li className="flex">
          <span className="mr-2.5">∅</span>
          {children}
        </li>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return asset ? (
          <Image src={asset.url} alt={asset.title} width={asset.width} height={asset.height} />
        ) : null;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const href = node.data.uri as string;
        const isInternalLink = href.startsWith('/');

        return isInternalLink ? (
          <NextLink href={href} className="underline">
            {children}
          </NextLink>
        ) : (
          <a href={href} className="underline" target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
    },
  });
}
