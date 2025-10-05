"use client";

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
                    <img src="/assets/img/service/3.webp" alt="img" />
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
                  <p>Build enterprise-grade applications with case management, low-code design, and AI-powered decisioning.</p>
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
                    <div className="col-md-6">
                      <h5>Core capabilities</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Case management, workflows, SLAs</li>
                        <li><i className="fa-solid fa-angles-right"></i> AI decisioning, next-best-action, business rules</li>
                        <li><i className="fa-solid fa-angles-right"></i> RPA, process mining, work orchestration</li>
                        <li><i className="fa-solid fa-angles-right"></i> Low-code App Studio with guardrails</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Products & functions</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Pega Platform (DPA)</li>
                        <li><i className="fa-solid fa-angles-right"></i> Pega Customer Service, Sales Automation, Marketing</li>
                        <li><i className="fa-solid fa-angles-right"></i> App Studio, Dev Studio, Prediction Studio</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                {/* ServiceNow */}
                <TabsContent value="servicenow">
                  <h3>ServiceNow – Now Platform App Engine</h3>
                  <p>Rapidly digitize workflows with App Engine, Flow Designer, and IntegrationHub—on a secure, compliant SaaS platform.</p>
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
                    <div className="col-md-6">
                      <h5>Core capabilities</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Workflow automation, Forms/Records, Tasking</li>
                        <li><i className="fa-solid fa-angles-right"></i> Flow Designer, Playbooks, UI Builder</li>
                        <li><i className="fa-solid fa-angles-right"></i> Catalogs, Portals, Mobile</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Products & functions</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> App Engine, ITSM/ITOM/ITAM, HRSD, CSM, GRC</li>
                        <li><i className="fa-solid fa-angles-right"></i> IntegrationHub, Automation Engine (RPA)</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Use cases & industries</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> ITSM/ITOM, HR services, employee workflows</li>
                        <li><i className="fa-solid fa-angles-right"></i> Customer service, field service, operations</li>
                        <li><i className="fa-solid fa-angles-right"></i> GRC, risk, and audit management</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Development methodology</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Scoped apps, CICD, Dev/Test/Prod promotion</li>
                        <li><i className="fa-solid fa-angles-right"></i> Citizen developer guardrails and governance</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Hosting & integrations</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Native SaaS (ServiceNow cloud regions)</li>
                        <li><i className="fa-solid fa-angles-right"></i> IntegrationHub spokes, REST/SOAP, MID Server for on‑prem</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Governance, security, & compliance</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Instance governance, update sets, pipelines</li>
                        <li><i className="fa-solid fa-angles-right"></i> SSO, encryption, data policies</li>
                        <li><i className="fa-solid fa-angles-right"></i> Platform security certifications</li>
                      </ul>
                    </div>
                    <div className="col-md-12">
                      <h5>Business outcomes</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Rapid workflow digitization and scale</li>
                        <li><i className="fa-solid fa-angles-right"></i> Lower development cost via App Engine + guardrails</li>
                        <li><i className="fa-solid fa-angles-right"></i> Better service experiences across teams</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                {/* Microsoft */}
                <TabsContent value="microsoft">
                  <h3>Microsoft – Power Platform & Dynamics 365</h3>
                  <p>Empower fusion teams with low-code tools on Azure. Build apps, automate processes, analyze data, and digitize customer/employee experiences.</p>
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
                    <div className="col-md-6">
                      <h5>Core capabilities</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Power Apps (canvas/model-driven), Power Automate, Power Pages</li>
                        <li><i className="fa-solid fa-angles-right"></i> Dataverse, Power BI analytics, Copilot Studio</li>
                        <li><i className="fa-solid fa-angles-right"></i> Dynamics 365 (Sales, Service, Field, Finance, Supply Chain)</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Products & functions</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Power Platform (Apps, Automate, BI, Pages, Copilot)</li>
                        <li><i className="fa-solid fa-angles-right"></i> Dynamics 365 suite on Dataverse</li>
                        <li><i className="fa-solid fa-angles-right"></i> Azure services, API Management, Logic Apps</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Use cases & industries</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Frontline apps, approvals, field inspections</li>
                        <li><i className="fa-solid fa-angles-right"></i> Sales, service, marketing on Dynamics 365</li>
                        <li><i className="fa-solid fa-angles-right"></i> Finance, supply chain, projects</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Development methodology</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> ALM with solutions, pipelines, environments</li>
                        <li><i className="fa-solid fa-angles-right"></i> Center of Excellence (governance, DLP, monitoring)</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Hosting & integrations</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> Microsoft cloud (Azure, M365, GCC options)</li>
                        <li><i className="fa-solid fa-angles-right"></i> 1,000+ connectors, custom connectors, REST/OData, webhooks</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Governance, security, & compliance</h5>
                      <ul className="list-items">
                        <li><i className="fa-solid fa-angles-right"></i> DLP policies, environment strategy, managed identities</li>
                        <li><i className="fa-solid fa-angles-right"></i> Azure AD/Entra ID SSO, role-based security</li>
                        <li><i className="fa-solid fa-angles-right"></i> Monitoring, audit, and solution-aware pipelines</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="row g-4 pt-4">
                <div className="col-12">
                  <div className="lcnc-banner">
                    <h5>Related Platforms & Ecosystems</h5>
                    <p className="ecosystems">
                      We also support Appian and Camunda, and integrate with ecosystems like AWS, Azure, Salesforce, SAP, and more to deliver end-to-end outcomes.
                    </p>
                    <div className="lcnc-brand-logos">
                      <img src="/assets/img/brand/01.webp" alt="AWS" />
                      <img src="/assets/img/brand/02.webp" alt="Azure" />
                      <img src="/assets/img/brand/03.webp" alt="Salesforce" />
                      <img src="/assets/img/brand/04.webp" alt="SAP" />
                      <img src="/assets/img/brand/10.webp" alt="Microsoft" />
                      <img src="/assets/img/brand/11.webp" alt="Snowflake" />
                    </div>
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


