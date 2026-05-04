import React from "react";

export const BgSquare1 = () => {
  return (
    <div>
      <div
        className="absolute top-[100px] -left-5 z-0 h-84 w-1/4 rounded-t-2xl border-t border-r border-white/5
      bg-gradient-to-t  from-transparent to-blue-700/20 transform -rotate-[40deg] skew-y-[40deg]"
      ></div>
      <div
        className="absolute top-[100px] -right-5 z-0 h-84 w-1/4 rounded-t-2xl border-t border-l border-white/5 
      bg-gradient-to-t  from-transparent to-blue-700/20 transform -rotate-[-40deg] skew-y-[-40deg]"
      ></div>
    </div>
  );
};
export const BgSquare2 = () => {
  return (
    <div className="">
      <div
        className="absolute top-[120px] -left-40 z-0 h-60 w-1/3 rounded-t-2xl border-t border-r border-white/5
      bg-gradient-to-t  from-transparent to-blue-700/20 transform -rotate-[40deg] skew-y-[40deg]"
      ></div>
      <div
        className="absolute top-[120px] -right-40 z-0 h-60 w-1/3 rounded-t-2xl border-t border-l border-white/5 
      bg-gradient-to-t  from-transparent to-blue-700/20 transform -rotate-[-40deg] skew-y-[-40deg]"
      ></div>
    </div>
  );
};
export const BgSquare3 = () => {
  return (
    <div>
      <div
        className="absolute top-[200px] -left-40 z-0 h-60 w-1/3 rounded-t-2xl border-t border-r border-white/5
      bg-gradient-to-t  from-transparent to-blue-700/20 transform -rotate-[40deg] skew-y-[40deg]"
      ></div>
      <div
        className="absolute top-[200px] -right-40 z-0 h-60 w-1/3 rounded-t-2xl border-t border-l border-white/5 
      bg-gradient-to-t  from-transparent to-blue-700/20 transform -rotate-[-40deg] skew-y-[-40deg]"
      ></div>
    </div>
  );
};
export const BgSquare4 = () => {
  return (
    <div className="">
      <div
        className="absolute top-0 left-1/2 bottom-50 -translate-x-1/2"
        style={{
          width: "120%",
          height: "25vh",
          background:
            "radial-gradient(circle at center, rgba(0,90,355,0.7), rgba(0,0,0,0) 80%)",
          filter: "blur(30px)",
          opacity: 0.7,
        }}
      />
      <div className="h-40">
        <div
          className="absolute top-[230px] left-35 z-0 h-60 w-[65%]  rounded-t-2xl  border-t border-l border-white/10
        bg-[#050505] transform rotate-[40deg] -skew-y-[40deg]"
        ></div>
        <div
          className="absolute top-[230px] right-35 z-0 h-60 w-[65%] rounded-t-2xl  border-t border-r border-white/10
        bg-[#050505]  transform -rotate-[40deg] skew-y-[40deg]"
        ></div>
      </div>
    </div>
  );
};
