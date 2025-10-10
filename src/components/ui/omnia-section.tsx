import { cn } from "@/lib/utils";

export default function OmniaSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={cn("section-padding fix", className)}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
