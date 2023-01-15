'use client';

import { useState } from 'react';
import { ModalBuy } from '@/components/ModalBuy';
import { Expandable } from '@/components/Expandable';

export function List() {
  const [selectedTaller, setSelectedTaller] = useState(null);

  const handleCloseBuyModal = () => {
    setSelectedTaller(null);
  };

  return (
    <>
      <div className="uppercase italic font-serif mt-12 text-primary-blue">
        (!) Importante: los videos estarán disponibles por 10 días (una vez que envíes tu
        comprobante de pago)
      </div>

      <div className="mt-5 mb-20">
        <Expandable
          title="Yoni Magic"
          description="Como empezar a usar el huevo Yoni"
          buttonLabel={{ closed: 'Info', open: 'Cerrar' }}
        >
          <div className="text-primary-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
            optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
            tempora laborum, ea omnis sed sequi!
          </div>
        </Expandable>
        <Expandable
          title="Detox Hormonal y Reconexión Sexual"
          description="No Spoon + Yen"
          buttonLabel={{ closed: 'Info', open: 'Cerrar' }}
        >
          <div className="text-primary-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
            optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
            tempora laborum, ea omnis sed sequi!
          </div>
        </Expandable>
        <Expandable
          title="Sexualidad Consciente ¹⁰¹"
          description="Si no sabés por dónde empezar"
          buttonLabel={{ closed: 'Info', open: 'Cerrar' }}
          withBottomBorder
        >
          <div className="text-primary-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
            optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
            tempora laborum, ea omnis sed sequi!
          </div>
        </Expandable>
      </div>

      {selectedTaller && <ModalBuy onClose={handleCloseBuyModal} />}
    </>
  );
}
