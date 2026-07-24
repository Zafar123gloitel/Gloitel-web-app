// import Image from "next/image";
// import { coreFeaturesData } from "../(product-engineering)/data";

// export default function ArchitectureCircle() {
//   const positions = {
//     top: "lg:top-2 lg:left-1/2 lg:-translate-x-1/2",

//     leftTop: "lg:left-8 xl:left-24 2xl:left-40 lg:top-52",

//     rightTop: "lg:right-8 xl:right-24 2xl:right-40 lg:top-52",

//     leftBottom: "lg:left-8 xl:left-24 2xl:left-40 lg:bottom-52",

//     bottom: "lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2",

//     rightBottom: "lg:right-8 xl:right-24 2xl:right-40 lg:bottom-52",
//   };

//   return (
//     <section className="relative w-full min-h-[1000px] flex items-center justify-center ">
//       {/* Dashed Circle */}
//       <div className="relative w-[320px] h-[320px] rounded-full border border-dashed border-blue-500/50">
//         {/* Center Image */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden bg-white">
//             <Image
//               src="/images/hrm.png"
//               alt="HRM"
//               fill
//               className="object-cover rounded-full"
//             />
//           </div>
//         </div>

//         {/* Orbit Dots */}
//         {[...Array(6)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute w-6 h-6 rounded-full bg-blue-900 border border-blue-500"
//             style={{
//               left: `${50 + 51 * Math.cos(((i * 60 - 90) * Math.PI) / 180)}%`,
//               top: `${50 + 50 * Math.sin(((i * 60 - 90) * Math.PI) / 180)}%`,
//               transform: "translate(-50%,-50%)",
//             }}
//           />
//         ))}
//       </div>

//       {/* Cards */}
//       {coreFeaturesData.map((item) => (
//         <div
//           key={item.id}
//           className={`${positions[item.position]} absolute group hover:border-blue-500/80 w-[280px] rounded-3xl border border-white/10  p-6
//           bg-[linear-gradient(114deg, rgba(28, 57, 142, 0.40) 0%, rgba(55, 42, 172, 0.20) 50%, rgba(55, 42, 172, 0.00) 100%)] before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px] after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]
//               `}
//         >
//           <div
//             className={[
//               "relative",
//               "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[20%] before:-translate-x-1/2",
//               "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
//               "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
//               "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
//               "after:opacity-80",

//               "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10",
//               "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
//               "transition-all duration-300 ease-out",
//               "group-hover:bg-blue-600 ",
//               "group-hover:scale-[1.04]",
//             ]
//               .filter(Boolean)
//               .join(" ")}
//           >
//             {item.icon}
//           </div>

//           <h3 className="text-white text-2xl mt-4 font-semibold mb-3">
//             {item.title}
//           </h3>

//           <p className="text-muted text-sm leading-7">{item.description}</p>
//         </div>
//       ))}
//     </section>
//   );
// }

import Image from "next/image";
import { coreFeaturesData } from "../(product-engineering)/data";

export default function ArchitectureCircle() {
  const positions = {
    top: "lg:top-2 lg:left-1/2 lg:-translate-x-1/2",

    leftTop: "lg:left-8 xl:left-24 2xl:left-40 lg:top-52",

    rightTop: "lg:right-8 xl:right-24 2xl:right-40 lg:top-52",

    leftBottom: "lg:left-8 xl:left-24 2xl:left-40 lg:bottom-52",

    bottom: "lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2",

    rightBottom: "lg:right-8 xl:right-24 2xl:right-40 lg:bottom-52",
  };

  return (
    <section className="relative w-full">
      {/* ---------------- Mobile & Tablet ---------------- */}
      <div className="lg:hidden flex flex-col items-center px-5 py-10">
        {/* Center Image */}
        <div className="relative w-56 h-56 rounded-full overflow-hidden border border-blue-500/40 mb-10">
          <Image
            src="/images/hrm.png"
            alt="HRM"
            fill
            className="object-cover"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl ">
          {coreFeaturesData.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl hover:border-blue-500/80 p-6 border border-white/10
                bg-[linear-gradient(114deg, rgba(28, 57, 142, 0.40) 0%, rgba(55, 42, 172, 0.20) 50%, rgba(55, 42, 172, 0.00) 100%)]
                before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px] after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]
                "
            >
              <div
                className={[
                  "relative",
                  "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[20%] before:-translate-x-1/2",
                  "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
                  "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
                  "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
                  "after:opacity-80",

                  "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10",
                  "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
                  "transition-all duration-300 ease-out",
                  "group-hover:bg-blue-600 ",
                  "group-hover:scale-[1.04]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.icon}
              </div>

              <h3 className="text-white text-2xl mt-4 font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-muted text-sm leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Desktop ---------------- */}
      <div className="hidden lg:flex relative w-full min-h-[1000px] items-center justify-center">
        {/* Dashed Circle */}
        <div className="relative w-[320px] h-[320px] rounded-full border border-dashed border-blue-500/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden">
              <Image
                src="/images/hrm.png"
                alt="HRM"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute w-6 h-6 rounded-full bg-blue-900 border border-blue-500"
              style={{
                left: `${50 + 51 * Math.cos(((i * 60 - 90) * Math.PI) / 180)}%`,
                top: `${50 + 50 * Math.sin(((i * 60 - 90) * Math.PI) / 180)}%`,
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}
        </div>

        {/* Desktop Cards */}
        {coreFeaturesData.map((item) => (
          <div
            key={item.id}
            className={`${positions[item.position]} absolute group hover:border-blue-500/80 w-[280px] rounded-3xl border border-white/10  p-6
          bg-[linear-gradient(114deg, rgba(28, 57, 142, 0.40) 0%, rgba(55, 42, 172, 0.20) 50%, rgba(55, 42, 172, 0.00) 100%)] before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px] after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]
              `}
          >
            <div
              className={[
                "relative",
                "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[20%] before:-translate-x-1/2",
                "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
                "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
                "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
                "after:opacity-80",

                "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10",
                "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
                "transition-all duration-300 ease-out",
                "group-hover:bg-blue-600 ",
                "group-hover:scale-[1.04]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.icon}
            </div>

            <h3 className="text-white text-2xl mt-4 font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-muted text-sm leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
