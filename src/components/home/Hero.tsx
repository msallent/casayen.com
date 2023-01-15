import Image from 'next/image';
import StarsSVG from '@/assets/svgs/stars-1.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-1.svg';
import ChevronDouble from '@/assets/svgs/chevron-double.svg';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export function Hero() {
  return (
    <section className="mt-24 text-primary-blue">
      <div className="flex flex-col font-title-full text-[24vw] w-full">
        <div className="relative flex items-center gap-1.5 ml-[4%]">
          <div className="text-[60px]">→</div>
          <div className="font-sans text-xs tracking-normal w-20 text-right leading-[14px]">
            BIENVENIDX A TU
          </div>
          <h1>VIAJE</h1>
          <EllipsisSVG className="absolute top-[-30%] left-[4%] w-[230px] z-10 pointer-events-none" />
          <StarsSVG className="absolute top-[-60%] left-[80%] w-[49px] z-10 pointer-events-none" />
        </div>
        <h1 className="ml-[4%]">INTER-</h1>
        <h1 className="ml-[18%]">GALÁCTICO</h1>
        <h1 className="ml-[14%]">DE REPRO-</h1>
        <h1 className="ml-[4%]">GRAMACION</h1>
        <div className="relative flex items-center ml-[23%]">
          <h1>SEXUAL</h1>
          <div className="absolute top-[-54%] right-[25%] text-[40px] rotate-90">‡</div>
        </div>
      </div>

      <ChevronDouble className="w-6 mt-6 mx-auto mb-10" />

      <div className="relative left-[-22px] whitespace-nowrap">
        COSMIC SEXUALITY<span className="mx-1.5">≈</span>COSMIC SEXUALITY
        <span className="mx-1.5">≈</span>COSMIC SEXUALITY
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute top-0 left-0 w-full -z-10"
        placeholder="blur"
        priority
      />
    </section>
  );
}
