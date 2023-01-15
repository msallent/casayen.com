import Image from 'next/image';
import StarsSVG from '@/assets/svgs/stars-1.svg';
import EllipsisSVG from '@/assets/svgs/ellipsis-1.svg';
import ChevronDouble from '@/assets/svgs/chevron-double.svg';
import backgroundGradient from '@/assets/images/gradient-1.webp';

export function Hero() {
  return (
    <section className="mt-24 text-primary-blue">
      <div className="font-title-full flex w-full flex-col text-[24vw]">
        <div className="relative ml-[4%] flex items-center gap-1.5">
          <div className="text-[60px]">→</div>
          <div className="w-20 text-right font-sans text-xs leading-[14px] tracking-normal">
            BIENVENIDX A TU
          </div>
          <h1>VIAJE</h1>
          <EllipsisSVG className="pointer-events-none absolute top-[-30%] left-[4%] z-10 w-[230px]" />
          <StarsSVG className="pointer-events-none absolute top-[-60%] left-[80%] z-10 w-[49px]" />
        </div>
        <h1 className="ml-[4%]">INTER-</h1>
        <h1 className="ml-[18%]">GALÁCTICO</h1>
        <h1 className="ml-[14%]">DE REPRO-</h1>
        <h1 className="ml-[4%]">GRAMACION</h1>
        <div className="relative ml-[23%] flex items-center">
          <h1>SEXUAL</h1>
          <div className="absolute top-[-54%] right-[25%] rotate-90 text-[40px]">‡</div>
        </div>
      </div>

      <ChevronDouble className="mx-auto mt-6 mb-10 w-6" />

      <div className="relative left-[-22px] whitespace-nowrap">
        COSMIC SEXUALITY<span className="mx-1.5">≈</span>COSMIC SEXUALITY
        <span className="mx-1.5">≈</span>COSMIC SEXUALITY
      </div>

      <Image
        aria-hidden
        src={backgroundGradient}
        alt="Background gradient"
        className="absolute top-0 left-0 -z-10 w-full"
        placeholder="blur"
        priority
      />
    </section>
  );
}
