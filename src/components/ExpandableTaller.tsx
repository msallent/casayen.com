'use client';

import { useState } from 'react';
import { ModalBuy } from '@/components/ModalBuy';
import { ButtonBuy } from '@/components/ButtonBuy';
import { Expandable } from '@/components/Expandable';
import { Taller } from '@/types/contentful';
import { parseRichText } from '@/utils/richText';
import CartSVG from '@/assets/svgs/cart.svg';

type ExpandableTallerProps = {
  taller: Taller;
  index: number;
};

export function ExpandableTaller({ taller, index }: ExpandableTallerProps) {
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
        title={taller.title}
        description={taller.shortDescription}
        buttonLabel={{ collapsed: 'Info', expanded: 'Cerrar' }}
        extraActions={[{ label: 'Comprar', Icon: CartSVG, onClick: handleSelectBuy }]}
      >
        <div className="text-primary-blue 2xl:mr-[200px] [&_p+p]:mt-4 [&_ul~p]:mt-4">
          {taller.longDescription && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>{taller.longDescription}</div>
            </div>
          )}

          {taller.duration && (
            <div className="flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]" />
              <div className="mt-2 text-sm uppercase text-white">
                Duración: <span className="font-bold">{taller.duration}</span>
              </div>
            </div>
          )}

          <div className="xl:flex xl:gap-12">
            <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-24 2xl:shrink-0 2xl:text-[2rem]" />
            {taller.value && (
              <div className="my-14 border-t border-primary-blue pt-5 xl:flex-1">
                <div className="mb-4">VALOR</div>
                {parseRichText(taller.value.json)}
              </div>
            )}

            {taller.includes && (
              <div className="my-14 border-t border-primary-blue pt-5 xl:flex-1">
                <div className="mb-4">INCLUYE</div>
                {parseRichText(taller.includes.json)}
              </div>
            )}
          </div>

          <div className="flex">
            <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]" />
            <ButtonBuy onClick={handleSelectBuy} />
          </div>

          {taller.forYou && (
            <div className="my-14 flex xl:mt-20">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>
                <div className="mb-4 text-2xl">
                  <span className="2xl:hidden">→</span> Este taller es para vos si:
                </div>
                {parseRichText(taller.forYou.json)}
              </div>
            </div>
          )}

          {taller.info && (
            <div className="my-14 flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>
                <div className="mb-4 text-2xl">
                  <span className="2xl:hidden">→</span> ¿Qué es?
                </div>
                {parseRichText(taller.info.json)}
              </div>
            </div>
          )}

          {taller.syllabus && (
            <div className="my-14 flex">
              <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]">
                →
              </div>
              <div>
                <div className="mb-4 text-2xl">
                  <span className="2xl:hidden">→</span> ¿Qué vamos a ver?
                </div>
                {parseRichText(taller.syllabus.json)}
              </div>
            </div>
          )}

          <div className="flex">
            <div className="hidden 2xl:-mt-2 2xl:block 2xl:w-36 2xl:shrink-0 2xl:text-[2rem]" />
            <ButtonBuy onClick={handleSelectBuy} />
          </div>
        </div>
      </Expandable>

      {isPurchasing && <ModalBuy taller={taller} onClose={handleCloseBuyModal} />}
    </>
  );
}
