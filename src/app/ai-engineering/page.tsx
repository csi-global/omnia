import type { Metadata } from 'next';
import Link from "next/link";
import Script from "next/script";
import { Bot, BrainCircuit, Code2, Cpu, DatabaseZap, ServerCog } from "lucide-react";
import OmniaButton from "@/components/ui/omnia-button";
import AIEngineeringFaq from "@/components/ai-engineering-faq";

export const metadata: Metadata = {
  title: "AI Engineering | Omnia Services",
  description: "Omnia's AI Engineering practice helps enterprises harness Generative AI, Agentic AI, MCP Servers, and LLM-driven automation to transform the software delivery lifecycle and stay ahead in a rapidly shifting IT landscape.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.omniaservices.co.uk/ai-engineering"
  },
  openGraph: {
    title: "AI Engineering | Omnia Services",
    description: "Omnia's AI Engineering practice helps enterprises harness Generative AI, Agentic AI, MCP Servers, and LLM-driven automation to transform the software delivery lifecycle.",
    type: "website",
    url: "https://www.omniaservices.co.uk/ai-engineering",
    images: ["https://www.omniaservices.co.uk/assets/img/hero/hero-slider-1.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering | Omnia Services",
    description: "Omnia's AI Engineering practice helps enterprises harness Generative AI, Agentic AI, MCP Servers, and LLM-driven automation to transform the software delivery lifecycle.",
    images: ["https://www.omniaservices.co.uk/assets/img/hero/hero-slider-1.webp"]
  }
};

