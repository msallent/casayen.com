import { Title } from '@/components/Title';
import YenSloganSVG from '@/assets/svgs/yen-slogan.svg';
import InstagramSVG from '@/assets/svgs/instagram.svg';

export function Footer() {
  return (
    <footer className="bg-secondary-black px-5 pt-8 pb-14 sm:px-10">
      <YenSloganSVG className="w-36" />

      <div className="mt-5 flex flex-col border-t border-primary-blue text-primary-blue">
        <span className="mt-10 mb-2 uppercase">Contacto Yen</span>
        <a href="mailto:info@casayen.com">
          <Title size="small">info@casayen.com</Title>
        </a>

        <span className="mt-8 mb-2 uppercase">Contacto Shop</span>
        <a href="mailto:shop@casayen.com">
          <Title size="small">shop@casayen.com</Title>
        </a>

        <span className="mt-8 mb-2 uppercase">Social</span>
        <div className="flex items-end justify-between">
          <a
            aria-label="Instagram"
            href="https://instagram.com/casa.yen"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramSVG className="w-8" />
          </a>

          <span className="text-[1.14rem] underline">TÉRMINOS Y CONDICIONES</span>
        </div>
      </div>
    </footer>
  );
}
