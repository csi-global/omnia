'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    icon: 'fas fa-clipboard-list',
    phase: '01',
    short: 'Planning',
    title: 'Requirements & Planning',
    text: 'AI agents parse stakeholder documents, extract user stories, identify gaps, and generate acceptance criteria—turning weeks of workshops into hours.',
    stat: '~70% faster',
    statLabel: 'requirements capture',
  },
  {
    icon: 'fas fa-drafting-compass',
    phase: '02',
    short: 'Architecture',
    title: 'Architecture & Design',
    text: 'LLMs evaluate architecture options, generate ADRs, flag anti-patterns, and suggest cloud-native design patterns aligned to your constraints.',
    stat: '3× more',
    statLabel: 'options evaluated',
  },
  {
    icon: 'fas fa-code',
    phase: '03',
    short: 'Development',
    title: 'Development & Code Generation',
    text: 'AI pair programmers (GitHub Copilot, Cursor, Claude) generate boilerplate, suggest refactors, and explain legacy code—boosting developer throughput by up to 40%.',
    stat: 'Up to 40%',
    statLabel: 'throughput gain',
  },
  {
    icon: 'fas fa-vial',
    phase: '04',
    short: 'Testing',
    title: 'Testing & QA Automation',
    text: 'Generative AI creates unit, integration, and regression test suites from source code. AI-powered test oracles detect flaky tests and coverage gaps automatically.',
    stat: '85%+',
    statLabel: 'coverage automated',
  },
  {
    icon: 'fas fa-rocket',
    phase: '05',
    short: 'CI/CD',
    title: 'CI/CD & Deployment',
    text: 'Agentic pipelines analyse test results, select deployment strategies, and execute canary or blue-green releases—with AI-driven rollback based on live telemetry.',
    stat: 'Zero-touch',
    statLabel: 'rollback decisions',
  },
  {
    icon: 'fas fa-chart-line',
    phase: '06',
    short: 'Monitoring',
    title: 'Monitoring & Observability',
    text: 'AI correlates logs, metrics, and traces to surface root causes before users are impacted. Natural language queries replace complex dashboards for on-call engineers.',
    stat: 'Proactive',
    statLabel: 'anomaly detection',
  },
  {
    icon: 'fas fa-bug',
    phase: '07',
    short: 'Incidents',
    title: 'Incident Response',
    text: 'Autonomous agents triage alerts, run runbook playbooks, and escalate with context-rich summaries—cutting mean time to resolution by 60% or more.',
    stat: '60%+',
    statLabel: 'MTTR reduction',
  },
  {
    icon: 'fas fa-sync-alt',
    phase: '08',
    short: 'Feedback',
    title: 'Feedback & Continuous Improvement',
    text: 'AI analyses user behaviour, support tickets, and telemetry to generate product insights and prioritise the backlog—closing the loop from production back to planning.',
    stat: 'Closed-loop',
    statLabel: 'learning cycle',
  },
];

export default function SDLCPipeline() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = el.offsetHeight - vh;
      const scrolled = -rect.top;

      // Show fixed panel only while the wrapper is the active scroll zone
      const isActive = scrolled >= 0 && scrolled <= scrollable;
      setVisible(isActive);

      if (!isActive) return;

      const pct = scrolled / scrollable; // 0 → 1
      const raw = pct * STEPS.length;
      const step = Math.min(Math.floor(raw), STEPS.length - 1);
      setActiveStep(step);
      setTotalProgress(pct * 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const step = STEPS[activeStep] ?? STEPS[0]!;

  return (
    <>
      {/* Scroll-space wrapper — gives the section its height */}
      <div ref={wrapperRef} style={{ height: `${STEPS.length * 100}vh` }} aria-hidden="true" />

      {/* Fixed panel — only visible while scrolling through the wrapper */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-opacity duration-300 ${
          visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top progress bar */}
        <div className="h-[3px] bg-zinc-100 flex-shrink-0">
          <div
            className="h-full bg-[var(--theme)] transition-[width] duration-300"
            style={{ width: `${totalProgress}%` }}
          />
        </div>

        {/* Content — two column: number left, text right */}
        <div className="flex-1 flex items-center overflow-hidden">
          <div className="w-full max-w-5xl mx-auto px-8 md:px-16 flex items-center gap-10 md:gap-16">

            {/* Left: decorative phase number */}
            <div
              className="hidden md:flex flex-shrink-0 items-center justify-center w-48 lg:w-64 pointer-events-none select-none"
              aria-hidden="true"
            >
              <span
                className="font-black text-[var(--theme)] leading-none"
                style={{ fontSize: 'clamp(120px, 14vw, 220px)', opacity: 0.1 }}
              >
                {step.phase}
              </span>
            </div>

            {/* Right: left-aligned content */}
            <div
              key={activeStep}
              className="flex-1 flex flex-col items-start text-left"
              style={{ animation: 'sdlcFadeUp 0.35s cubic-bezier(0.22,1,0.36,1) both' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="size-14 rounded-xl bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center text-xl flex-shrink-0">
                  <i className={step.icon} />
                </div>
                <span className="text-xs font-mono font-bold text-[var(--theme)] tracking-[0.2em] uppercase">
                  Stage {step.phase} / {STEPS.length}
                </span>
              </div>

              <h3 className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-zinc-900 !leading-tight !mb-4 max-w-lg">
                {step.title}
              </h3>

              <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-lg">
                {step.text}
              </p>

              <div className="mt-7 inline-flex items-center gap-3 bg-[var(--theme)]/5 rounded-xl px-5 py-3">
                <span className="font-extrabold text-[var(--theme)] text-base">{step.stat}</span>
                <span className="text-zinc-400 text-sm">{step.statLabel}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom dots + hint */}
        <div className="flex-shrink-0 pb-8 pt-3 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeStep
                    ? 'w-6 h-2 bg-[var(--theme)]'
                    : i < activeStep
                    ? 'w-2 h-2 bg-[var(--theme)]/30'
                    : 'w-2 h-2 bg-zinc-200'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-zinc-400 flex items-center gap-1.5">
            {activeStep < STEPS.length - 1 ? (
              <>
                <span>scroll to continue</span>
              </>
            ) : (
              <>
                <span>·</span>
                <span className="text-[var(--theme)] font-semibold">all stages covered ✓</span>
              </>
            )}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes sdlcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
