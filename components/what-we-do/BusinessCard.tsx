import React from 'react';
import { Card, CardIcon, CardTitle } from '@/components';

interface BusinessCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const BusinessCard = ({ icon, title, className }: BusinessCardProps) => {
  return (
    <div>
      <Card className={className}>
        <div className='flex items-center gap-5'>
          <CardIcon>{icon}</CardIcon>
          <CardTitle className='text-title text-[20px]'>{title}</CardTitle>
        </div>
      </Card>
    </div>
  );
};

export default BusinessCard;
