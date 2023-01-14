import { List } from '@/components/faq/List';
import { TitlePage } from '@/components/TitlePage';

export default function FAQ() {
  return (
    <section className="mt-4 mx-5">
      <div className="mx-5 mb-4 text-center">
        <TitlePage>F.A.Q.</TitlePage>
      </div>

      <div className="uppercase text-center text-primary-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab esse illo fuga explicabo.
      </div>

      <List />
    </section>
  );
}
