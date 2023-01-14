import { List } from '@/components/talleres-online/List';
import { TitlePage } from '@/components/TitlePage';

export default function Talleres() {
  return (
    <section className="mt-10 mx-5">
      <div className="mx-5 mb-4 text-center">
        <TitlePage>TALLERES ONLINE</TitlePage>
      </div>
      <div className="uppercase text-center text-primary-blue">
        En esta sección vas a encontrar TODOS los talleres pregrabados para que hagas a tu propio
        ritmo.
      </div>
      <List />
    </section>
  );
}
