'use client';

import { useRef } from 'react';
import { AnimatePresence, Transition, Variants, motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';
import useMouse from '@react-hook/mouse-position';
import { Title } from '@/components/Title';
import { Button } from '@/components/Button';
import { IndicatorPage } from '@/components/IndicatorPage';
import RunesSVG from '@/assets/svgs/runes.svg';
import GlyphsSVG from '@/assets/svgs/glyphs.svg';
import RunesLargeSVG from '@/assets/svgs/runes-large.svg';
import GradientShopSVG from '@/assets/svgs/gradient-shop.svg';
import GradientShopLargeSVG from '@/assets/svgs/gradient-shop-large.svg';

export function Shop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMouse(containerRef);

  const transition: Transition = {
    type: 'spring',
    damping: 28,
    stiffness: 500,
    duration: 1,
    opacity: {
      delay: 0.35,
      duration: 0.35,
    },
    scale: {
      delay: 0.35,
      duration: 0.35,
    },
  };

  const variants: Variants = {
    visible: {
      scale: 1,
      opacity: 1,
      cursor: 'none',
      x: mouse.x ? mouse.x - 104 : 0,
      y: mouse.y ? mouse.y - 104 : 0,
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative mt-40 cursor-none pb-20 sm:mt-64 xl:mt-[24rem] xl:pb-40"
    >
      <RunesSVG className="absolute -top-12 mx-5 sm:-top-16 sm:mx-10 lg:mx-20 xl:hidden" />
      <RunesLargeSVG className="hidden xl:absolute xl:inset-x-20 xl:-top-24 xl:block 2xl:inset-x-36 2xl:-top-36" />

      <div className="relative mx-5 flex flex-col items-center pt-44 text-center sm:mx-10 sm:pt-56 md:pt-64 lg:mx-20 lg:pt-72 xl:mx-10 xl:pt-60 2xl:pt-80">
        <GlyphsSVG className="mb-8 w-28 xl:mb-12" />

        <div className="xl:w-[35rem]">
          <Title variant="secondary">Productos YEN</Title>
        </div>

        <div className="mb-11 mt-4 uppercase leading-[129%]">
          <Balancer className="xl:!max-w-2xl">
            Encontrá en un solo lugar todas las herramientas que necesitás para embarcarte en tu
            viaje de auto-descubrimiento y reprogramación sexual. productos ética y responsablemente
            producidos.
          </Balancer>
        </div>

        <div className="w-full xl:hidden">
          <Button variant="secondary">
            <a
              className="flex h-full items-center justify-center"
              href="https://shop.casayen.com"
              target="_blank"
              rel="noreferrer"
            >
              IR AL SHOP ONLINE →
            </a>
          </Button>
        </div>
      </div>

      <div className="hidden 2xl:pointer-events-none 2xl:absolute 2xl:inset-x-10 2xl:top-1/2 2xl:flex 2xl:-translate-y-1/2 2xl:items-center 2xl:justify-between">
        <IndicatorPage title="Shop" index="4 of 4" />
      </div>

      <GradientShopSVG className="absolute -left-0 top-0 -z-10 xl:hidden" />
      <GradientShopLargeSVG className="hidden xl:absolute xl:-left-0 xl:top-0 xl:-z-10 xl:block" />

      <AnimatePresence>
        {mouse.clientX && mouse.clientY && (
          <motion.a
            animate="visible"
            transition={transition}
            initial={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.25 } }}
            variants={variants}
            className="absolute left-0 top-0 z-10 flex h-52 w-52 origin-center flex-col items-center justify-center rounded-full bg-primary-black font-serif leading-tight text-secondary-white"
            href="https://shop.casayen.com"
            target="_blank"
            rel="noreferrer"
          >
            <div>IR AL</div>
            <div>SHOP ONLINE</div>
            <div>→</div>
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  );
}
