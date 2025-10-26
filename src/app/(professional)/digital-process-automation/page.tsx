import HeroSummaryTabs from "@/components/hero-summary-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Process Automation | Omnia",
  description: "Design, build, and automate at enterprise scale with Pega, ServiceNow, and Microsoft Power Platform + Dynamics 365. Governance, security, and integrations included.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/digital-process-automation"
  },
  openGraph: {
    title: "Digital Process Automation | Omnia",
    description: "Design, build, and automate at enterprise scale with Pega, ServiceNow, and Microsoft Power Platform + Dynamics 365. Governance, security, and integrations included.",
    type: "website",
    url: "https://omniaservices.co.uk/digital-process-automation",
    images: ["https://omniaservices.co.uk/assets/img/service/3.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Process Automation | Omnia",
    description: "Design, build, and automate at enterprise scale with Pega, ServiceNow, and Microsoft Power Platform + Dynamics 365. Governance, security, and integrations included.",
    images: ["https://omniaservices.co.uk/assets/img/service/3.webp"]
  }
};

export default function DigitalProcessAutomationPage() {

  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Digital Process Automation</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Digital Process Automation</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <div className="relative overflow-hidden pb-24">
                <div className="row align-items-center g-4">
                  <div className="col-lg-7">
                    <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">Professional Services</p>
                    <h1 className="mt-3 !text-3xl sm:!text-4xl md:!text-5xl font-extrabold !leading-tight break-words text-zinc-900">Digital Process Automation</h1>
                    <p className="mt-3 text-zinc-600 text-base sm:!text-lg break-words">Accelerate delivery with Low Code / No Code platforms while maintaining enterprise-grade governance and security. We help you modernize processes, digitize workflows, and connect systems using Pega, ServiceNow, and Microsoft Power Platform + Dynamics 365.</p>

                    <div className="mt-5 d-flex gap-3">
                      <Link href="/contact" className="main-button"><span className="theme-btn">Talk to an Expert</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                      <a href="#offerings" className="main-button secondary"><span className="theme-btn">Explore Offerings</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></a>
                    </div>

                    <ul className="mt-5 d-flex flex-wrap gap-2 text-sm text-zinc-700">
                      <li className="px-3 py-1 rounded-full bg-white border">Low‑code</li>
                      <li className="px-3 py-1 rounded-full bg-white border">Governance</li>
                      <li className="px-3 py-1 rounded-full bg-white border">AI & RPA</li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <div className="overflow-hidden h-[320px] md:h-[380px] relative">
                      <Image
                        src="/assets/img/dpa-tabs/dpa.png"
                        alt="Digital process automation overview"
                        fill
                        sizes="(max-width: 992px) 100vw, 40vw"
                        className="w-full h-auto object-contain rounded-3xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="pega">
                <div className="flex justify-center">
                  <TabsList className="w-full md:w-fit justify-start md:justify-center gap-2 rounded-4 bg-[#f4f4f4] p-1 border-0 flex overflow-x-auto md:overflow-visible flex-nowrap scroll-smooth">
                    <TabsTrigger
                      value="pega"
                      className="tabs-trigger-anim relative overflow-hidden rounded-4 px-3 py-2 text-[12px] sm:px-4 sm:py-2.5 sm:text-[13px] md:px-5 md:py-3 md:text-[14px] whitespace-nowrap shrink-0 font-semibold text-foreground/90 border-0 mb-0 transition-all duration-300 ease-out hover:text-foreground data-[state=active]:!bg-red-500 data-[state=active]:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--theme)] after:transition-transform after:duration-300 data-[state=active]:after:scale-x-100"
                    >
                      Pega
                    </TabsTrigger>
                    <TabsTrigger
                      value="servicenow"
                      className="tabs-trigger-anim relative overflow-hidden rounded-4 px-3 py-2 text-[12px] sm:px-4 sm:py-2.5 sm:text-[13px] md:px-5 md:py-3 md:text-[14px] whitespace-nowrap shrink-0 font-semibold text-foreground/90 border-0 mb-0 transition-all duration-300 ease-out hover:text-foreground data-[state=active]:!bg-red-500 data-[state=active]:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--theme)] after:transition-transform after:duration-300 data-[state=active]:after:scale-x-100"
                    >
                      ServiceNow
                    </TabsTrigger>
                    <TabsTrigger
                      value="microsoft"
                      className="tabs-trigger-anim relative overflow-hidden rounded-4 px-3 py-2 text-[12px] sm:px-4 sm:py-2.5 sm:text-[13px] md:px-5 md:py-3 md:text-[14px] whitespace-nowrap shrink-0 font-semibold text-foreground/90 border-0 mb-0 transition-all duration-300 ease-out hover:text-foreground data-[state=active]:!bg-red-500 data-[state=active]:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--theme)] after:transition-transform after:duration-300 data-[state=active]:after:scale-x-100"
                    >
                      Microsoft
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Pega */}
                <TabsContent value="pega">
                  <h3 className="!normal-case">Pega Intelligent Automation and DPA</h3>
                  <p className="mb-4">Build enterprise-grade applications with case management, low-code design, and AI-powered decisioning.</p>
                  <div className="tab-hero">
                    <div className="copy">
                      <h4>Design once. Orchestrate everywhere.</h4>
                      <p>Scale Digital Process Automation with guardrails, case management, and AI decisioning.</p>
                    </div>
                    <Image
                      src="/assets/img/dpa-tabs/pega-tab.png"
                      alt="Pega platform"
                      width={800}
                      height={400}
                      sizes="100vw"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="lcnc-cards">
                        <div className="lcnc-card !space-y-2"><h4 className="!text-2xl font-bold">Case Management</h4><p>End-to-end lifecycle with SLAs, escalations, and reusable case types.</p></div>
                        <div className="lcnc-card !space-y-2"><h4 className="!text-2xl font-bold">AI Decisioning</h4><p>Next-best-action, business rules, and predictive analytics at scale.</p></div>
                        <div className="lcnc-card !space-y-2"><h4 className="!text-2xl font-bold">RPA & Orchestration</h4><p>Blend human work with bots and integrations for faster throughput.</p></div>
                      </div>
                    </div>
                  </div>

                  <HeroSummaryTabs
                    className="pt-2 mt-4"
                    tabs={[
                      { value: "products-functions", label: "Products & Functions", keywords: ["Pega Platform", "Customer Service", "Sales Automation", "Marketing", "Studios", "Case Types", "Decisioning", "Rules", "Bots", "Channels"], imageSrc: "/product.svg" },
                      { value: "dev-methodology", label: "Development Methodology", keywords: ["Pega Express", "Sprints", "Guardrails", "Reuse", "Templates", "CI/CD", "Testing", "Versioning", "DevOps", "Pipelines"], imageSrc: "/development.svg" },
                      { value: "hosting-integrations", label: "Hosting & Integrations", keywords: ["Pega Cloud", "Self-Managed", "REST", "SOAP", "Events", "Connectors", "Queues", "Kafka", "Webhooks", "SFTP"], imageSrc: "/hosting.svg" },
                    ]}
                    reverse={true}
                  />
                  <HeroSummaryTabs
                    className="pt-2 mt-4"
                    tabs={[
                      { value: "governance", label: "Governance, Security, & Compliance", keywords: ["Guardrails", "Change Control", "RBAC", "SSO", "OAuth", "Audit", "Monitoring", "Policies", "Encryption", "Testing"], imageSrc: "/compliance.svg" },
                      { value: "business-outcomes", label: "Business Outcomes", keywords: ["Time-to-Value", "Throughput", "RPA", "Workflow", "Cost", "Quality", "Compliance", "CX", "Scalability", "Insights"], imageSrc: "/outcomes.svg" },
                      { value: "use-cases-industries", label: "Use Cases & Industries", keywords: ["Customer Service", "Onboarding", "Claims", "Underwriting", "KYC", "AML", "Field Service", "Order-to-Cash", "Collections", "Operations"], imageSrc: "/usecases.svg" },
                    ]}
                  />
                </TabsContent>

                {/* ServiceNow */}
                <TabsContent value="servicenow">
                  <h3>ServiceNow Now Platform App Engine</h3>
                  <p className="mb-4">Rapidly digitize workflows with App Engine, Flow Designer, and IntegrationHub—on a secure, compliant SaaS platform.</p>
                  <div className="tab-hero">
                    <div className="copy"><h4>From tickets to outcomes.</h4><p>Build modern experiences on the Now Platform with secure, governed low-code.</p></div>
                    <Image
                      src="/assets/img/dpa-tabs/servicenow-tab.png"
                      alt="ServiceNow App Engine"
                      width={800}
                      height={400}
                      sizes="100vw"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="lcnc-cards">
                        <div className="lcnc-card"><div className="body"><h4>Workflow Apps</h4><p>Digitize tasks, records, and SLAs with Flow Designer and UI Builder.</p></div></div>
                        <div className="lcnc-card"><div className="body"><h4>IntegrationHub</h4><p>Connect to enterprise systems using spokes, REST/SOAP, and MID Server.</p></div></div>
                        <div className="lcnc-card"><div className="body"><h4>Automation Engine</h4><p>RPA and orchestration to remove repetitive work across teams.</p></div></div>
                      </div>
                    </div>
                  </div>

                  <HeroSummaryTabs
                    className="pt-2"
                    tabs={[
                      { value: "products-functions", label: "Products & Functions", keywords: ["App Engine", "ITSM", "ITOM", "ITAM", "HRSD", "CSM", "GRC", "IntegrationHub", "RPA", "Automation"], imageSrc: "/product.svg" },
                      { value: "dev-methodology", label: "Development Methodology", keywords: ["Scoped Apps", "CI/CD", "Promotion", "Pipelines", "Testing", "Governance", "Guardrails", "Update Sets", "Versions", "Dev/Test/Prod"], imageSrc: "/development.svg" },
                      { value: "hosting-integrations", label: "Hosting & Integrations", keywords: ["SaaS Regions", "Spokes", "REST", "SOAP", "MID Server", "On-Prem", "Events", "Webhooks", "OAuth", "Policies"], imageSrc: "/hosting.svg" },
                    ]}
                  />
                  <HeroSummaryTabs
                    className="pt-2"
                    tabs={[
                      { value: "governance", label: "Governance, Security, & Compliance", keywords: ["Governance", "Update Sets", "Pipelines", "SSO", "Encryption", "Policies", "Compliance", "Audits", "Monitoring", "Controls"], imageSrc: "/compliance.svg" },
                      { value: "business-outcomes", label: "Business Outcomes", keywords: ["Digitization", "Scale", "Cost", "Speed", "Experience", "Automation", "Throughput", "Quality", "Insights", "ROI"], imageSrc: "/outcomes.svg" },
                      { value: "use-cases-industries", label: "Use Cases & Industries", keywords: ["ITSM", "HR Services", "Employee", "Customer", "Field Service", "Operations", "GRC", "Risk", "Audit", "Service Desk"], imageSrc: "/usecases.svg" },
                    ]}
                  />
                </TabsContent>

                {/* Microsoft */}
                <TabsContent value="microsoft">
                  <h3>Microsoft Power Platform & Dynamics 365</h3>
                  <p className="mb-4">Empower fusion teams with low-code tools on Azure. Build apps, automate processes, analyze data, and digitize customer/employee experiences.</p>
                  <div className="tab-hero">
                    <div className="copy"><h4>Ship faster with Power + Azure.</h4><p>Canvas and model-driven apps on Dataverse with 1,000+ connectors and Copilot.</p></div>
                    <Image
                      src="/assets/img/dpa-tabs/microsoft-tab.png"
                      alt="Microsoft Power Platform"
                      width={800}
                      height={400}
                      sizes="100vw"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="lcnc-cards">
                        <div className="lcnc-card"><div className="body"><h4>Power Apps</h4><p>Canvas and model-driven apps on Dataverse for enterprise UX.</p></div></div>
                        <div className="lcnc-card"><div className="body"><h4>Power Automate</h4><p>Automate processes with flows, approvals, RPA, and connectors.</p></div></div>
                        <div className="lcnc-card"><div className="body"><h4>Dynamics 365</h4><p>Sales, service, field, finance, and supply chain on Dataverse.</p></div></div>
                      </div>
                    </div>
                  </div>

                  <HeroSummaryTabs
                    className="pt-2 mt-4"
                    tabs={[
                      { value: "products-functions", label: "Products & Functions", keywords: ["Power Apps", "Power Automate", "Power BI", "Power Pages", "Copilot", "Dynamics 365", "Dataverse", "Azure", "API Mgmt", "Logic Apps"], imageSrc: "/product.svg" },
                      { value: "dev-methodology", label: "Development Methodology", keywords: ["Solutions", "Pipelines", "Environments", "ALM", "Governance", "DLP", "Monitoring", "COE", "Testing", "DevOps"], imageSrc: "/development.svg" },
                      { value: "hosting-integrations", label: "Hosting & Integrations", keywords: ["Azure", "M365", "GCC", "Connectors", "Custom", "REST", "OData", "Webhooks", "APIM", "Service Bus"], imageSrc: "/hosting.svg" },
                    ]}
                  />
                  <HeroSummaryTabs
                    className="pt-2 mt-4"
                    tabs={[
                      { value: "governance", label: "Governance, Security, & Compliance", keywords: ["DLP", "Environments", "Identities", "Entra ID", "SSO", "RBAC", "Monitoring", "Audit", "Pipelines", "Policies"], imageSrc: "/compliance.svg" },
                      { value: "business-outcomes", label: "Business Outcomes", keywords: ["Fusion", "Delivery", "Dataverse", "Connectors", "Insights", "AI", "Automation", "Time", "Cost", "Scale"], imageSrc: "/outcomes.svg" },
                      { value: "use-cases-industries", label: "Use Cases & Industries", keywords: ["Frontline", "Approvals", "Inspections", "Sales", "Service", "Marketing", "Finance", "Supply Chain", "Projects", "Operations"], imageSrc: "/usecases.svg" },
                    ]}
                  />
                </TabsContent>
              </Tabs>

              <div className="row g-4 pt-4">
                <div className="col-12">
                  <div className="lcnc-banner">
                    <h5>Related Platforms & Ecosystems</h5>
                    <p className="ecosystems">
                      We also support Appian and Camunda, hosting them on ecosystems like AWS, Azure, and integrate using kafka, pub/sub and more to deliver end-to-end outcomes.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


