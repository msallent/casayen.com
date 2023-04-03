import Stars1SVG from '@/assets/svgs/stars-1.svg';
import Stars2SVG from '@/assets/svgs/stars-3.svg';
import Stars3SVG from '@/assets/svgs/stars-4.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-1.svg';
import YenSloganSVG from '@/assets/svgs/yen-slogan.svg';
import ChevronDouble from '@/assets/svgs/chevron-double.svg';

export function Hero() {
  return (
    <div className="font-title-full relative mx-5 mb-14 flex flex-col text-[24vw] sm:mb-20 sm:text-[16vw] xl:mx-0">
      <Stars2SVG className="hidden sm:mx-auto sm:block sm:w-3/5 lg:hidden" />

      <div className="relative ml-[6%] flex items-center gap-1.5 sm:ml-[22%] sm:mt-20 md:ml-[27%] md:mt-24 lg:ml-[8%] xl:ml-[16%]">
        <div className="text-[4.5rem] lg:text-[10rem]">→</div>
        <div className="w-20 text-right font-sans text-xs tracking-normal sm:-mt-2.5 sm:ml-2 sm:mr-4 sm:text-sm sm:leading-[117%] lg:-mt-8 lg:ml-6 lg:w-32 lg:text-xl">
          BIENVENIDX A TU
        </div>
        <h1>VIAJE</h1>
        <EllipsisSVG className="pointer-events-none absolute left-[4%] top-[-30%] z-10 w-[16.5rem] lg:left-[9%] lg:top-[-55%] lg:w-[26rem] xl:left-[4%] xl:top-[-32%] xl:w-[32rem]" />
        <Stars1SVG className="pointer-events-none absolute left-[87%] top-[-60%] z-10 w-12 sm:left-[75%] md:left-[73%] md:w-14 lg:left-[74%] lg:top-[-68%] lg:w-24 xl:left-[62%] xl:top-[-60%]" />
      </div>

      <div className="sm:hidden">
        <h1>INTER-</h1>
        <h1 className="ml-[15%]">GALÁCTICO</h1>
        <h1 className="ml-[11%]">DE REPRO-</h1>
        <h1 className="ml-[1%]">GRAMACION</h1>
        <h1 className="relative ml-[23%]">
          <span>SEXUAL</span>
          <div className="absolute right-[18%] top-[-54%] rotate-90 text-[3rem]">‡</div>
        </h1>
      </div>

      <div className="hidden sm:block sm:text-center">
        <h1>INTERGALACTICO DE</h1>
        <h1>REPROGRAMACION</h1>
        <h1 className="sm:relative">
          <YenSloganSVG className="hidden xl:absolute xl:left-[13%] xl:block xl:w-52" />
          <span>SEXUAL</span>
          <div className="sm:absolute sm:right-[28%] sm:top-[-54%] sm:rotate-90 sm:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
            ‡
          </div>
        </h1>
      </div>

      <Stars3SVG className="hidden sm:mx-auto sm:mt-6 sm:block sm:w-3/5 lg:hidden" />

      <div className="mt-6 flex items-center justify-between sm:mx-5 sm:mt-12 lg:mx-14 xl:mx-10 xl:justify-end">
        <YenSloganSVG className="hidden sm:block sm:w-36 md:w-40 xl:hidden" />
        <ChevronDouble className="mx-auto w-8 sm:mx-0 sm:w-6 md:w-8 xl:w-12" />
      </div>
    </div>
  );
}
