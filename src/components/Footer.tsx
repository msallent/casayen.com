import YenSVG from '@/assets/svgs/yen-2.svg';
import InstagramSVG from '@/assets/svgs/instagram.svg';

export function Footer() {
  return (
    <footer className="mt-8 mx-5 mb-14">
      <YenSVG className="w-36" />
      <div className="flex flex-col mt-5 border-t border-primary-blue text-primary-blue">
        <span className="text-sm uppercase mt-10 mb-2">Contacto Yen</span>
        <a href="mailto:info@casayen.com" className="font-title-full text-[40px]">
          info@casayen.com
        </a>
        <span className="text-sm uppercase mt-8 mb-2">Contacto Shop</span>
        <a href="mailto:shop@casayen.com" className="font-title-full text-[40px]">
          shop@casayen.com
        </a>
        <span className="text-sm uppercase mt-8 mb-2">Social</span>
        <div className="flex justify-between items-end">
          <a href="https://instagram.com/casa.yen" target="_blank" rel="noreferrer">
            <InstagramSVG className="w-8" />
          </a>
          <span className="underline">TÉRMINOS Y CONDICIONES</span>
        </div>
      </div>
    </footer>
  );
}
