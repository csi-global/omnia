import { cn } from "@/lib/utils";
import type { FC } from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string; // font-awesome class
  className?: string;
  href?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className
}) => {
  return (
    <div className={cn("om-card", className)}>
      {icon && (
        <div className="om-card-icon">
          <i className={icon} aria-hidden="true"></i>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;


