// import {
//   Card,
//   CardDescription,
//   CardIcon,
//   CardTitle,
// } from "../../components";

// interface TimelineCardProps {
//   item: {
//     icon: React.ReactNode;
//     year: string;
//     description: string;
//   };
//   side: "left" | "right";
// }

// const TimelineCard = ({ item, side }: TimelineCardProps) => {
//   return (
//     <div className="relative grid h-[150px] grid-cols-[1fr_48px_1fr] items-center">

//       {/* ================= LEFT SIDE ================= */}
//       <div className="flex justify-end pr-24">
//         {side === "left" && (
//           <div className="relative">

//             {/* Dashed connector */}
//             <div className="absolute left-full top-1/2 z-0 w-[125px] -translate-y-1/2 border-t border-dashed border-white/80" />

//             {/* Card */}
//             <Card className="relative z-10 min-h-[125px] min-w-[270px] ">

//               <div className="flex gap-5">
//                 <div className="w-14 h-14">
//                   <CardIcon className="text-blue-500 ">
//                     {item.icon}
//                   </CardIcon>
//                 </div>

//                 <div>
//                   <CardTitle className="mt-2 text-lg leading-tight">
//                     {item.year}
//                   </CardTitle>

//                   <CardDescription className="mt-3 text-sm text-description leading-5">
//                     {item.description}
//                   </CardDescription>
//                 </div>

//               </div>
//             </Card>

//           </div>
//         )}
//       </div>


//       {/* ================= CENTER DOT ================= */}
//       <div className="relative z-20 flex items-center justify-center">

//         <div className="h-10 w-10 rounded-full border border-blue-400 bg-[#06163d] shadow-[0_0_15px_rgba(37,99,235,0.25)]" />

//       </div>


//       {/* ================= RIGHT SIDE ================= */}
//       <div className="flex justify-start pl-24">
//         {side === "right" && (
//           <div className="relative">

//             {/* Dashed connector */}
//             <div className="absolute right-full top-1/2 z-0 w-[125px] -translate-y-1/2 border-t border-dashed border-white/80" />

//             <Card className="relative z-10 min-h-[125px] min-w-[270px] ">

//               <div className="flex gap-5">
//                 <div className="w-14 h-14">
//                   <CardIcon className="text-blue-500 ">
//                     {item.icon}
//                   </CardIcon>
//                 </div>


//                 <div>
//                   <CardTitle className="mt-2 text-lg leading-tight">
//                     {item.year}
//                   </CardTitle>

//                   <CardDescription className="mt-3 text-sm text-description leading-5">
//                     {item.description}
//                   </CardDescription>
//                 </div>

//               </div>
//             </Card>

//           </div>
//         )}
//       </div>

//     </div>
//   );
// };

// export default TimelineCard;



import {
  Card,
  CardDescription,
  CardIcon,
  CardTitle,
} from "../../components";

interface TimelineCardProps {
  item: {
    icon: React.ReactNode;
    year: string;
    description: string;
  };
  side: "left" | "right";
}

const TimelineCard = ({ item, side }: TimelineCardProps) => {
  return (
    <div className="relative">

      {/* ================= DESKTOP ================= */}
      <div className="relative hidden h-[150px] grid-cols-[1fr_48px_1fr] items-center md:grid">

        {/* LEFT SIDE */}
        <div className="flex justify-end pr-24">
          {side === "left" && (
            <div className="relative">

              {/* Dashed connector */}
              <div className="absolute left-full top-1/2 z-0 w-[125px] -translate-y-1/2 border-t border-dashed border-white/80" />

              <Card className="relative z-10 min-h-[125px] min-w-[270px]">
                <div className="flex gap-5">
                  <div className="h-14 w-14">
                    <CardIcon className="text-blue-500">
                      {item.icon}
                    </CardIcon>
                  </div>

                  <div>
                    <CardTitle className="mt-2 text-lg leading-tight">
                      {item.year}
                    </CardTitle>

                    <CardDescription className="mt-3 text-sm leading-5 text-description">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* CENTER DOT */}
        <div className="relative z-20 flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border border-blue-400 bg-[#06163d] shadow-[0_0_15px_rgba(37,99,235,0.25)]" />
        </div>

 
        <div className="flex justify-start pl-24">
          {side === "right" && (
            <div className="relative">

      
              <div className="absolute right-full top-1/2 z-0 w-[125px] -translate-y-1/2 border-t border-dashed border-white/80" />

              <Card className="relative z-10 min-h-[125px] min-w-[270px]">
                <div className="flex gap-5">
                  <div className="h-14 w-14">
                    <CardIcon className="text-blue-500">
                      {item.icon}
                    </CardIcon>
                  </div>

                  <div>
                    <CardTitle className="mt-2 text-lg leading-tight">
                      {item.year}
                    </CardTitle>

                    <CardDescription className="mt-3 text-sm leading-5 text-description">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="relative flex min-h-[160px] items-center md:hidden">

        {/* Blue Dot */}
        <div className="relative z-20 flex w-10 shrink-0 items-center justify-center">
          <div className="h-10 w-10 rounded-full border border-blue-400 bg-[#06163d] shadow-[0_0_15px_rgba(37,99,235,0.35)]" />
        </div>

        {/* Horizontal Connector */}
        <div className="relative h-px w-6 shrink-0 border-t border-dashed border-white/80" />

        {/* Card */}
        <div className="relative z-10 flex-1 py-4">
          <Card className="w-full min-h-[125px]">
            <div className="flex gap-4">

              <div className="h-12 w-12 shrink-0">
                <CardIcon className="text-blue-500">
                  {item.icon}
                </CardIcon>
              </div>

              <div className="min-w-0">
                <CardTitle className="text-base leading-tight">
                  {item.year}
                </CardTitle>

                <CardDescription className="mt-2 text-sm leading-5 text-description">
                  {item.description}
                </CardDescription>
              </div>

            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default TimelineCard;