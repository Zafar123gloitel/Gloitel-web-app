import React from 'react';
import { Card, CardIcon, CardTitle } from '@/components';

interface BusinessCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const BusinessCard = ({ icon, title, className }: BusinessCardProps) => {
  return (
    <div className='group'>
      <Card
        className={` ${className ?? ''} transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/5 hover:shadow-[0_10px_40px_rgba(37,99,235,0.25)]`}
      >
        <div className='flex items-center gap-5'>
          <div className='transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3'>
            <CardIcon>{icon}</CardIcon>
          </div>

          <CardTitle className='text-title text-[20px] transition-colors duration-300 group-hover:text-blue-400'>
            {title}
          </CardTitle>
        </div>
      </Card>
    </div>
  );
};

export default BusinessCard;
