import Image from 'next/image';
import CirclesSVG from '@/assets/svgs/circles.svg';
import StarsSVG from '@/assets/svgs/stars.svg';
import DoubleArrowSVG from '@/assets/svgs/double-arrow.svg';
import backgroundGradient from '@/assets/images/gradient-1.png';

export function Hero() {
  return (
    <section className="mt-24 text-primary-blue">
      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute top-0 left-0 w-full -z-10"
        loading="eager"
      />

      <div className="flex flex-col font-title-full text-[90px] w-full">
        <div className="relative flex items-center gap-1.5 ml-[4%]">
          <div className="text-[60px]">→</div>
          <div className="font-sans text-xs tracking-normal w-20 text-right leading-[14px]">
            BIENVENIDX A TU
          </div>
          <h1>VIAJE</h1>
          <CirclesSVG className="absolute top-[-30%] left-[4%] w-[230px] z-10 pointer-events-none" />
          <StarsSVG className="absolute top-[-60%] left-[80%] w-[49px] z-10 pointer-events-none" />
        </div>
        <h1 className="ml-[4%]">INTER-</h1>
        <h1 className="ml-[18%]">GALÁCTICO</h1>
        <h1 className="ml-[14%]">DE REPRO-</h1>
        <h1 className="ml-[4%]">GRAMACIÓN</h1>
        <div className="relative flex items-center ml-[23%]">
          <h1>SEXUAL</h1>
          <div className="absolute top-[-54%] right-[25%] text-[40px] rotate-90">‡</div>
        </div>
      </div>

      <DoubleArrowSVG className="w-6 mt-6 mx-auto mb-10" />

      <div className="text-sm relative left-[-22px] whitespace-nowrap">
        COSMIC SEXUALITY<span className="mx-1.5">≈</span>COSMIC SEXUALITY
        <span className="mx-1.5">≈</span>COSMIC SEXUALITY
      </div>
    </section>
  );
}
