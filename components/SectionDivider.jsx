import React from 'react';

export const HorizontalDivider = () => {
  return (
    <div className='relative z-10 mx-auto my-3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent'></div>
  );
};

export const VerticalDivider = () => {
  return (
    <div className='relative z-10 m-2 hidden h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent sm:block'></div>
  );
};
