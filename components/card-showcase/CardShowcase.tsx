import { number } from "framer-motion";
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
    step: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  showDivider?: boolean;
  showStepBadge?: boolean;
}

export function CardShowcase({
  items,
  showDivider = true,
  showStepBadge = true,
}: CardShowcaseProps) {
  return (
    <div className="grid gap-y-16 gap-x-6 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <div key={item.title} className="relative">
          {/* Step Badge */}
          {showStepBadge && (
            <div className="absolute -top-22 left-1/2 -translate-x-1/2 z-20 ">
              <StepBadge number={item.step ?? index + 1} />
            </div>
          )}

          <Card>
            <div className="flex h-full flex-col ">
              <CardIcon>{item.icon}</CardIcon>

              <div className="">
                {showDivider && <CardDivider />}

                <div className="mt-8 space-y-8">
                  <CardTitle>{item.title}</CardTitle>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
