"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Where should we start with AI in our organisation?",
    answer:
      "We recommend a structured use-case mapping workshop to identify the 2–3 highest-value opportunities in your value chain. We then run a focused Proof of Value to validate impact before any large-scale investment.",
  },
  {
    question: "What is an MCP Server and why does it matter?",
    answer:
      "Model Context Protocol (MCP) is an open standard that defines how AI models connect to external tools and data sources in a secure, consistent way. An MCP server acts as a governed bridge between your LLM and your internal systems—databases, APIs, file stores—without exposing raw credentials or data structures to the model directly.",
  },
  {
    question: "How do you ensure AI outputs are accurate and safe?",
    answer:
      "We implement evaluation pipelines that run automated and human assessments against ground-truth datasets. Every production system includes input/output filtering, hallucination detection, and confidence scoring. For regulated domains we include mandatory human-in-the-loop review gates.",
  },
  {
    question: "Can you integrate AI with our existing enterprise systems?",
    answer:
      "Yes. Omnia specialises in connecting AI to enterprise platforms including Dynamics 365, SAP, ServiceNow, Pega, and bespoke internal systems via MCP servers, REST adapters, and event-driven integration patterns.",
  },
  {
    question: "How do you handle data privacy and compliance?",
    answer:
      "We design AI architectures with data residency, PII masking, and access control requirements from the start. For UK and EU clients we can deploy entirely within Azure or AWS regions that satisfy GDPR and sector-specific regulations, with no data leaving your environment.",
  },
] as const;

export default function AIEngineeringFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-[var(--theme)]/40 bg-[var(--theme)]/[0.04] shadow-sm"
                : "border-zinc-200 bg-white hover:border-[var(--theme)]/40"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-zinc-900 sm:text-base">{item.question}</span>
              <span
                className={`inline-flex size-7 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-[var(--theme)]/30 bg-[var(--theme)] text-white"
                    : "rotate-0 border-zinc-200 bg-white text-zinc-700"
                }`}
              >
                <Plus className="size-4" />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
