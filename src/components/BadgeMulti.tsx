import { Badge } from '@/components/Badge';
import ChevronSVG from '@/assets/svgs/chevron.svg';

type BadgeMultiProps = {
  title: string;
  description: string;
};

export function BadgeMulti({ title, description }: BadgeMultiProps) {
  return (
    <div className="flex items-center gap-5">
      <ChevronSVG className="w-5 rotate-[270deg]" />
      <div>
        <Badge>{title}</Badge>
        <Badge>{description}</Badge>
      </div>
    </div>
  );
}
