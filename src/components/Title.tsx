type TitleProps = {
  value: string;
};

export function Title({ value }: TitleProps) {
  return (
    <h1 className="text-[200px] leading-[78.5%] tracking-[-0.02em] [text-shadow:0_0_19px_rgba(0,59,195,0.4)] text-primary-blue">
      {value}
    </h1>
  );
}
