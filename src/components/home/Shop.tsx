import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import GlyphsSVG from '@/assets/svgs/glyphs.svg';
import RunesSVG from '@/assets/svgs/runes.svg';
import ShopGradientSVG from '@/assets/svgs/shop-gradient.svg';

export function Shop() {
  return (
    <section className="mt-40 pb-20 relative">
      <RunesSVG className="absolute top-[-45px] mx-5" />

      <div className="relative pt-40 mx-5 text-center flex flex-col items-center">
        <GlyphsSVG className="w-28 mb-8" />
        <Title variant="secondary" size="small">
          Productos YEN
        </Title>
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

      <ShopGradientSVG className="absolute top-0 -left-0 -z-10" />
    </section>
  );
}
