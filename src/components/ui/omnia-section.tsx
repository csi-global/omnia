import { cn } from "@/lib/utils";
import type { FC, PropsWithChildren } from "react";

export interface OmniaSectionProps {
  className?: string;
  as?: 'section' | 'div' | 'article';
  id?: string;
}

const OmniaSection: FC<PropsWithChildren<OmniaSectionProps>> = ({
  children,
  className,
  as: Component = 'section',
  id
}) => {
  return (
    <Component className={cn("section-padding fix", className)} id={id}>
      <div className="container">
        {children}
      </div>
    </Component>
  );
};

export default OmniaSection;
