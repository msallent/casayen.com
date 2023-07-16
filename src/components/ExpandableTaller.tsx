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
};

export function ExpandableTaller({ taller }: ExpandableTallerProps) {
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
        title={taller.title}
        description={taller.shortDescription}
        buttonLabel={{ collapsed: 'Info', expanded: 'Cerrar' }}
        extraActions={[{ label: 'Comprar', Icon: CartSVG, onClick: handleSelectBuy }]}
      >
        <div className="text-primary-blue [&_p+p]:mt-4 [&_ul~p]:mt-4">
          {taller.longDescription && <div>{taller.longDescription}</div>}
          {taller.duration && (
            <div className="mt-2 text-sm uppercase text-white">
              Duración: <span className="font-bold">{taller.duration}</span>
            </div>
          )}
          <div className="xl:flex xl:gap-12">
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
          <ButtonBuy onClick={handleSelectBuy} />
          {taller.forYou && (
            <div className="my-14 xl:mt-20">
              <div className="mb-4 text-2xl">→ Este taller es para vos si:</div>
              {parseRichText(taller.forYou.json)}
            </div>
          )}
          {taller.info && (
            <div className="my-14">
              <div className="mb-4 text-2xl">→ ¿Qué es?</div>
              {parseRichText(taller.info.json)}
            </div>
          )}
          {taller.syllabus && (
            <div className="my-14">
              <div className="mb-4 text-2xl">→ ¿Qué vamos a ver?</div>
              {parseRichText(taller.syllabus.json)}
            </div>
          )}
          <div className="mb-1.5">
            <ButtonBuy onClick={handleSelectBuy} />
          </div>
        </div>
      </Expandable>

      {isPurchasing && <ModalBuy taller={taller} onClose={handleCloseBuyModal} />}
    </>
  );
}
