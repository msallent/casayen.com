import { IndicatorPage } from '@/components/IndicatorPage';
import Stars1SVG from '@/assets/svgs/stars-1.svg';
import Stars2SVG from '@/assets/svgs/stars-3.svg';
import Stars3SVG from '@/assets/svgs/stars-4.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-1.svg';
import YenSloganSVG from '@/assets/svgs/yen-slogan.svg';
import ChevronDouble from '@/assets/svgs/chevron-double.svg';

export function Hero() {
  return (
    <div className="font-title-full relative mx-5 mb-14 flex flex-col text-[24vw] sm:mb-20 sm:text-[16vw] xl:mx-0 xl:text-[12vw] 2xl:text-[11rem] 3xl:text-[12.5rem]">
      <Stars2SVG className="hidden sm:mx-auto sm:block sm:w-3/5 lg:hidden" />

      <div className="relative ml-[6%] flex items-center gap-1.5 sm:ml-[22%] sm:mt-20 md:ml-[27%] md:mt-24 lg:ml-[8%] xl:ml-[20.5%] xl:mt-0 2xl:ml-[26%] 3xl:ml-[29.5%]">
        <div className="text-[4.5rem] lg:text-[10rem]">→</div>
        <div className="w-20 text-right font-sans text-xs tracking-normal sm:-mt-2.5 sm:ml-2 sm:mr-4 sm:text-sm sm:leading-[117%] lg:-mt-8 lg:ml-6 lg:w-32 lg:text-xl xl:ml-2 xl:w-28 xl:text-lg">
          BIENVENIDX A TU
        </div>
        <h1>VIAJE</h1>
        <EllipsisSVG className="pointer-events-none absolute left-[4%] top-[-30%] z-10 w-[16.5rem] lg:left-[9%] lg:top-[-55%] lg:w-[26rem] xl:left-[6%] xl:top-[-38%] 2xl:left-[4%] 2xl:top-[-40%] 2xl:w-[28rem] 3xl:left-[3%] 3xl:top-[-30%] 3xl:w-[30rem]" />
        <Stars1SVG className="pointer-events-none absolute left-[87%] top-[-60%] z-10 w-12 sm:left-3/4 md:left-[73%] md:w-14 lg:left-[74%] lg:top-[-68%] lg:w-24 xl:left-[53%] xl:top-[-62%] 2xl:left-[48%] 3xl:left-[45.5%] 3xl:w-28" />
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
          <YenSloganSVG className="hidden xl:absolute xl:left-[21%] xl:block xl:w-44 2xl:left-1/4 2xl:w-48 3xl:left-[26%] 3xl:w-52" />
          <span>SEXUAL</span>
          <div className="sm:absolute sm:right-[28%] sm:top-[-54%] sm:rotate-90 sm:text-[3rem] lg:text-[4rem] xl:-top-1/2 xl:right-[34%] xl:text-[4.5rem] 2xl:right-[36%] 2xl:text-[6rem]">
            ‡
          </div>
        </h1>
      </div>

      <Stars3SVG className="hidden sm:mx-auto sm:mt-6 sm:block sm:w-3/5 lg:hidden" />

      <div className="mt-6 flex items-end justify-between sm:mx-5 sm:mt-12 lg:mx-14 xl:mx-10 xl:-mt-10 xl:justify-end">
        <YenSloganSVG className="hidden sm:block sm:w-36 md:w-40 xl:hidden" />
        <ChevronDouble className="mx-auto w-8 sm:mx-0 sm:w-6 md:w-8 xl:w-12" />
      </div>

      <div className="hidden 2xl:pointer-events-none 2xl:absolute 2xl:inset-x-10 2xl:top-[calc(50%-1rem)] 2xl:flex 2xl:-translate-y-1/2 2xl:items-center 2xl:justify-between">
        <IndicatorPage title="Bienvenidx" index="1 of 4" />
        <div className="2xl:font-title-full 2xl:text-8xl">†</div>
      </div>
    </div>
  );
}
