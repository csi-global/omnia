"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

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
  reverse?: boolean;
};

export default function HeroSummaryTabs({ tabs, className, reverse }: HeroSummaryTabsProps) {
  const first = tabs[0]?.value ?? "tab-1";
  return (
    <section className={className}>
      <div className="container">
        <Tabs defaultValue={first}>
          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value} className="pt-2 tabs-content-anim">
              <div className="tabs-content-inner">
                <div className={`row align-items-center justify-content-around ${reverse ? "flex-row-reverse" : ""}`}>
                  <div className="col-lg-4">
                    <h4 className="mb-2" style={{ fontWeight: 800, lineHeight: 1.2 }}>{t.summary}</h4>
                  </div>
                  <div className="col-lg-4">
                    <div className="relative w-100 h-[220px] sm:h-[240px] md:h-[280px] lg:h-[300px] xl:h-[320px] rounded-3 border-4 border-[var(--theme)] overflow-hidden">
                      {t.imageSrc ? (
                        <Image
                          src={t.imageSrc}
                          alt={t.imageAlt ?? "Illustration"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain p-4"
                        />
                      ) : null}
                    </div>
                  </div>
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
                  className="tabs-trigger-anim relative overflow-hidden rounded-4 px-5 py-3 text-[14px] font-semibold text-foreground/90 border-0 mb-0 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-foreground data-[state=active]:-translate-y-0.5 data-[state=active]:!bg-red-500 data-[state=active]:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--theme)] after:transition-transform after:duration-300 data-[state=active]:after:scale-x-100"
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


