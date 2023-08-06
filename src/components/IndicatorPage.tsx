type IndicatorPageProps = {
  title: string;
  index?: string;
};

export function IndicatorPage({ title, index }: IndicatorPageProps) {
  return (
    <div className="2xl:font-title-full 2xl:-ml-1 2xl:flex 2xl:rotate-180 2xl:gap-2 2xl:text-2xl 2xl:leading-none 2xl:[writing-mode:vertical-rl]">
      <span>{index}</span>
      {index && <span>————</span>}
      <span>{title}</span>
    </div>
  );
}
