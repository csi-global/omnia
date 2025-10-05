"use client";

import HeroSummaryTabs from "@/components/HeroSummaryTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              <li><a href="/">Home</a></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Digital Process Automation</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Design, build, and automate at enterprise scale</h2>
              <p>
                Accelerate delivery with Low Code / No Code platforms while maintaining enterprise-grade
                governance and security. We help you modernize processes, digitize workflows, and connect
                systems across Pega, ServiceNow, and Microsoft Power Platform + Dynamics 365.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <img src="/assets/img/service/3.webp" alt="Digital process automation illustration" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Digital Process Automation (DPA) and workflow orchestration</li>
                      <li><i className="fa-solid fa-angles-right"></i> Citizen development with guardrails, governance, and Center of Excellence</li>
                      <li><i className="fa-solid fa-angles-right"></i> AI decisioning, RPA, process mining, and end-to-end integration</li>
                      <li><i className="fa-solid fa-angles-right"></i> Cloud-native, secure, scalable, and compliant deployments</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="pega">
                <TabsList>
                  <TabsTrigger value="pega">Pega</TabsTrigger>
                  <TabsTrigger value="servicenow">ServiceNow</TabsTrigger>
                  <TabsTrigger value="microsoft">Microsoft (Power Platform & Dynamics 365)</TabsTrigger>
                </TabsList>

                {/* Pega */}
                <TabsContent value="pega">
                  <h3>Pega – Intelligent Automation and DPA</h3>
                  <p className="mb-4">Build enterprise-grade applications with case management, low-code design, and AI-powered decisioning.</p>
                  <div className="tab-hero">
                    <div className="copy">
                      <h4>Design once. Orchestrate everywhere.</h4>
                      <p>Scale Digital Process Automation with guardrails, case management, and AI decisioning.</p>
                    </div>
                    <img src="/assets/img/service/1.webp" alt="Pega platform" />
                  </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="lcnc-cards">
                        <div className="lcnc-card">
                          <div className="media"><img src="/assets/img/service/4.webp" alt="Pega case management" /></div>
                          <div className="body"><h4>Case Management</h4><p>End-to-end lifecycle with SLAs, escalations, and reusable case types.</p></div>
                        </div>
                        <div className="lcnc-card">
                          <div className="media"><img src="/assets/img/service/5.webp" alt="Pega AI decisioning" /></div>
                          <div className="body"><h4>AI Decisioning</h4><p>Next-best-action, business rules, and predictive analytics at scale.</p></div>
                        </div>
                        <div className="lcnc-card">
                          <div className="media"><img src="/assets/img/service/3.webp" alt="Pega RPA and orchestration" /></div>
                          <div className="body"><h4>RPA & Orchestration</h4><p>Blend human work with bots and integrations for faster throughput.</p></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <HeroSummaryTabs
                    className="pt-2"
                    tabs={[
                      { value: "products-functions", label: "Products & Functions", summary: "Pega Platform, Customer Service, Sales Automation, Marketing, Studios." },
                      { value: "dev-methodology", label: "Development Methodology", summary: "Pega Express delivery with iterative sprints and reusable templates." },
                      { value: "hosting-integrations", label: "Hosting & Integrations", summary: "Pega Cloud or self-managed; REST/SOAP, events, and enterprise connectors." },
                    ]}
                  />
                  <HeroSummaryTabs
                    className="pt-2"
                    tabs={[
                      { value: "governance", label: "Governance, Security, & Compliance", summary: "Guardrails, centralized rules, change control; SSO/OAuth & RBAC; audit trails, monitoring, automated testing." },
                      { value: "business-outcomes", label: "Business Outcomes", summary: "Faster time-to-value, reduced manual work via RPA + workflow, improved CX with next-best-action." },
                      { value: "use-cases-industries", label: "Use Cases & Industries", summary: "Customer service, sales ops, onboarding; claims, underwriting, KYC/AML; field service, order-to-cash, collections." },
                    ]}
                  />
                </TabsContent>

                {/* ServiceNow */}
                <TabsContent value="servicenow">
                  <h3>ServiceNow – Now Platform App Engine</h3>
                  <p className="mb-4">Rapidly digitize workflows with App Engine, Flow Designer, and IntegrationHub—on a secure, compliant SaaS platform.</p>
                  <div className="tab-hero">
                    <div className="copy"><h4>From tickets to outcomes.</h4><p>Build modern experiences on the Now Platform with secure, governed low-code.</p></div>
                    <img src="/assets/img/service/2.webp" alt="ServiceNow App Engine" />
                  </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="lcnc-cards">
                        <div className="lcnc-card"><div className="media"><img src="/assets/img/service/22.webp" alt="ServiceNow workflows" /></div><div className="body"><h4>Workflow Apps</h4><p>Digitize tasks, records, and SLAs with Flow Designer and UI Builder.</p></div></div>
                        <div className="lcnc-card"><div className="media"><img src="/assets/img/service/2.webp" alt="IntegrationHub spokes" /></div><div className="body"><h4>IntegrationHub</h4><p>Connect to enterprise systems using spokes, REST/SOAP, and MID Server.</p></div></div>
                        <div className="lcnc-card"><div className="media"><img src="/assets/img/service/01.webp" alt="Automation Engine RPA" /></div><div className="body"><h4>Automation Engine</h4><p>RPA and orchestration to remove repetitive work across teams.</p></div></div>
                      </div>
                    </div>
                  </div>

                  <HeroSummaryTabs
                    className="pt-2"
                    tabs={[
                      { value: "products-functions", label: "Products & Functions", summary: "App Engine, ITSM/ITOM/ITAM, HRSD, CSM, GRC; IntegrationHub and Automation Engine (RPA)." },
                      { value: "dev-methodology", label: "Development Methodology", summary: "Scoped apps, CICD, Dev/Test/Prod promotion; citizen developer guardrails and governance." },
                      { value: "hosting-integrations", label: "Hosting & Integrations", summary: "Native SaaS regions; IntegrationHub spokes, REST/SOAP, MID Server for on‑prem integrations." },
                    ]}
                  />
                  <HeroSummaryTabs
                    className="pt-2"
                    tabs={[
                      { value: "governance", label: "Governance, Security, & Compliance", summary: "Instance governance, update sets, pipelines; SSO, encryption, data policies; platform security certifications." },
                      { value: "business-outcomes", label: "Business Outcomes", summary: "Rapid workflow digitization and scale; lower development cost via App Engine + guardrails; better service experiences." },
                      { value: "use-cases-industries", label: "Use Cases & Industries", summary: "ITSM/ITOM, HR services, employee workflows; customer service, field service, operations; GRC, risk, and audit." },
                    ]}
                  />
                </TabsContent>

                {/* Microsoft */}
                <TabsContent value="microsoft">
                  <h3>Microsoft – Power Platform & Dynamics 365</h3>
                  <p className="mb-4">Empower fusion teams with low-code tools on Azure. Build apps, automate processes, analyze data, and digitize customer/employee experiences.</p>
                  <div className="tab-hero">
                    <div className="copy"><h4>Ship faster with Power + Azure.</h4><p>Canvas and model-driven apps on Dataverse with 1,000+ connectors and Copilot.</p></div>
                    <img src="/assets/img/service/6.webp" alt="Microsoft Power Platform" />
                  </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="lcnc-cards">
                        <div className="lcnc-card"><div className="media"><img src="/assets/img/service/6.webp" alt="Power Apps" /></div><div className="body"><h4>Power Apps</h4><p>Canvas and model-driven apps on Dataverse for enterprise UX.</p></div></div>
                        <div className="lcnc-card"><div className="media"><img src="/assets/img/service/4.webp" alt="Power Automate" /></div><div className="body"><h4>Power Automate</h4><p>Automate processes with flows, approvals, RPA, and connectors.</p></div></div>
                        <div className="lcnc-card"><div className="media"><img src="/assets/img/service/01.webp" alt="Dynamics 365" /></div><div className="body"><h4>Dynamics 365</h4><p>Sales, service, field, finance, and supply chain on Dataverse.</p></div></div>
                      </div>
                    </div>
                  </div>

                  <HeroSummaryTabs
                    className="pt-2"
                    tabs={[
                      { value: "products-functions", label: "Products & Functions", summary: "Power Platform (Apps, Automate, BI, Pages, Copilot); Dynamics 365 on Dataverse; Azure services, API Management, Logic Apps." },
                      { value: "dev-methodology", label: "Development Methodology", summary: "ALM with solutions, pipelines, environments; Center of Excellence for governance, DLP, monitoring." },
                      { value: "hosting-integrations", label: "Hosting & Integrations", summary: "Microsoft cloud (Azure, M365, GCC); 1,000+ connectors, custom connectors, REST/OData, webhooks." },
                    ]}
                  />
                  <HeroSummaryTabs
                    className="pt-2"
                    tabs={[
                      { value: "governance", label: "Governance, Security, & Compliance", summary: "DLP policies, environment strategy, managed identities; Entra ID SSO and RBAC; monitoring, audit, solution-aware pipelines." },
                      { value: "business-outcomes", label: "Business Outcomes", summary: "Fusion development (IT + business), faster app delivery with Dataverse + connectors, unified data and AI-driven insights." },
                      { value: "use-cases-industries", label: "Use Cases & Industries", summary: "Frontline apps, approvals, inspections; sales, service, marketing; finance, supply chain, projects." },
                    ]}
                  />
                </TabsContent>
              </Tabs>

              <div className="row g-4 pt-4">
                <div className="col-12">
                  <div className="lcnc-banner">
                    <h5>Related Platforms & Ecosystems</h5>
                    <p className="ecosystems">
                      We also support Appian and Camunda, and integrate with ecosystems like AWS, Azure, Salesforce, SAP, and more to deliver end-to-end outcomes.
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


