'use client';

import { useState } from 'react';
import { ModalBuy } from '@/components/ModalBuy';
import { ButtonBuy } from '@/components/ButtonBuy';
import { Expandable } from '@/components/Expandable';
import { Event } from '@/types/contentful';
import { parseRichText } from '@/utils/richText';
import CartSVG from '@/assets/svgs/cart.svg';

type ExpandableEventProps = {
  event: Event;
  index: number;
};

export function ExpandableEvent({ event, index }: ExpandableEventProps) {
  const [isPurchasing, setIsPurchasing] = useState(false);

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
        extraActions={[{ label: 'Comprar', Icon: CartSVG, onClick: handleSelectBuy }]}
      >
        <div className="text-primary-blue 2xl:mr-[200px] [&_p+p]:mt-4 [&_ul~p]:mt-4">
          {event.longDescription && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>{event.longDescription}</div>
            </div>
          )}

          {event.duration && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]" />
              <div className="mt-2 text-sm uppercase text-white">
                Duración: <span className="font-bold">{event.duration}</span>
              </div>
            </div>
          )}

          <div className="xl:flex xl:gap-12">
            <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-24 2xl:shrink-0 2xl:text-[2rem]" />
            {event.value && (
              <div className="my-14 border-t border-primary-blue pt-5 xl:flex-1">
                <div className="mb-4">VALOR</div>
                {parseRichText(event.value.json)}
              </div>
            )}

            {event.includes && (
              <div className="my-14 border-t border-primary-blue pt-5 xl:flex-1">
                <div className="mb-4">INCLUYE</div>
                {parseRichText(event.includes.json)}
              </div>
            )}
          </div>

          <div className="flex">
            <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]" />
            <ButtonBuy onClick={handleSelectBuy} />
          </div>

          {event.forYou && (
            <div className="my-14 flex xl:mt-20">
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
            <div className="my-14 flex">
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
            <div className="my-14 flex">
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

          <div className="flex">
            <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]" />
            <ButtonBuy onClick={handleSelectBuy} />
          </div>
        </div>
      </Expandable>

      {isPurchasing && <ModalBuy event={event} onClose={handleCloseBuyModal} />}
    </>
  );
}
