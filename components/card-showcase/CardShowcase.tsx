import {
  Card,
  CardDescription,
  CardDivider,
  CardIcon,
  CardTitle,
  StepBadge,
} from "../atoms/card";

interface CardShowcaseProps {
  items: {
    step?: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  showDivider?: boolean;
  showStepBadge?: boolean;

  // New Props
  gridClassName?: string;
  cardClassName?: string;
  cardHeight?: string;
}

export function CardShowcase({
  items,
  showDivider = true,
  showStepBadge = true,
  gridClassName = "",
  cardClassName = "h-full",
  cardHeight = "max-h-[350px] max-w-[350px]",
}: CardShowcaseProps) {
  return (
    <div
      className={`flex flex-wrap my-10 items-center justify-center gap-x-6  ${gridClassName}`}
    >
      {items.map((item, index) => (
        <div key={item.title} className={`relative ${cardHeight} `}>
          {showStepBadge && (
            <div className="absolute left-1/2 -top-22 z-20 -translate-x-1/2">
              <StepBadge number={item.step ?? index + 1} />
            </div>
          )}

          <Card className={cardClassName}>
            <div className="flex h-full flex-col">
              <CardIcon>{item.icon}</CardIcon>

              <div className="mt-8 flex flex-1 flex-col">
                {showDivider && <CardDivider className="mb-8" />}

                <CardTitle>{item.title}</CardTitle>

                <CardDescription className="mt-6 text-sm flex-1 leading-0 ">
                  {item.description}
                </CardDescription>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
