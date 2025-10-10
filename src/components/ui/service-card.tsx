import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: string; // font-awesome class
  className?: string;
};

export default function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div className={cn("om-card", className)}>
      {icon ? (
        <div className="om-card-icon">
          <i className={icon}></i>
        </div>
      ) : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


