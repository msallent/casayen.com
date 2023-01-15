import { Hero } from '@/components/home/Hero';
import { Shop } from '@/components/home/Shop';
import { About } from '@/components/home/About';
import { Links } from '@/components/home/Links';

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
