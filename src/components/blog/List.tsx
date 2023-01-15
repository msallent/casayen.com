import { Entry } from '@/components/blog/Entry';

export function List() {
  return (
    <div className="mt-12 mb-20 space-y-16">
      <Entry
        title="Lorem ipsum dolor sit"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nulla, fugit deleniti consequatur rem dicta ea autem eligendi quasi ullam necessitatibus voluptatem dignissimos saepe!"
        url="/"
      />

      <Entry
        title="Lorem ipsum dolor sit"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nulla, fugit deleniti consequatur rem dicta ea autem eligendi quasi ullam necessitatibus voluptatem dignissimos saepe!"
        url="/"
      />
    </div>
  );
}
