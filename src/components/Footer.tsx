import { Title } from '@/components/Title';
import YenSloganSVG from '@/assets/svgs/yen-slogan.svg';
import InstagramSVG from '@/assets/svgs/instagram.svg';

export function Footer() {
  return (
    <footer className="bg-secondary-black px-5 py-8 sm:p-10 lg:px-20 xl:p-10">
      <div className="relative xl:flex xl:justify-between">
        <div className="border-b border-primary-blue pb-5 xl:basis-1/2 xl:self-start">
          <YenSloganSVG className="w-40" />
        </div>

        <div className="flex flex-col text-primary-blue">
          <span className="mb-2 mt-10 uppercase xl:mt-0">Contacto Yen</span>
          <a href="mailto:info@casayen.com">
            <Title size="small">info@casayen.com</Title>
          </a>
          <span className="mb-2 mt-8 uppercase">Contacto Shop</span>
          <a href="mailto:shop@casayen.com">
            <Title size="small">shop@casayen.com</Title>
          </a>
        </div>

        <div className="flex flex-col text-primary-blue">
          <span className="mb-2 mt-8 uppercase xl:mt-0">Social</span>
          <a
            aria-label="Instagram"
            href="https://instagram.com/casa.yen"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramSVG className="w-8" />
          </a>
        </div>

        <span className="absolute bottom-0 right-0 text-[1.14rem] text-primary-blue underline xl:left-0 xl:text-base">
          TÉRMINOS Y CONDICIONES
        </span>
      </div>
    </footer>
  );
}
