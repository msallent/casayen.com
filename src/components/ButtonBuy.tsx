import { Button } from '@/components/Button';

export function ButtonBuy() {
  return (
    <div className="flex flex-col gap-5">
      <Button>COMPRAR →</Button>

      <div className="text-center font-serif uppercase leading-[100%] tracking-[0.075em] py-2.5 px-3.5 rounded-sm border border-secondary-white text-secondary-white">
        &gt;&gt; IMPORTANTE &lt;&lt; PARA COMPLETAR TU COMPRA Y ACCEDER AL MATERIAL ENVIÁ EL
        COMPROBANTE DE PAGO A <span className="text-primary-blue">INFO@CASAYEN.COM</span>
      </div>
    </div>
  );
}
