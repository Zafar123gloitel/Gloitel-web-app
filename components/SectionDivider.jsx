import React from "react";

export const HorizontalDivider = () => {
  return (
    <div className="w-full h-px mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-3 relative z-10"></div>
  );
};

export const VerticalDivider = () => {
  return (
    <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent m-2 relative z-10"></div>
  );
};
``;
