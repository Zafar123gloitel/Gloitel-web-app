import React from "react";
import { Card, CardIcon, CardTitle } from "@/components";

interface BusinessCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const BusinessCard = ({ icon, title, className }: BusinessCardProps) => {
  return (
    <div>
        <Card className={className}>
          <div className="flex gap-5 items-center">
            <CardIcon>
              {icon}
            </CardIcon>
            <CardTitle className="text-[20px] text-title">
              {title}
            </CardTitle>
          </div>

        </Card>
    </div>
  );
};

export default BusinessCard;
