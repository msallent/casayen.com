import Image from 'next/image';
import { Button } from '@/components/Button';
import CloseSVG from '@/assets/svgs/close.svg';
import CirclesSVG from '@/assets/svgs/circles-2.svg';
import backgroundGradient from '@/assets/images/gradient-1.png';

type ModalBuyProps = {
  onClose: () => void;
};

export function ModalBuy({ onClose }: ModalBuyProps) {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] pt-9 pb-5 z-10 bg-primary-black">
        <button
          className="absolute -top-10 right-0"
          type="button"
          aria-label="Cerrar menu"
          onClick={onClose}
        >
          <CloseSVG className="w-8 h-8 text-primary-blue" />
        </button>

        <div className="flex flex-col items-center justify-center text-primary-blue">
          <div className="flex flex-col items-center px-5 w-full">
            <div className="font-title-full text-[40px] mb-2.5 mx-10">Yoni Magic</div>
            <span className="uppercase text-center font-medium mx-10 leading-[18px]">
              Como empezar a usar el huevo Yoni
            </span>
          </div>

          <div className="my-6 w-full relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center mx-10 leading-[18px]">
              <span className="font-bold">&gt;&gt; IMPORTANTE &lt;&lt;</span>
              <span className="uppercase font-medium">
                Para completar tu compra y acceder al material, enviá el comprobante de pago a:
              </span>
              <span className="uppercase font-medium px-1.5 mt-4 border rounded-[40px] border-primary-blue">
                info@casayen.com
              </span>
            </div>
            <CirclesSVG />
          </div>

          <div className="flex flex-col items-center px-5 w-full">
            <div className="mb-1.5 font-bold">↓ TERRITORIO ARGENTINO</div>
            <Button>COMPRAR →</Button>
            <div className="mt-5 mb-1.5 font-bold">RESTO DEL MUNDO ↓</div>
            <Button>COMPRAR X PAYPAL →</Button>
          </div>
        </div>

        <Image
          aria-hidden
          src={backgroundGradient}
          alt="Background gradient"
          className="absolute top-0 left-0 h-full w-full -z-10"
        />

        <Image
          aria-hidden
          src={backgroundGradient}
          alt="Background gradient"
          className="absolute top-0 left-0 h-full w-full -z-10 rotate-180"
        />
      </div>

      <div className="fixed inset-0 opacity-80 bg-primary-black z-0" onClick={onClose} />
    </>
  );
}
