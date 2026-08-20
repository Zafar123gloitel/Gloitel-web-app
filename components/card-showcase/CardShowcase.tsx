import React from 'react';
import { Card, CardDescription, CardDivider, CardIcon, CardTitle, StepBadge } from '../atoms/card';

interface CardShowcaseProps {
  items: {
    step?: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  showDivider?: boolean;
  showStepBadge?: boolean;

  // New Props
  gridClassName?: string;
  cardClassName?: string;
  cardHeight?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  iconClassName?: string;
}

export function CardShowcase({
  items,
  showDivider = true,
  showStepBadge = true,
  gridClassName = '',
  cardClassName = 'h-full',
  cardHeight = '',
  titleClassName = '',
  descriptionClassName = '',
  iconClassName = '',
}: CardShowcaseProps) {
  return (
    <div
      className={`my-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-6 ${gridClassName}`}
    >
      {items.map((item, index) => (
        <div key={index} className={`relative ${cardHeight} `}>
          {showStepBadge && (
            <div className='absolute -top-22 left-1/2 z-20 -translate-x-1/2'>
              <StepBadge number={item.step ?? index + 1} />
            </div>
          )}

          <Card className={cardClassName}>
            <div className='flex h-full flex-col'>
              <CardIcon className={iconClassName}>{item.icon}</CardIcon>

              <div className='mt-8 flex flex-1 flex-col'>
                {showDivider && <CardDivider className='mb-8' />}

                <CardTitle className={`text-title text-[24px] leading-8 ${titleClassName}`}>
                  {item.title}
                </CardTitle>

                <CardDescription
                  className={`text-description mt-3 text-[14px] leading-6 ${descriptionClassName}`}
                >
                  {item.description}
                </CardDescription>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
