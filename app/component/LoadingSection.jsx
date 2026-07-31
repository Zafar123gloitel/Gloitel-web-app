import React from "react";

export function LoadingSection({ minHeight = "min-h-[320px]" }) {
  return (
    <div className={`w-full ${minHeight} px-4 sm:px-6 lg:px-8 py-10`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="h-4 w-28 rounded-full bg-white/10" />
        <div className="h-8 w-3/4 rounded-2xl bg-white/10" />
        <div className="h-4 w-full rounded-full bg-white/10" />
        <div className="h-4 w-5/6 rounded-full bg-white/10" />
        <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-32 rounded-2xl bg-white/10" />
          <div className="h-32 rounded-2xl bg-white/10" />
          <div className="h-32 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}

