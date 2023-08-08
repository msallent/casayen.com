import Image from 'next/image';
import { createPortal } from 'react-dom';
import { Badge } from '@/components/Badge';
import { Title } from '@/components/Title';
import { Button } from '@/components/Button';
import { Event } from '@/types/contentful';
import CloseSVG from '@/assets/svgs/close.svg';
import EllipsisMobileSVG from '@/assets/svgs/ellipsis-3.svg';
import EllipsisDesktopSVG from '@/assets/svgs/ellipsis-5.svg';
import backgroundGradient from '@/assets/images/gradient-1.webp';

type ModalBuyProps = {
  event: Event;
  onClose: () => void;
};

export function ModalBuy({ event, onClose }: ModalBuyProps) {
  return createPortal(
    <>
      <div className="inset-center fixed z-10 w-[calc(100%-2.5rem)] bg-primary-black pb-5 pt-9 xl:w-[56rem] xl:pb-10 xl:pt-14">
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
            <div className="mx-10 text-center">
              <Title size="small">{event.title}</Title>
            </div>
            <div className="mx-10 mt-2.5 text-center font-medium uppercase leading-[129%]">
              {event.shortDescription}
            </div>
          </div>

          <div className="relative my-6 w-full xl:my-10 xl:w-[43rem]">
            <div className="absolute left-0 top-1/2 mx-10 flex -translate-y-1/2 flex-col items-center text-center leading-[129%] xl:left-1/2 xl:mx-0 xl:w-1/2 xl:-translate-x-1/2">
              <span className="font-bold">&gt;&gt; IMPORTANTE &lt;&lt;</span>
              <span className="mb-4 font-medium uppercase">
                Para completar tu compra y acceder al material, enviá el comprobante de pago a:
              </span>
              <Badge>info@casayen.com</Badge>
            </div>
            <EllipsisMobileSVG className="xl:hidden" />
            <EllipsisDesktopSVG className="hidden xl:block" />
          </div>

          <div className="flex w-full flex-col items-center px-5 xl:flex-row xl:justify-center xl:gap-8">
            {event.mercadoPagoUrl && (
              <div className="w-full xl:w-auto">
                <div className="mb-1.5 font-bold">↓ TERRITORIO ARGENTINO</div>
                <Button>
                  <a
                    className="flex h-full items-center justify-center"
                    href={event.mercadoPagoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    COMPRAR X MERCADOPAGO →
                  </a>
                </Button>
              </div>
            )}

            {event.payPalUrl && (
              <div className="w-full xl:w-auto">
                <div className="mb-1.5 mt-5 font-bold xl:mt-0 xl:text-right">RESTO DEL MUNDO ↓</div>
                <Button>
                  <a
                    className="flex h-full items-center justify-center"
                    href={event.payPalUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    COMPRAR X PAYPAL →
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>

        <Image
          aria-hidden
          src={backgroundGradient}
          alt="Background gradient"
          className="absolute left-0 top-0 -z-10 h-full w-full"
          placeholder="blur"
        />

        <Image
          aria-hidden
          src={backgroundGradient}
          alt="Background gradient"
          className="absolute left-0 top-0 -z-10 h-full w-full rotate-180"
          placeholder="blur"
        />
      </div>

      <div className="fixed inset-0 z-0 bg-primary-black opacity-80" onClick={onClose} />
    </>,
    document.body
  );
}
