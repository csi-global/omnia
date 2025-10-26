"use client";

import OmniaCarousel from "@/components/ui/omnia-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const WordCloudNoSSR = dynamic(() => import("react-d3-cloud"), { ssr: false });

type SummaryTab = {
  value: string;
  label: string;
  keywords: string[];
  imageSrc?: string;
  imageAlt?: string;
};

type HeroSummaryTabsProps = {
  tabs: SummaryTab[];
  className?: string;
  reverse?: boolean;
};

export default function HeroSummaryTabs({ tabs, className, reverse }: HeroSummaryTabsProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const first = tabs[0]?.value ?? "tab-1";

  function InlineWordCloud({ keywords }: { keywords: string[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<{ width: number; height: number }>({ width: 360, height: 220 });

    const tokens = useMemo(() => {
      if (!Array.isArray(keywords)) return [] as string[];
      return Array.from(new Set(keywords.filter(Boolean).map((k) => k.trim()))).slice(0, 10);
    }, [keywords]);

    const words = useMemo(() => {
      // Give each keyword an initial uniform weight; slight variation by length for visual interest
      return tokens.map((text) => ({ text, value: Math.max(1, Math.min(10, Math.round(text.length / 2))) }));
    }, [tokens]);

    const [minOccurrences, maxOccurrences] = useMemo(() => {
      if (words.length === 0) return [0, 0];
      const values = words.map((w) => w.value);
      return [Math.min(...values), Math.max(...values)];
    }, [words]);

    const calcFontSize = useCallback((value: number) => {
      if (maxOccurrences === minOccurrences) return 20;
      const MIN_FONT = 14;
      const MAX_FONT = 36;
      const norm = (value - minOccurrences) / (maxOccurrences - minOccurrences);
      return Math.round(MIN_FONT + norm * (MAX_FONT - MIN_FONT));
    }, [maxOccurrences, minOccurrences]);

    const calcFontWeight = useCallback((value: number) => {
      if (maxOccurrences === minOccurrences) return 500;
      const MIN_W = 400;
      const MAX_W = 700;
      const norm = (value - minOccurrences) / (maxOccurrences - minOccurrences);
      return Math.round(MIN_W + norm * (MAX_W - MIN_W));
    }, [maxOccurrences, minOccurrences]);

    const palette = useMemo(() => [
      'var(--theme)',
      'var(--header)',
      'var(--foreground)',
      'var(--primary)',
      'var(--secondary-foreground)',
      'var(--accent-foreground)',
      'var(--chart-1)',
      'var(--chart-2)',
      'var(--chart-3)',
      'var(--chart-4)',
      'var(--chart-5)'
    ], []);

    useEffect(() => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = Math.floor(entry.contentRect.width);
          const h = Math.max(180, Math.min(320, Math.floor(w * 0.6)));
          setSize({ width: w || 360, height: h });
        }
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, []);

    return (
      <div ref={containerRef} className="w-100" style={{ minHeight: 180 }}>
        {words.length > 0 ? (
          <WordCloudNoSSR
            width={size.width}
            height={size.height}
            font="Poppins"
            rotate={0}
            padding={2}
            random={() => 0.5}
            data={words}
            fontSize={(w: { value: number }) => calcFontSize(w.value)}
            fontWeight={(w: { value: number }) => calcFontWeight(w.value)}
            fill={(_: unknown, i: number) => palette[i % palette.length]}
          />
        ) : null}
      </div>
    );
  }

  const slides = tabs.map((t) => (
    <div key={t.value}>
      <div className="tabs-content-inner">
        <div className={`row align-items-center justify-content-around ${reverse ? "flex-row-reverse" : ""}`}>
          <div className="col-lg-4">
            <InlineWordCloud keywords={t.keywords} />
          </div>
          <div className="col-lg-4">
            <div className="relative w-100 h-[220px] sm:h-[240px] md:h-[280px] lg:h-[300px] xl:h-[320px] rounded-3 overflow-hidden">
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
    </div>
  ));

  return (
    <section className={className}>
      <div className="container">
        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <OmniaCarousel items={slides} />
        </div>

        {/* Desktop: Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue={first}>
            {tabs.map((t) => (
              <TabsContent key={t.value} value={t.value} className="pt-2 tabs-content-anim">
                <div className="tabs-content-inner">
                  <div className={`row align-items-center justify-content-around ${reverse ? "flex-row-reverse" : ""}`}>
                    <div className="col-lg-4">
                      <InlineWordCloud keywords={t.keywords} />
                    </div>
                    <div className="col-lg-4">
                      <div className="relative w-100 h-[220px] sm:h-[240px] md:h-[280px] lg:h-[300px] xl:h-[320px] rounded-3 overflow-hidden">
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
              <div className="relative w-full md:w-auto">
                <TabsList
                  ref={listRef}
                  className="w-full md:w-fit justify-start md:justify-center gap-2 rounded-4 bg-[#f4f4f4] p-1 border-0 flex overflow-x-auto md:overflow-visible flex-nowrap scroll-smooth px-8 md:px-1"
                >
                  {tabs.map((t) => (
                    <TabsTrigger
                      key={t.value}
                      value={t.value}
                      className="tabs-trigger-anim relative overflow-hidden rounded-4 px-3 py-2 text-[12px] sm:px-4 sm:py-2.5 sm:text-[13px] md:px-5 md:py-3 md:text-[14px] whitespace-nowrap shrink-0 font-semibold text-foreground/90 border-0 mb-0 transition-all duration-300 ease-out hover:text-foreground data-[state=active]:!bg-red-500 data-[state=active]:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--theme)] after:transition-transform after:duration-300 data-[state=active]:after:scale-x-100"
                    >
                      {t.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}


