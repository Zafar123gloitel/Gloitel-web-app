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
  titleClassName?: string;
  descriptionClassName?: string;
  iconClassName?: string;
}

export function CardShowcase({
  items,
  showDivider = true,
  showStepBadge = true,
  gridClassName = "",
  cardClassName = "h-full",
  cardHeight = "",
  titleClassName = "",
  descriptionClassName = "",
  iconClassName = "",
}: CardShowcaseProps) {
  return (
    <div
      className={`flex flex-wrap my-10 items-center justify-center gap-x-6 gap-y-6  ${gridClassName}`}
    >
      {items.map((item, index) => (
        <div key={index} className={`relative ${cardHeight} `}>
          {showStepBadge && (
            <div className="absolute left-1/2 -top-22 z-20 -translate-x-1/2">
              <StepBadge number={item.step ?? index + 1} />
            </div>
          )}

          <Card className={cardClassName}>
            <div className="flex h-full flex-col">
              <CardIcon className={iconClassName}>{item.icon}</CardIcon>

              <div className="mt-8 flex flex-1 flex-col">
                {showDivider && <CardDivider className="mb-8" />}

                <CardTitle className={`text-title text-[24px] leading-8  ${titleClassName}`}>
                  {item.title}
                </CardTitle>

                <CardDescription className={`text-[14px] leading-6 mt-3 text-description ${descriptionClassName}`}>
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
