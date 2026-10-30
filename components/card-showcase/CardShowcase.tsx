'use client';

import React, { useRef, useState } from 'react';
import { Card, CardDescription, CardDivider, CardIcon, CardTitle, StepBadge } from '../atoms/card';

interface ColumnConfig {
  base?: number; // default (mobile / < sm)
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface CardShowcaseProps {
  items: {
    step?: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  showDivider?: boolean;
  showStepBadge?: boolean;

  // New Props
  columns?: ColumnConfig; // e.g. { base: 1, sm: 2, lg: 3 }
  gridClassName?: string; // extra/override classes appended after the generated grid-cols classes
  cardClassName?: string;
  cardHeight?: string; // e.g. 'h-[420px]'
  titleClassName?: string;
  descriptionClassName?: string;
  iconClassName?: string;
}

interface ShowcaseItemProps {
  item: CardShowcaseProps['items'][number];
  index: number;
  showDivider: boolean;
  showStepBadge: boolean;
  cardClassName: string;
  cardHeight: string;
  titleClassName: string;
  descriptionClassName: string;
  iconClassName: string;
}

// Static lookup tables so Tailwind's JIT compiler can see the full class
// strings at build time (dynamically interpolated classes like
// `grid-cols-${n}` get purged since Tailwind scans literal text, not
// runtime values).
const baseColsMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};
const smColsMap: Record<number, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
};
const mdColsMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
};
const lgColsMap: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
};
const xlColsMap: Record<number, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
};

function buildGridColsClass(columns: ColumnConfig) {
  const classes = [baseColsMap[columns.base ?? 1] ?? baseColsMap[1]];
  if (columns.sm) classes.push(smColsMap[columns.sm]);
  if (columns.md) classes.push(mdColsMap[columns.md]);
  if (columns.lg) classes.push(lgColsMap[columns.lg]);
  if (columns.xl) classes.push(xlColsMap[columns.xl]);
  return classes.filter(Boolean).join(' ');
}

function ShowcaseCard({
  item,
  index,
  showDivider,
  showStepBadge,
  cardClassName,
  cardHeight,
  titleClassName,
  descriptionClassName,
  iconClassName,
}: ShowcaseItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const maxTilt = 8; // degrees

    const rotateY = (px - 0.5) * 2 * maxTilt;
    const rotateX = (0.5 - py) * 2 * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    // h-full here lets the grid row's stretched height reach this wrapper
    <div className={`relative h-full ${cardHeight}`} style={{ perspective: '1000px' }}>
      {showStepBadge && (
        <div className='absolute -top-22 left-1/2 z-20 -translate-x-1/2'>
          <StepBadge number={item.step ?? index + 1} />
        </div>
      )}

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className='h-full'
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 150ms ease-out',
        }}
      >
        {/* overflow-hidden clips content if it's taller than a fixed cardHeight */}
        <Card className={`mx-auto h-full overflow-hidden ${cardClassName}`}>
          <div className='flex h-full flex-col'>
            {item.icon ? (
              <CardIcon className={iconClassName}>{item.icon}</CardIcon>
            ) : (
              <StepBadge number={item.step ?? index + 1} />
            )}
            <div className='mt-8 flex flex-1 flex-col'>
              {showDivider && <CardDivider className='mb-8' />}

              <CardTitle className={`text-title text-[24px] leading-8 ${titleClassName}`}>
                {item.title}
              </CardTitle>

              <CardDescription
                className={`mt-3 text-[14px] leading-6 text-white ${descriptionClassName}`}
              >
                {item.description}
              </CardDescription>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function CardShowcase({
  items,
  showDivider = true,
  showStepBadge = true,
  columns = { base: 1, sm: 2, lg: 3 },
  gridClassName = '',
  cardClassName = '',
  cardHeight = '',
  titleClassName = '',
  descriptionClassName = '',
  iconClassName = '',
}: CardShowcaseProps) {
  const gridColsClass = buildGridColsClass(columns);

  return (
    <div className={`my-10 grid items-stretch gap-x-6 gap-y-6 ${gridColsClass} ${gridClassName}`}>
      {items.map((item, index) => (
        <ShowcaseCard
          key={index}
          item={item}
          index={index}
          showDivider={showDivider}
          showStepBadge={showStepBadge}
          cardClassName={cardClassName}
          cardHeight={cardHeight}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
          iconClassName={iconClassName}
        />
      ))}
    </div>
  );
}
