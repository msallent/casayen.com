import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';

export function parseRichText(richTextDocument: Document, options?: Options) {
  return documentToReactComponents(richTextDocument, {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (_, children) => (
        <li className="flex">
          <span className="mr-2.5">∅</span>
          {children}
        </li>
      ),
    },
    ...options,
  });
}
