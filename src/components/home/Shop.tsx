import { Title } from '@/components/Title';
import { Button } from '@/components/Button';
import RunesSVG from '@/assets/svgs/runes.svg';
import GlyphsSVG from '@/assets/svgs/glyphs.svg';
import GradientShopSVG from '@/assets/svgs/gradient-shop.svg';

export function Shop() {
  return (
    <section className="relative mt-40 pb-20">
      <RunesSVG className="absolute top-[-45px] mx-5" />

      <div className="relative mx-5 flex flex-col items-center pt-40 text-center">
        <GlyphsSVG className="mb-8 w-28" />

        <Title variant="secondary">Productos YEN</Title>

        <div className="mt-4 mb-11 w-[330px] uppercase leading-[18px]">
          Encontrá en un solo lugar todas las herramientas que necesitás para embarcarte en tu viaje
          de auto-descubrimiento y reprogramación sexual. productos ética y responsablemente
          producidos.
        </div>

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

      <GradientShopSVG className="absolute top-0 -left-0 -z-10" />
    </section>
  );
}
