'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ModalBuy } from '@/components/ModalBuy';
import { ButtonBuy } from '@/components/ButtonBuy';
import { Expandable } from '@/components/Expandable';
import { ContentfulAsset, Event } from '@/types/contentful';
import { parseRichText } from '@/utils/richText';
import CartSVG from '@/assets/svgs/cart.svg';

type ExpandableEventProps = {
  event: Event;
  index: number;
};

export function ExpandableEvent({ event, index }: ExpandableEventProps) {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const hasPurchaseLinks = event.mercadoPagoUrl || event.payPalUrl;

  const images = {
    firstRow: event.photosFirstRowCollection.items,
    secondRow: event.photosSecondRowCollection.items,
    thirdRow: event.photosThirdRowCollection.items,
    fourthRow: event.photosFourthRowCollection.items,
    fifthRow: event.photosFifthRowCollection.items,
  };

  const handleSelectBuy = () => {
    setIsPurchasing(true);
  };

  const handleCloseBuyModal = () => {
    setIsPurchasing(false);
  };

  return (
    <>
      <Expandable
        index={index}
        title={event.title}
        description={event.shortDescription}
        buttonLabel={{ collapsed: 'Info', expanded: 'Cerrar' }}
        extraActions={
          hasPurchaseLinks ? [{ label: 'Comprar', Icon: CartSVG, onClick: handleSelectBuy }] : []
        }
      >
        <div className="flex flex-col gap-14 text-primary-blue [&_p+p]:mt-4 [&_ul~p]:mt-4">
          {event.longDescription && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>

              <div>
                {event.longDescription}

                {event.startDate && (
                  <div className="mt-2 uppercase">
                    Fecha de Inicio: <span className="font-bold">{event.startDate}</span>
                  </div>
                )}

                {event.duration && (
                  <div className="mt-2 uppercase">
                    Duración: <span className="font-bold">{event.duration}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {(images.firstRow.length > 0 || images.secondRow.length > 0) && (
            <ImageRows rows={[images.firstRow, images.secondRow]} />
          )}

          <div className="flex flex-col gap-14 xl:flex-row">
            <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-[5.5rem] 2xl:shrink-0 2xl:text-[2rem]" />
            {event.value && (
              <div className="border-t border-primary-blue pt-5 xl:flex-1">
                <div className="mb-4">VALOR</div>
                {parseRichText(event.value.json)}
              </div>
            )}

            {event.includes && (
              <div className="border-t border-primary-blue pt-5 xl:flex-1">
                <div className="mb-4">INCLUYE</div>
                {parseRichText(event.includes.json)}
              </div>
            )}
          </div>

          {hasPurchaseLinks && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]" />
              <ButtonBuy onClick={handleSelectBuy} />
            </div>
          )}

          {images.thirdRow.length > 0 && <ImageRows rows={[images.thirdRow]} />}

          {event.forYou && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>
                <div className="mb-4 text-2xl">
                  <span className="2xl:hidden">→</span> Este {event.type} es para vos si:
                </div>
                {parseRichText(event.forYou.json)}
              </div>
            </div>
          )}

          {event.info && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>
                <div className="mb-4 text-2xl">
                  <span className="2xl:hidden">→</span> ¿Qué es?
                </div>
                {parseRichText(event.info.json)}
              </div>
            </div>
          )}

          {event.syllabus && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>
                <div className="mb-4 text-2xl">
                  <span className="2xl:hidden">→</span> ¿Qué vamos a ver?
                </div>
                {parseRichText(event.syllabus.json)}
              </div>
            </div>
          )}

          {event.participation && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>
                <div className="mb-4 text-2xl">
                  <span className="2xl:hidden">→</span> ¿Quién puede participar?
                </div>
                {parseRichText(event.participation.json)}
              </div>
            </div>
          )}

          {(images.fourthRow.length > 0 || images.fifthRow.length > 0) && (
            <ImageRows rows={[images.fourthRow, images.fifthRow]} />
          )}

          {hasPurchaseLinks &&
            (event.forYou || event.info || event.syllabus || event.participation) && (
              <div className="flex">
                <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]" />
                <ButtonBuy onClick={handleSelectBuy} />
              </div>
            )}
        </div>
      </Expandable>

      {isPurchasing && <ModalBuy event={event} onClose={handleCloseBuyModal} />}
    </>
  );
}

type ImageRowsProps = {
  rows: Array<Array<ContentfulAsset>>;
};

function ImageRows({ rows }: ImageRowsProps) {
  return (
    <div className="flex flex-col gap-5 sm:gap-10 lg:gap-5">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-col items-center gap-5 sm:gap-10 lg:flex-row lg:justify-center lg:gap-5"
        >
          <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-[7.75rem] 2xl:shrink-0 2xl:text-[2rem]" />
          {row.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={image.title}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
