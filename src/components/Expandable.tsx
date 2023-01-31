'use client';

import { ReactNode, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import classNames from 'classnames';
import { Title } from '@/components/Title';
import PlusSVG from '@/assets/svgs/plus.svg';

type ExpandableProps = {
  title: string;
  children: ReactNode;
  description?: string;
  buttonLabel?: {
    collapsed: string;
    expanded: string;
  };
  withBottomBorder?: boolean;
};

export function Expandable({
  title,
  children,
  description,
  buttonLabel,
  withBottomBorder,
}: ExpandableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={classNames('pt-8 pb-6 border-t border-primary-blue last:pb-0', {
        'border-b': withBottomBorder,
      })}
    >
      <div className="flex items-start justify-between text-primary-blue">
        <div className="max-w-[75%]">
          <Title size="small">
            <Balancer>{title}</Balancer>
          </Title>
          {description && <div className="mt-2.5 uppercase">{description}</div>}
        </div>

        <button
          className="flex flex-col items-end"
          onClick={toggle}
          aria-label={
            isExpanded ? buttonLabel?.expanded || 'Colapsar' : buttonLabel?.collapsed || 'Expandir'
          }
        >
          <PlusSVG className={classNames('w-8 h-8 mb-2', { 'rotate-45': isExpanded })} />
          {buttonLabel && (
            <span className="uppercase">
              {isExpanded ? buttonLabel?.expanded : buttonLabel?.collapsed}
            </span>
          )}
        </button>
      </div>

      <div className={classNames('overflow-hidden', isExpanded ? 'mt-6 h-auto' : 'h-0')}>
        {children}
      </div>
    </div>
  );
}
