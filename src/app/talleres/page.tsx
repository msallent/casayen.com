import { List } from '@/components/talleres/List';
import { Title } from '@/components/Title';
import { TitlePage } from '@/components/TitlePage';

export default function Talleres() {
  return (
    <section className="mt-10 mx-5">
      <TitlePage>TALLERES</TitlePage>
      <div className="flex justify-center mt-px mb-4">
        <Title>ONLINE</Title>
      </div>
      <div className="uppercase text-center text-primary-blue">
        En esta sección vas a encontrar TODOS los talleres pregrabados para que hagas a tu propio
        ritmo.
      </div>
      <List />
    </section>
  );
}
