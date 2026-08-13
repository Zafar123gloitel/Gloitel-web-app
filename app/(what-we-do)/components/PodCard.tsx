import React from "react";
import {
  Card,
  CardDescription,
  CardDivider,
  CardIcon,
  CardTitle,
} from "../../../components";

interface PodCardProps {
  icon: React.ReactNode;
  badgeText: string;
  teamSize: string;
  title: string;
  description: string;
  compositionHeading?: string;
  composition: string[];
  className?: string;
}

const PodCard: React.FC<PodCardProps> = ({
  icon,
  badgeText,
  teamSize,
  title,
  description,
  compositionHeading = "Typical Composition",
  composition,
  className = "",
}) => {
  return (
    <Card className={className}>
      {/* Top row: icon + badge */}
      <div className="flex items-center justify-between mb-6">
        <CardIcon>{icon}</CardIcon>
        <span className="rounded-md border border-[#36333366] text-xs font-semibold tracking-widest px-3 py-1.5 uppercase">
          {badgeText}
        </span>
      </div>

      {/* Team size */}
      <p className="text-sm font-medium text-blue-400 tracking-wide mb-2">
        {teamSize}
      </p>

      {/* Title */}
      <CardTitle className="mb-3">{title}</CardTitle>

      {/* Description */}
      <CardDescription className="mb-6 text-description">
        {description}
      </CardDescription>

      <CardDivider className="mb-6" />

      {/* Composition */}
      <p className=" text-base font-medium mb-4">{compositionHeading}</p>

      <ul className="flex flex-col gap-3">
        {composition.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
            <span className="text-description text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PodCard;
