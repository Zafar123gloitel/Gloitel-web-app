interface ProblemCardProps {
  title: string;
  step?: boolean;
  number?: number | string;
  isLast?: boolean;
}

const renderTitle = (title: string) => {
  const colonIndex = title.indexOf(':');

  // Agar colon nahi mila, to poora text normal render karo
  if (colonIndex === -1) {
    return title;
  }

  const boldPart = title.slice(0, colonIndex + 1); // ':' included
  const restPart = title.slice(colonIndex + 1);

  return (
    <>
      <span className='font-semibold'>{boldPart}</span>
      {restPart}
    </>
  );
};

const ProblemCard = ({ title, step = false, number = 1, isLast = false }: ProblemCardProps) => {
  return (
    <div className={`group relative overflow-visible rounded-2xl p-[1px] ${step ? '' : ''}`}>
      {/* Blue top glow */}
      <div
        className={`absolute ${step ? 'left-[60%]' : 'left-1/2'} top-0 h-[8px] w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[2px]`}
      />

      {step ? (
        <div className='relative'>
          {!isLast && (
            <div className='absolute top-[calc(50%+28px)] left-0 h-[84px] w-0.5 -translate-y-0 bg-white/15' />
          )}
          <div className='text-title absolute top-1/2 left-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFFFFF4D] bg-[#1447E633] text-3xl font-light shadow-[0_0_35px_rgba(37,99,235,.45)]'>
            {number}
          </div>
          <div className='relative ml-20 flex min-h-[86px] items-center rounded-2xl border border-white/10 bg-[#080B18] px-8 py-6 text-left transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_0_35px_rgba(37,99,235,.18)]'>
            <p className='text-title text-[12px] leading-relaxed font-normal sm:text-[20px]'>
              {renderTitle(title)}
            </p>
          </div>
        </div>
      ) : (
        <div className='relative flex h-full min-h-[86px] items-center justify-center rounded-2xl border border-white/10 bg-[#080B18] px-8 text-center transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_0_35px_rgba(37,99,235,.18)]'>
          <p className='text[12px] text-title py-2 leading-relaxed font-normal sm:text-[20px]'>
            {renderTitle(title)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProblemCard;