export default function AIEngineerPage() {
  const coreTechnologyCards = [
    {
      title: "Generative AI",
      description:
        "Large Language Models (LLMs) like GPT-4, Claude, Gemini, and open-source alternatives such as Llama and Mistral can generate code, documentation, test cases, and user-facing content at scale.",
      tags: ["GPT-4o", "Claude 4", "Gemini", "Llama 3", "RAG", "Fine-tuning", "Embeddings"],
      Icon: BrainCircuit,
      dark: true,
      backgroundImage: "/assets/img/ai-engineer/card-bg.webp",
      gridClass: "xl:col-span-7",
    },
    {
      title: "MCP Servers",
      description:
        "Model Context Protocol (MCP) lets AI models securely connect to tools, databases, APIs, and enterprise systems. We build governed MCP servers for context-aware automation.",
      tags: ["Anthropic MCP", "Tool Use", "Context Windows", "Secure Connectors"],
      Icon: ServerCog,
      dark: false,
      gridClass: "xl:col-span-5",
    },
    {
      title: "Agentic AI",
      description:
        "Agentic systems combine planning, memory, and tool use to complete multi-step workflows autonomously with human-in-the-loop control in regulated environments.",
      tags: ["LangGraph", "AutoGen", "CrewAI", "Multi-agent", "Tool Use"],
      Icon: Bot,
      dark: false,
      gridClass: "xl:col-span-5",
    },
    {
      title: "AI-Driven SDLC",
      description:
        "We instrument every delivery stage with AI, from requirements and architecture to testing, deployment, and feedback loops, reducing cycle time and operational toil.",
      tags: ["Requirements", "Design", "Development", "Testing", "Deployment", "Monitoring"],
      Icon: Code2,
      dark: false,
      gridClass: "xl:col-span-7",
    },
    {
      title: "LLMOps & MLOps",
      description:
        "Production AI requires continuous operations. We run prompt versioning, evaluation pipelines, drift detection, observability, and model lifecycle management.",
      tags: ["Prompt Management", "Evaluation", "Observability", "Cost Control"],
      Icon: Cpu,
      dark: false,
      gridClass: "xl:col-span-6",
    },
    {
      title: "RAG & Knowledge Systems",
      description:
        "We design retrieval architecture using chunking, embeddings, and vector search so model outputs stay grounded in trusted enterprise knowledge.",
      tags: ["Vector Search", "Chunking", "Embeddings", "Grounded Answers"],
      Icon: DatabaseZap,
      dark: false,
      gridClass: "xl:col-span-6",
    },
  ] as const;

  return (
    <div>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1 className="!text-5xl lg:!text-7xl font-extrabold !leading-tight break-words text-zinc-900">AI Engineering</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>AI Engineering</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_0%,rgba(225,29,46,0.07),transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(15,23,42,0.06),transparent_60%)]"></div>
        <div className="container py-20 md:py-28">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">AI Engineering</p>
              <h1 className="mt-3 !text-3xl sm:!text-4xl md:!text-5xl font-extrabold !leading-tight break-words text-zinc-900">
                Engineering Intelligence into Every Layer of Your Business
              </h1>
              <p className="mt-3 text-zinc-600 text-base sm:!text-lg break-words">
                AI is no longer a future bet—it is the present competitive edge. Omnia's AI Engineering practice embeds Generative AI, Agentic systems, MCP Servers, and LLM-driven automation directly into your software delivery lifecycle, operations, and products—accelerating outcomes at every stage.
              </p>

              <div className="mt-5 d-flex gap-3">
                <Link href="/contact" aria-label="Talk to an AI Expert">
                  <OmniaButton text="Talk to an AI Expert" />
                </Link>
                <Link href="#technologies" aria-label="Explore Technologies">
                  <OmniaButton text="Explore Technologies" />
                </Link>
              </div>

              <ul className="mt-5 d-flex flex-wrap gap-2 text-sm text-zinc-700">
                <li className="px-3 py-1 rounded-full bg-white border">Generative AI</li>
                <li className="px-3 py-1 rounded-full bg-white border">Agentic AI</li>
                <li className="px-3 py-1 rounded-full bg-white border">MCP Servers</li>
                <li className="px-3 py-1 rounded-full bg-white border">LLM Ops</li>
                <li className="px-3 py-1 rounded-full bg-white border">AI-Driven SDLC</li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "fas fa-brain", label: "AI Models Deployed", value: "50+" },
                  { icon: "fas fa-robot", label: "Agentic Workflows Built", value: "30+" },
                  { icon: "fas fa-code", label: "SDLC Stages Automated", value: "8/8" },
                  { icon: "fas fa-bolt", label: "Delivery Acceleration", value: "3x" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm text-center">
                    <div className="text-[var(--theme)] text-2xl mb-2"><i className={stat.icon}></i></div>
                    <div className="text-2xl font-extrabold text-zinc-900">{stat.value}</div>
                    <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Shift — how AI is changing the landscape */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center">
                <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-white">The AI Shift</span>
                <h2 className="mt-4 !text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">How AI is Reshaping IT Globally</h2>
                <p className="text-zinc-600 max-w-3xl mx-auto">
                  Artificial intelligence has moved from research labs to the boardroom. Across every industry, AI is compressing timelines, eliminating repetitive work, and unlocking entirely new categories of software product—fundamentally disrupting the roles of developers, architects, and IT leaders.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: "fas fa-tachometer-alt",
                title: "Speed of Delivery",
                text: "AI pair programmers, automated code review, and generative test suites are shrinking sprint cycles from weeks to days. Teams that once shipped quarterly are now shipping weekly—without sacrificing quality.",
              },
              {
                icon: "fas fa-globe",
                title: "Global IT Disruption",
                text: "Entire categories of IT outsourcing and nearshoring are being rethought as AI agents handle routine analysis, documentation, incident triage, and first-level support autonomously—rebalancing how talent is deployed worldwide.",
              },
              {
                icon: "fas fa-layer-group",
                title: "Democratisation of Engineering",
                text: "Citizen developers and domain experts can now build production-grade tools with natural language. The gap between business intent and working software has never been smaller.",
              },
              {
                icon: "fas fa-lock",
                title: "New Security Imperatives",
                text: "AI introduces new attack surfaces—prompt injection, data leakage through model context, and supply chain risk from third-party models. Governance and red-teaming are now first-class engineering concerns.",
              },
              {
                icon: "fas fa-coins",
                title: "Cost Curve Inversion",
                text: "Inference costs continue to drop while capabilities rise. Organisations that invest in AI-native architectures today will hold structural cost advantages that compound over time.",
              },
              {
                icon: "fas fa-users-cog",
                title: "Workforce Transformation",
                text: "Engineering roles are evolving—not disappearing. Prompt engineering, AI evaluation, and agent orchestration are becoming core competencies alongside traditional software skills.",
              },
            ].map((card, i) => (
              <div key={i} className="bento-card rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                <div className="size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center mb-4">
                  <i className={card.icon}></i>
                </div>
                <h4 className="font-semibold text-zinc-900 mb-2">{card.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies Bento Grid */}
      <section id="technologies" className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center">
                <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-white">Core Technologies</span>
                <h2 className="mt-4 !text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">The Technologies Driving the Transformation</h2>
                <p className="text-zinc-600 max-w-3xl mx-auto">
                  From foundation models to autonomous agents, these are the technologies Omnia engineers to create tangible business value.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 mt-8">
            {coreTechnologyCards.map((card, index) => {
              const Icon = card.Icon;
              return (
                <div
                  key={card.title}
                  className={`bento-card relative overflow-hidden rounded-3xl border p-6 md:p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl h-full ${card.gridClass} ${
                    card.dark ? "border-zinc-800 text-white" : "border-zinc-200 bg-white text-zinc-900"
                  }`}
                  style={
                    card.dark
                      ? {
                          backgroundImage: `linear-gradient(145deg, rgba(9,9,11,0.78), rgba(9,9,11,0.62)), url('${card.backgroundImage}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  {!card.dark ? (
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--theme)]/[0.04] via-transparent to-[var(--theme-red)]/[0.07]" />
                  ) : null}

                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--theme-red)] text-white">
                        <Icon className="size-5" />
                      </div>
                      <span className={`text-xs font-bold tracking-[0.18em] ${card.dark ? "text-zinc-200/80" : "text-[var(--theme)]/70"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 ${card.dark ? "text-white" : "text-zinc-900"}`}>{card.title}</h3>
                    <p className={`text-sm leading-relaxed ${card.dark ? "text-zinc-200" : "text-zinc-600"}`}>{card.description}</p>
                    <div className={`mt-4 pt-3 flex flex-wrap gap-2 ${card.dark ? "border-t border-white/15" : "border-t border-[var(--theme)]/15"}`}>
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-2.5 py-1 text-xs ${
                            card.dark
                              ? "bg-white/10 text-zinc-100"
                              : "bg-[var(--theme)]/10 text-[var(--theme-red)] border border-[var(--theme)]/20"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI in the SDLC */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center">
                <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-white">AI in the SDLC</span>
                <h2 className="mt-4 !text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">AI at Every Stage of Software Delivery</h2>
                <p className="text-zinc-600 max-w-3xl mx-auto">
                  Omnia maps AI capabilities to every phase of your delivery pipeline—eliminating bottlenecks, reducing defects, and compressing time-to-market.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-8">
            {[
              {
                icon: "fas fa-clipboard-list",
                phase: "01",
                title: "Requirements & Planning",
                text: "AI agents parse stakeholder documents, extract user stories, identify gaps, and generate acceptance criteria—turning weeks of workshops into hours.",
              },
              {
                icon: "fas fa-drafting-compass",
                phase: "02",
                title: "Architecture & Design",
                text: "LLMs evaluate architecture options, generate ADRs, flag anti-patterns, and suggest cloud-native design patterns aligned to your constraints.",
              },
              {
                icon: "fas fa-code",
                phase: "03",
                title: "Development & Code Generation",
                text: "AI pair programmers (GitHub Copilot, Cursor, Claude) generate boilerplate, suggest refactors, and explain legacy code—boosting developer throughput by up to 40%.",
              },
              {
                icon: "fas fa-vial",
                phase: "04",
                title: "Testing & QA Automation",
                text: "Generative AI creates unit, integration, and regression test suites from source code and specifications. AI-powered test oracles detect flaky tests and coverage gaps automatically.",
              },
              {
                icon: "fas fa-rocket",
                phase: "05",
                title: "CI/CD & Deployment",
                text: "Agentic pipelines analyse test results, select deployment strategies, and execute canary or blue-green releases—with AI-driven rollback decisions based on live telemetry.",
              },
              {
                icon: "fas fa-chart-line",
                phase: "06",
                title: "Monitoring & Observability",
                text: "AI correlates logs, metrics, and traces to surface root causes before users are impacted. Natural language queries replace complex dashboards for on-call engineers.",
              },
              {
                icon: "fas fa-bug",
                phase: "07",
                title: "Incident Response",
                text: "Autonomous agents triage alerts, run runbook playbooks, and escalate with context-rich summaries—cutting mean time to resolution by 60% or more.",
              },
              {
                icon: "fas fa-sync-alt",
                phase: "08",
                title: "Feedback & Continuous Improvement",
                text: "AI analyses user behaviour, support tickets, and telemetry to generate product insights and prioritise the backlog—closing the loop from production back to planning.",
              },
            ].map((step, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="rise-card bento-card rounded-2xl border border-zinc-200 bg-white p-6 h-100 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-4xl font-extrabold text-zinc-100 select-none">{step.phase}</div>
                  <div className="size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center mb-3">
                    <i className={step.icon}></i>
                  </div>
                  <h4 className="font-semibold text-zinc-900 mb-2">{step.title}</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Omnia */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Why Omnia for AI Engineering</h2>
                <p className="text-zinc-600">We bridge the gap between AI research and enterprise production—responsibly, measurably, and at scale.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              { icon: "fas fa-flask", title: "Proof-of-Value First", text: "We start with a focused PoV that demonstrates measurable ROI before committing to a full build." },
              { icon: "fas fa-shield-alt", title: "Responsible AI by Design", text: "Every engagement includes bias assessment, explainability requirements, and data governance guardrails from day one." },
              { icon: "fas fa-puzzle-piece", title: "Model-Agnostic", text: "We are not tied to a single vendor. We select the right model—proprietary or open-source—for your specific use case and budget." },
              { icon: "fas fa-industry", title: "Enterprise Integration", text: "We connect AI to your existing systems—ERP, CRM, data lakes, and bespoke platforms—via secure APIs and MCP connectors." },
              { icon: "fas fa-graduation-cap", title: "Team Enablement", text: "We embed AI engineering skills into your team through pair programming, workshops, and structured knowledge transfer." },
              { icon: "fas fa-headset", title: "Ongoing LLMOps Support", text: "We provide managed support for deployed AI systems—monitoring quality, controlling costs, and managing model upgrades." },
            ].map((card, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="bento-card text-center rounded-2xl border border-zinc-200 bg-white p-6 h-100">
                  <div className="icon text-2xl text-[var(--theme)] mb-2"><i className={card.icon}></i></div>
                  <h4 className="mt-2 mb-2">{card.title}</h4>
                  <p className="text-zinc-600 text-sm">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Our AI Engineering Process</h2>
                <p>From first conversation to production system—a proven path that minimises risk and maximises learning.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              { icon: "fas fa-search", title: "Discovery & Use-Case Mapping", text: "Identify high-value AI opportunities across your value chain and rank them by impact and feasibility." },
              { icon: "fas fa-flask", title: "Proof of Value", text: "Build a focused prototype in 2–4 weeks to validate the hypothesis and de-risk investment." },
              { icon: "fas fa-drafting-compass", title: "Architecture & Model Selection", text: "Design the production architecture—model choice, data pipelines, MCP connectors, and safety layers." },
              { icon: "fas fa-code", title: "Build & Integrate", text: "Engineer the solution against your existing systems with CI/CD, evaluation harnesses, and monitoring from the start." },
              { icon: "fas fa-vial", title: "Evaluate & Harden", text: "Run adversarial testing, red-teaming, and performance benchmarking before go-live." },
              { icon: "fas fa-chart-line", title: "Operate & Optimise", text: "Continuously monitor model quality, cost, and usage—and evolve the system as capabilities and requirements grow." },
            ].map((step, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="rise-card bento-card text-center rounded-2xl border border-zinc-200 bg-white p-6 h-100">
                  <div className="icon text-[var(--theme)] text-2xl"><i className={step.icon}></i></div>
                  <h4 className="mt-2">{step.title}</h4>
                  <p className="text-zinc-600 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">AI Tools & Platforms We Work With</h2>
                <p>A broad, model-agnostic toolkit spanning foundation models, orchestration frameworks, vector stores, and observability.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              { icon: "fas fa-brain", title: "Foundation Models", text: "OpenAI GPT-4o, Anthropic Claude, Google Gemini, Meta Llama 3, Mistral, and AWS Bedrock hosted models." },
              { icon: "fas fa-network-wired", title: "Agent Frameworks", text: "LangChain, LangGraph, AutoGen, CrewAI, Semantic Kernel, and custom orchestration layers." },
              { icon: "fas fa-server", title: "MCP & Integration", text: "Anthropic MCP, custom MCP server development, REST/GraphQL connectors, and enterprise middleware bridges." },
              { icon: "fas fa-database", title: "Vector Databases", text: "Pinecone, Weaviate, pgvector, Chroma, and Qdrant for semantic search and RAG pipelines." },
              { icon: "fas fa-cloud", title: "Cloud AI Services", text: "Azure OpenAI Service, AWS SageMaker, Google Vertex AI, and on-premises deployment options for data-sensitive workloads." },
              { icon: "fas fa-chart-bar", title: "Evaluation & Observability", text: "LangSmith, Arize, Weights & Biases, Helicone, and custom evaluation harnesses for quality and cost tracking." },
            ].map((p, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6 h-100">
                  <div className="icon text-2xl text-[var(--theme)] mb-2"><i className={p.icon}></i></div>
                  <h4 className="mt-2 mb-1">{p.title}</h4>
                  <p className="text-zinc-600 text-sm">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-light fix mb-4">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-5">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">FAQ</span>
              <h2 className="mt-3 !text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Frequently Asked Questions</h2>
              <p className="text-zinc-600">Answers to the most common questions we hear from IT leaders and engineering teams exploring AI.</p>
            </div>
            <div className="col-lg-7">
              <AIEngineeringFaq />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="lcnc-banner">
            <h5>Ready to Engineer AI into Your Business?</h5>
            <p className="ecosystems">Start with a no-obligation use-case workshop and a clear roadmap tailored to your technology landscape.</p>
            <div className="mt-3">
              <Link href="/contact" aria-label="Book a Workshop">
                <OmniaButton text="Book a Workshop" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD structured data */}
      <Script id="ld-ai-service" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Engineering",
          "provider": { "@type": "Organization", "name": "Omnia Services" },
          "areaServed": "Global",
          "serviceType": "AI Engineering",
          "description": "Enterprise AI Engineering services covering Generative AI, Agentic AI, MCP Servers, LLMOps, and AI-driven SDLC transformation.",
        })
      }} />
      <Script id="ld-ai-faq" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Where should we start with AI in our organisation?", "acceptedAnswer": { "@type": "Answer", "text": "A structured use-case mapping workshop to identify the 2–3 highest-value opportunities, followed by a focused Proof of Value." } },
            { "@type": "Question", "name": "What is an MCP Server and why does it matter?", "acceptedAnswer": { "@type": "Answer", "text": "Model Context Protocol is an open standard that defines how AI models connect to external tools and data sources securely and consistently." } },
            { "@type": "Question", "name": "How do you ensure AI outputs are accurate and safe?", "acceptedAnswer": { "@type": "Answer", "text": "Evaluation pipelines with automated and human assessments, input/output filtering, hallucination detection, and human-in-the-loop gates for regulated domains." } },
            { "@type": "Question", "name": "Can you integrate AI with our existing enterprise systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Omnia connects AI to Dynamics 365, SAP, ServiceNow, Pega, and bespoke systems via MCP servers, REST adapters, and event-driven integration patterns." } },
            { "@type": "Question", "name": "How do you handle data privacy and compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Data residency, PII masking, and access control from the start. Fully in-region deployments available for GDPR and sector-specific requirements." } }
          ]
        })
      }} />
    </div>
  );
}
