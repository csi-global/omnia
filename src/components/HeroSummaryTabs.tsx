"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SummaryTab = {
  value: string;
  label: string;
  summary: string;
  imageSrc?: string;
  imageAlt?: string;
};

type HeroSummaryTabsProps = {
  tabs: SummaryTab[];
  className?: string;
};

export default function HeroSummaryTabs({ tabs, className }: HeroSummaryTabsProps) {
  const first = tabs[0]?.value ?? "tab-1";
  return (
    <section className={className}>
      <div className="container">
        <Tabs defaultValue={first}>
          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value} className="pt-2">
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <h4 className="mb-2" style={{ fontWeight: 800, lineHeight: 1.2 }}>{t.summary}</h4>
                </div>
                <div className="col-lg-6">
                  {t.imageSrc ? (
                    <img src={t.imageSrc} alt={t.imageAlt ?? "Illustration"} className="img-fluid" />
                  ) : (
                    <div className="w-100" style={{ height: 280, borderRadius: 20, background: "#eef1f5", border: "1px solid var(--border)" }} />
                  )}
                </div>
              </div>
            </TabsContent>
          ))}

          <div className="flex justify-center mt-4">
            <TabsList className="w-fit justify-center gap-2 rounded-4 bg-[#f4f4f4] p-1 border-0">
              {tabs.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="rounded-4 px-5 py-3 text-[14px] font-semibold text-foreground/90 transition-all border-0 mb-0 hover:bg-blue-100 hover:text-foreground data-[state=active]:!bg-red-500 data-[state=active]:text-white duration-300 ease-in-out transform hover:scale-105 data-[state=active]:scale-105"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>
    </section>
  );
}


