import React from 'react';
import { Card, CardDescription, CardDivider, CardIcon, CardTitle } from '@/components';

interface PodCardProps {
  icon: React.ReactNode;
  badgeText: string;
  teamSize: string;
  title: string;
  description: string;
  compositionHeading?: string;
  composition: string[];
  className?: string;
}

const PodCard: React.FC<PodCardProps> = ({
  icon,
  badgeText,
  teamSize,
  title,
  description,
  compositionHeading = 'Typical Composition',
  composition,
  className = '',
}) => {
  return (
    <Card className={className}>
      {/* Top row: icon + badge */}
      <div className='mb-6 flex items-center justify-between'>
        <CardIcon>{icon}</CardIcon>
        <span className='rounded-md border border-[#36333366] px-3 py-1.5 text-xs font-semibold tracking-widest uppercase'>
          {badgeText}
        </span>
      </div>

      {/* Team size */}
      <p className='mb-2 text-sm font-medium tracking-wide text-blue-400'>{teamSize}</p>

      {/* Title */}
      <CardTitle className='mb-3'>{title}</CardTitle>

      {/* Description */}
      <CardDescription className='text-description mb-6'>{description}</CardDescription>

      <CardDivider className='mb-6' />

      {/* Composition */}
      <p className='mb-4 text-base font-medium'>{compositionHeading}</p>

      <ul className='flex flex-col gap-3'>
        {composition.map((item, index) => (
          <li key={index} className='flex items-center gap-3'>
            <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500' />
            <span className='text-description text-sm'>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PodCard;
