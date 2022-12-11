import { About } from '@/components/home/About';
import { Hero } from '@/components/home/Hero';
import { Links } from '@/components/home/Links';
import { Shop } from '@/components/home/Shop';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Links />
      <Shop />
    </>
  );
}
