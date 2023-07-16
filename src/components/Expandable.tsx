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
  extraActions?: Array<{
    label: string;
    Icon: ReactNode;
    onClick: () => void;
  }>;
};

export function Expandable({
  title,
  children,
  description,
  buttonLabel,
  extraActions,
}: ExpandableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border-t border-primary-blue pb-6 pt-8">
      <div className="flex items-start justify-between text-primary-blue">
        <div className="max-w-[75%]">
          <Title size="small">
            <Balancer>{title}</Balancer>
          </Title>
          {description && <div className="mt-2.5 uppercase">{description}</div>}
        </div>

        <div className="flex gap-8">
          {extraActions?.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className="hidden xl:flex xl:w-20 xl:flex-col xl:items-center xl:text-secondary-white"
            >
              {/* @ts-ignore */}
              <action.Icon className="xl:mb-2 xl:h-12 xl:w-12" />
              <span className="xl:uppercase">{action.label}</span>
            </button>
          ))}
          <button
            className="flex flex-col items-end xl:w-20 xl:items-center"
            onClick={toggle}
            aria-label={
              isExpanded
                ? buttonLabel?.expanded || 'Colapsar'
                : buttonLabel?.collapsed || 'Expandir'
            }
          >
            <PlusSVG
              className={classNames('mb-2 w-8 h-8 xl:w-12 xl:h-12', { 'rotate-45': isExpanded })}
            />
            {buttonLabel && (
              <span className="uppercase">
                {isExpanded ? buttonLabel?.expanded : buttonLabel?.collapsed}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={classNames('overflow-hidden', isExpanded ? 'mt-6 h-auto' : 'h-0')}>
        {children}
      </div>
    </div>
  );
}
