import { Card, CardDescription, CardIcon, CardTitle } from "../../components";

interface TimelineCardProps {
  item: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  side: "left" | "right";
}

const TimelineCard = ({ item, side }: TimelineCardProps) => {
  return (
    <div className="grid min-h-[300px] grid-cols-[1fr_48px_1fr] items-center">

      {/* LEFT SIDE */}
      <div className="flex justify-end">
        {side === "left" && (
          <div className="relative">
            
            {/* Dashed line */}
            <div className="absolute left-full top-1/2 h-px w-28 border-t border-dashed border-white/30" />

            <Card className="relative z-10 h-[350px] w-[350px]">
              <CardIcon className="text-blue-500">
                {item.icon}
              </CardIcon>

              <CardTitle className="mt-4 leading-[1.25] text-4xl">
                {item.title}
              </CardTitle>

              <CardDescription className="text-muted mt-5 leading-6">
                {item.description}
              </CardDescription>
            </Card>

          </div>
        )}
      </div>


      {/* CENTER DOT */}
      <div className="relative z-20 flex justify-center">
        <div className="h-10 w-10 rounded-full border border-blue-400 bg-blue-950/80 shadow-[0_0_20px_rgba(37,99,235,0.25)]" />
      </div>


      {/* RIGHT SIDE */}
      <div className="flex justify-start">
        {side === "right" && (
          <div className="relative">

            {/* Dashed line */}
            <div className="absolute right-full top-1/2 h-px w-28 border-t border-dashed border-white/30" />

            <Card className="relative z-10 h-[350px] w-[350px]">
              <CardIcon className="text-blue-500">
                {item.icon}
              </CardIcon>

              <CardTitle className="mt-4 leading-[1.25] text-4xl">
                {item.title}
              </CardTitle>

              <CardDescription className="text-muted mt-5 leading-6">
                {item.description}
              </CardDescription>
            </Card>

          </div>
        )}
      </div>

    </div>
  );
};

export default TimelineCard;