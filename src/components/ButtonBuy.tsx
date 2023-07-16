import { Button } from '@/components/Button';

type ButtonBuyProps = {
  onClick: () => void;
};

export function ButtonBuy({ onClick }: ButtonBuyProps) {
  return (
    <div className="flex flex-col gap-5 xl:flex-row xl:gap-10 xl:[&>*:first-child]:flex-[0]">
      <Button onClick={onClick}>COMPRAR →</Button>

      <div className="rounded-sm border border-secondary-white px-3.5 py-2.5 text-center font-serif uppercase leading-[100%] tracking-[0.075em] text-secondary-white xl:w-[42rem] xl:py-1.5">
        &gt;&gt; IMPORTANTE &lt;&lt; PARA COMPLETAR TU COMPRA Y ACCEDER AL MATERIAL ENVIÁ EL
        COMPROBANTE DE PAGO A <span className="text-primary-blue">INFO@CASAYEN.COM</span>
      </div>
    </div>
  );
}
