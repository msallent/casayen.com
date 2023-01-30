import Stars1SVG from '@/assets/svgs/stars-1.svg';
import Stars2SVG from '@/assets/svgs/stars-3.svg';
import Stars3SVG from '@/assets/svgs/stars-4.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-1.svg';
import YenSloganSVG from '@/assets/svgs/yen-slogan.svg';
import ChevronDouble from '@/assets/svgs/chevron-double.svg';

export function Hero() {
  return (
    <div className="font-title-full relative mx-5 mb-14 flex flex-col text-[24vw] sm:mb-20 sm:text-[16vw]">
      <Stars2SVG className="hidden sm:mx-auto sm:mb-20 sm:block sm:w-3/5" />

      <div className="relative ml-[6%] flex items-center gap-1.5 sm:ml-[22%]">
        <div className="text-[4.5rem]">→</div>
        <div className="w-20 text-right font-sans text-xs tracking-normal sm:-mt-2.5 sm:ml-2 sm:mr-4 sm:text-sm sm:leading-[117%]">
          BIENVENIDX A TU
        </div>
        <h1>VIAJE</h1>
        <EllipsisSVG className="pointer-events-none absolute top-[-30%] left-[4%] z-10 w-[16.5rem]" />
        <Stars1SVG className="pointer-events-none absolute top-[-60%] left-[87%] z-10 w-12 sm:left-[75%]" />
      </div>

      <div className="sm:hidden">
        <h1>INTER-</h1>
        <h1 className="ml-[15%]">GALÁCTICO</h1>
        <h1 className="ml-[11%]">DE REPRO-</h1>
        <h1 className="ml-[1%]">GRAMACION</h1>
        <h1 className="relative ml-[23%]">
          <span>SEXUAL</span>
          <div className="absolute top-[-54%] right-[18%] rotate-90 text-[3rem]">‡</div>
        </h1>
      </div>

      <div className="hidden sm:block sm:text-center">
        <h1>INTERGALÁCTICO DE</h1>
        <h1>REPROGRAMACION</h1>
        <h1 className="relative">
          <span>SEXUAL</span>
          <div className="absolute top-[-54%] right-[28%] rotate-90 text-[3rem]">‡</div>
        </h1>
      </div>

      <Stars3SVG className="hidden sm:mx-auto sm:mt-6 sm:block sm:w-3/5" />

      <div className="mt-6 flex items-center justify-between sm:mx-5 sm:mt-12">
        <YenSloganSVG className="hidden w-36 sm:block" />
        <ChevronDouble className="mx-auto w-8 sm:mx-0 sm:w-6" />
      </div>
    </div>
  );
}
