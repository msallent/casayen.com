import Image from 'next/image';
import { Badge } from '@/components/Badge';
import { Title } from '@/components/Title';
import { Button } from '@/components/Button';
import CloseSVG from '@/assets/svgs/close.svg';
import EllipsisVG from '@/assets/svgs/ellipsis-3.svg';
import backgroundGradient from '@/assets/images/gradient-1.webp';

type ModalBuyProps = {
  onClose: () => void;
};

export function ModalBuy({ onClose }: ModalBuyProps) {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 z-10 w-[calc(100%-2.5rem)] -translate-y-1/2 -translate-x-1/2 bg-primary-black pt-9 pb-5">
        <button
          className="absolute -top-10 right-0"
          type="button"
          aria-label="Cerrar menu"
          onClick={onClose}
        >
          <CloseSVG className="h-8 w-8 text-primary-blue" />
        </button>

        <div className="flex flex-col items-center justify-center text-primary-blue">
          <div className="flex w-full flex-col items-center px-5">
            <div className="mx-10">
              <Title size="small">Yoni Magic</Title>
            </div>
            <div className="mx-10 mt-2.5 text-center font-medium uppercase leading-[18px]">
              Como empezar a usar el huevo Yoni
            </div>
          </div>

          <div className="relative my-6 w-full">
            <div className="absolute left-0 top-1/2 mx-10 flex -translate-y-1/2 flex-col items-center text-center leading-[18px]">
              <span className="font-bold">&gt;&gt; IMPORTANTE &lt;&lt;</span>
              <span className="mb-4 font-medium uppercase">
                Para completar tu compra y acceder al material, enviá el comprobante de pago a:
              </span>
              <Badge>info@casayen.com</Badge>
            </div>
            <EllipsisVG />
          </div>

          <div className="flex w-full flex-col items-center px-5">
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
          className="absolute top-0 left-0 -z-10 h-full w-full"
          placeholder="blur"
        />

        <Image
          aria-hidden
          src={backgroundGradient}
          alt="Background gradient"
          className="absolute top-0 left-0 -z-10 h-full w-full rotate-180"
          placeholder="blur"
        />
      </div>

      <div className="fixed inset-0 z-0 bg-primary-black opacity-80" onClick={onClose} />
    </>
  );
}
