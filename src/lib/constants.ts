// Service and Feature Data Constants
import type { CoreValue, HeroSlide, IconLabelItem, ServiceGridCard } from './types';

// ============================================================================
// Type Definitions
// ============================================================================

export interface IconTitleCard {
  readonly icon: string;
  readonly title: string;
}

export interface ServiceCard {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

// Type aliases for semantic clarity
export type CapabilityCard = ServiceCard;

export type ProcessStep = ServiceCard;

export interface ManagedService {
  readonly image: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

export interface ProfessionalService {
  readonly iconClass: string;
  readonly title: string;
  readonly href: string;
  readonly description: string;
}

export interface NavigationLink {
  readonly label: string;
  readonly href: string;
}

export interface CareerValue {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly chips: readonly Chip[];
}

export interface Chip {
  readonly label: string;
  readonly icon: string;
}

export interface AboutValue {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface MarqueeSlide {
  readonly title: string;
  readonly icon: string;
}

export type NotFoundLink = readonly [href: string, label: string];

// ============================================================================
// Home Page Constants
// ============================================================================

export const MARQUEE_PARTNERS_SLIDES: readonly MarqueeSlide[] = [
  {
    title: 'Infosys',
    icon: 'fas fa-info',
  },
  {
    title: 'Capgemini',
    icon: 'fas fa-gem',
  },
  {
    title: 'LTIM',
    icon: 'fas fa-cog',
  },
  {
    title: 'Wipro',
    icon: 'fas fa-wrench',
  },
  {
    title: 'Coforge',
    icon: 'fas fa-cog',
  },
  {
    title: 'Tech Mahindra',
    icon: 'fas fa-wrench',
  },
];

// ============================================================================
// VisionPLUS Constants
// ============================================================================

export const VISION_PLUS_WHY_CHOOSE_CARDS: readonly IconTitleCard[] = [
  { icon: 'fa-solid fa-credit-card', title: 'Payment Cards & Loans Management' },
  { icon: 'fa-solid fa-bolt', title: 'Real-Time Authorization (FAS)' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Mobile Payments & Digital Self-Service' },
  { icon: 'fa-solid fa-plug', title: 'Open APIs & Integration' },
];

export const VISION_PLUS_SERVICE_CARDS: readonly ServiceCard[] = [
  {
    icon: 'fas fa-rocket',
    title: 'Platform Implementation',
    description:
      'End-to-end VisionPLUS implementation including system setup, configuration, data migration, testing, and go-live support for payment cards, loans, and commercial products.',
  },
  {
    icon: 'fas fa-arrow-up-right-from-square',
    title: 'Version Upgrades & Migration',
    description:
      'Seamless upgrades from legacy mainframe to modern platforms like FirstVision on Linux; migrate to cloud-based deployments with minimal disruption.',
  },
  {
    icon: 'fas fa-credit-card',
    title: 'Card Product Configuration',
    description:
      'Design and configure payment card products with fee structures, interest rules, EMV profiles, tokenization, and digital wallet integration.',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Authorization System (FAS)',
    description:
      'Configure Financial Authorization System for real-time transaction processing, credit limits, velocity controls, fraud detection, and ISO 8583 connectivity.',
  },
  {
    icon: 'fas fa-file-invoice-dollar',
    title: 'Clearing & Settlement',
    description:
      'Optimize interchange processing, posting rules, GL mapping, reconciliation workflows, and settlement cycles for accurate financial operations.',
  },
  {
    icon: 'fas fa-plug',
    title: 'API Integration',
    description:
      'Leverage VisionPLUS Open APIs to integrate with digital channels, mobile apps, online banking, and back-office systems for enhanced customer experience.',
  },
  {
    icon: 'fas fa-mobile-screen-button',
    title: 'Digital Channel Enablement',
    description:
      'Enable mobile payments, digital self-service, contactless transactions, and event-driven customer communications for modern banking experiences.',
  },
  {
    icon: 'fas fa-gears',
    title: 'Automated Workflows',
    description:
      'Implement automated workflows for account opening, card issuance, transaction processing, and customer notifications to improve operational efficiency.',
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Compliance & Security',
    description:
      'Ensure PCI DSS compliance, regulatory adherence, fraud prevention, and security controls across all VisionPLUS modules and integrations.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Performance Optimization',
    description:
      'Optimize platform performance, transaction throughput, and system scalability to support growing customer and transaction volumes.',
  },
  {
    icon: 'fas fa-headset',
    title: 'Managed Support Services',
    description:
      '24×7 platform monitoring, incident management, performance tuning, and technical support with SLAs tailored to your business requirements.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Training & Knowledge Transfer',
    description:
      'Comprehensive training programs for your team covering VisionPLUS modules, operations, configuration, and troubleshooting best practices.',
  },
];

export const VISION_PLUS_CAPABILITIES: readonly CapabilityCard[] = [
  {
    icon: 'fas fa-wallet',
    title: 'Account Processing',
    description:
      'Integrated platform for managing payment cards, loans, prepaid cards, and commercial card products with complete lifecycle management.',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Real-Time Authorization',
    description:
      'Financial Authorization System (FAS) for real-time transaction processing, credit limits, fraud detection, and authorization strategies.',
  },
  {
    icon: 'fas fa-mobile-screen',
    title: 'Mobile & Digital Payments',
    description:
      'Support for mobile payments, contactless transactions, digital wallets, tokenization, and seamless digital customer experiences.',
  },
  {
    icon: 'fas fa-plug',
    title: 'Open API Framework',
    description:
      'Extensive APIs for quick integration with digital channels, mobile apps, online banking, and third-party services for faster innovation.',
  },
  {
    icon: 'fas fa-file-invoice-dollar',
    title: 'Clearing & Settlement',
    description:
      'Interchange processing, transaction posting, GL integration, reconciliation, and automated settlement cycles for accurate financials.',
  },
  {
    icon: 'fas fa-robot',
    title: 'Automated Workflows',
    description:
      'Streamlined workflows for account opening, card issuance, transaction processing, and event-driven customer communications.',
  },
  {
    icon: 'fas fa-cloud',
    title: 'Modern Deployment Options',
    description:
      'Available on mainframe, Linux platforms, FirstVision architecture, and cloud-based deployments for flexible infrastructure choices.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Scalability & Performance',
    description:
      'Built to support large volumes of customers and transactions with high-performance processing and system reliability.',
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Security & Compliance',
    description:
      'Robust security controls, PCI DSS compliance, fraud prevention, and regulatory adherence across all platform modules.',
  },
];

export const VISION_PLUS_IMPLEMENTATION_STEPS: readonly ProcessStep[] = [
  {
    icon: 'fas fa-clipboard-list',
    title: 'Assessment & Planning',
    description:
      'Analyze current systems, define requirements, assess compliance needs, and create detailed implementation roadmap with clear milestones.',
  },
  {
    icon: 'fas fa-sliders',
    title: 'Platform Configuration',
    description:
      'Configure VisionPLUS modules, set up product hierarchies, design fee structures, implement authorization rules, and customize workflows.',
  },
  {
    icon: 'fas fa-database',
    title: 'Data Migration & Integration',
    description:
      'Migrate account data, transaction history, and customer information; integrate with digital channels, core banking, and third-party systems.',
  },
  {
    icon: 'fas fa-vial',
    title: 'Testing & Certification',
    description:
      'Conduct comprehensive testing including functional, integration, performance, and security testing; obtain card scheme certifications and regulatory approvals.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Training & Documentation',
    description:
      'Train operations teams, develop user documentation, create runbooks, and establish knowledge transfer for ongoing platform management.',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Go-Live & Cutover',
    description:
      'Execute controlled cutover with fallback plans, monitor system performance, validate transactions, and ensure business continuity during transition.',
  },
  {
    icon: 'fas fa-headset',
    title: 'Hypercare & Stabilization',
    description:
      'Provide intensive post-launch support, monitor KPIs, resolve issues quickly, optimize performance, and stabilize operations.',
  },
  {
    icon: 'fas fa-arrow-trend-up',
    title: 'Continuous Optimization',
    description:
      'Ongoing platform optimization, feature enhancements, performance tuning, and proactive monitoring to maximize VisionPLUS value.',
  },
];

// ============================================================================
// Smart Investigate Constants
// ============================================================================

export const SMART_INVESTIGATE_WHY_CHOOSE_CARDS: readonly IconTitleCard[] = [
  { icon: 'fa-solid fa-brain', title: 'AI-Powered Analysis' },
  { icon: 'fa-solid fa-robot', title: 'Automated Workflows' },
  { icon: 'fa-solid fa-chart-line', title: 'Real-Time Insights' },
  { icon: 'fa-solid fa-shapes', title: 'Pattern Recognition' },
];

export const SMART_INVESTIGATE_SERVICE_CARDS: readonly ServiceCard[] = [
  {
    icon: 'fas fa-brain',
    title: 'Intelligent Data Analysis',
    description:
      'Advanced analytics engine that processes large volumes of data to identify anomalies, patterns, and correlations automatically.',
  },
  {
    icon: 'fas fa-robot',
    title: 'Automated Investigation Workflows',
    description:
      'Streamlined investigation processes with automated case creation, evidence collection, and report generation to reduce manual effort.',
  },
  {
    icon: 'fas fa-search-plus',
    title: 'Advanced Search & Discovery',
    description:
      'Powerful search capabilities across multiple data sources with natural language processing and intelligent result ranking.',
  },
  {
    icon: 'fas fa-chart-network',
    title: 'Network Analysis & Visualization',
    description:
      'Interactive network mapping and relationship analysis to uncover hidden connections and visualize complex data relationships.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Compliance & Risk Management',
    description:
      'Built-in compliance frameworks and risk assessment tools to ensure investigations meet regulatory requirements and standards.',
  },
  {
    icon: 'fas fa-plug',
    title: 'Integration & API Support',
    description:
      'Seamless integration with existing systems and customizable workflows to meet specific investigation requirements and processes.',
  },
];

export const SMART_INVESTIGATE_CAPABILITIES: readonly CapabilityCard[] = [
  {
    icon: 'fas fa-brain',
    title: 'Machine Learning',
    description:
      'Advanced ML algorithms that learn from historical data to improve investigation accuracy and efficiency over time.',
  },
  {
    icon: 'fas fa-search-plus',
    title: 'Pattern Recognition',
    description:
      'Sophisticated pattern recognition capabilities that identify complex relationships and anomalies in large datasets.',
  },
  {
    icon: 'fas fa-chart-network',
    title: 'Network Analysis',
    description:
      'Comprehensive network analysis tools that map relationships and connections between entities and events.',
  },
  {
    icon: 'fas fa-file-alt',
    title: 'Automated Reporting',
    description:
      'Intelligent report generation with customizable templates and automated distribution to stakeholders.',
  },
];

export const SMART_INVESTIGATE_USE_CASES: readonly ServiceCard[] = [
  {
    icon: 'fas fa-shield-alt',
    title: 'Financial Services',
    description:
      'Fraud detection, AML investigations, and compliance monitoring with automated suspicious activity reporting.',
  },
  {
    icon: 'fas fa-balance-scale',
    title: 'Legal & Compliance',
    description:
      'Document analysis, case management, and regulatory compliance investigations with automated evidence collection.',
  },
  {
    icon: 'fas fa-user-shield',
    title: 'Cybersecurity',
    description:
      'Incident response, threat hunting, and security investigations with real-time threat intelligence integration.',
  },
  {
    icon: 'fas fa-industry',
    title: 'Insurance',
    description:
      'Claims investigation, fraud detection, and risk assessment with automated claim validation and processing.',
  },
  {
    icon: 'fas fa-building',
    title: 'Corporate Investigations',
    description:
      'Internal investigations, HR compliance, and corporate governance with confidential case management.',
  },
  {
    icon: 'fas fa-gavel',
    title: 'Law Enforcement',
    description:
      'Criminal investigations, evidence analysis, and case management with secure data handling and reporting.',
  },
];

// ============================================================================
// MSD365 Constants
// ============================================================================

export const MSD365_SERVICE_CARDS: readonly ServiceCard[] = [
  {
    icon: 'fas fa-cogs',
    title: 'Implementation & Migration',
    description:
      'Greenfield deployments and legacy migrations with process design, data conversion and structured cutover.',
  },
  {
    icon: 'fas fa-users',
    title: 'Sales & Customer Service',
    description:
      'Design lead‑to‑cash and case management with guided selling, SLA/entitlements and omnichannel service.',
  },
  {
    icon: 'fas fa-plug',
    title: 'Finance & Supply Chain',
    description:
      'Chart of accounts, tax, inventory, warehousing and production — aligned to your controls and reporting.',
  },
  {
    icon: 'fas fa-robot',
    title: 'Power Platform & Copilot',
    description:
      'Low‑code apps, approvals and RPA with Power Automate; enable AI assistance with Microsoft Copilot.',
  },
  {
    icon: 'fas fa-database',
    title: 'Integration & Data',
    description:
      'Dataverse, Azure integration and third‑party connectors; master data and data quality governance.',
  },
  {
    icon: 'fas fa-headset',
    title: 'Managed Support & DevOps',
    description:
      '24×7 monitoring, release management and SLA‑backed incident response to keep Dynamics running smoothly.',
  },
];

export const MSD365_MODULES: readonly ServiceCard[] = [
  {
    icon: 'fas fa-handshake',
    title: 'Sales',
    description: 'Pipeline, forecasting, pricing and guided selling on a unified Dataverse model.',
  },
  {
    icon: 'fas fa-headset',
    title: 'Customer Service',
    description:
      'Cases, SLAs, entitlements and omnichannel service with knowledge and self‑service.',
  },
  {
    icon: 'fas fa-file-invoice-dollar',
    title: 'Finance',
    description: 'GL, AP/AR, budgeting, tax and regulatory reporting with embedded controls.',
  },
  {
    icon: 'fas fa-truck-loading',
    title: 'Supply Chain',
    description: 'Inventory, warehousing, production and procurement with real‑time visibility.',
  },
];

export const MSD365_BENEFITS: readonly ServiceCard[] = [
  {
    icon: 'fas fa-bolt',
    title: 'Faster Time‑to‑Value',
    description: 'Template accelerators and proven rollout patterns shorten delivery cycles.',
  },
  {
    icon: 'fas fa-users',
    title: 'User Adoption',
    description: 'Role‑based experiences, training and change kits drive sustainable usage.',
  },
  {
    icon: 'fas fa-database',
    title: 'Single Data Model',
    description: 'Dataverse brings customer and operations data together for end‑to‑end insight.',
  },
  {
    icon: 'fas fa-cogs',
    title: 'Process Automation',
    description: 'Automate approvals and repetitive tasks with Power Automate and RPA.',
  },
  {
    icon: 'fas fa-brain',
    title: 'Insights & AI',
    description: 'Copilot and embedded analytics surface suggestions and next best actions.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Security & Compliance',
    description: 'Enterprise‑grade access control, auditability and regional data residency.',
  },
];

// ============================================================================
// ORMB Constants
// ============================================================================

export const ORMB_SERVICE_CARDS: readonly ServiceCard[] = [
  {
    icon: 'fas fa-cogs',
    title: 'ORMB Implementation',
    description:
      'Complete ORMB implementation services including system design, configuration, data migration, and user training to ensure successful deployment.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Billing Process Optimization',
    description:
      'Streamline billing processes with automated workflows, custom pricing models, and integrated payment processing for improved efficiency.',
  },
  {
    icon: 'fas fa-file-invoice-dollar',
    title: 'Revenue Management',
    description:
      'Advanced revenue recognition and management capabilities with compliance to accounting standards and flexible allocation rules.',
  },
  {
    icon: 'fas fa-plug',
    title: 'System Integration',
    description:
      'Seamless integration with existing ERP, CRM, and payment systems to create a unified billing and revenue management ecosystem.',
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Compliance & Security',
    description:
      'Ensure regulatory compliance and data security with built-in audit trails, access controls, and compliance reporting features.',
  },
  {
    icon: 'fas fa-headset',
    title: 'Support & Maintenance',
    description:
      'Ongoing support, maintenance, and optimization services to ensure your ORMB system continues to meet evolving business needs.',
  },
];

export const ORMB_FEATURES: readonly ServiceCard[] = [
  {
    icon: 'fas fa-calculator',
    title: 'Flexible Pricing',
    description:
      'Support for complex pricing models including usage-based, subscription, tiered, and promotional pricing structures.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Revenue Recognition',
    description:
      'Automated revenue recognition with compliance to accounting standards and flexible allocation rules.',
  },
  {
    icon: 'fas fa-file-invoice',
    title: 'Invoice Generation',
    description:
      'Automated invoice generation with customizable templates and multi-format output capabilities.',
  },
  {
    icon: 'fas fa-exchange-alt',
    title: 'Payment Processing',
    description:
      'Integrated payment processing with support for multiple payment methods and automated collection workflows.',
  },
];

// ============================================================================
// Home Page Constants
// ============================================================================

export const MANAGED_SERVICES: readonly ManagedService[] = [
  {
    image: '/assets/img/icon/microsoft-365.webp',
    title: 'MSD365',
    description:
      'Comprehensive Microsoft 365 management and optimization services to maximize your productivity suite investment.',
    href: '/msd365',
  },
  {
    image: '/assets/img/icon/managed-cloud-desk.webp',
    title: 'ORMB',
    description:
      'Oracle Revenue Management and Billing solutions designed to streamline complex billing processes and revenue operations.',
    href: '/ormb',
  },
  {
    image: '/assets/img/icon/microsoft-azure.webp',
    title: 'Smart Investigate',
    description:
      'Advanced investigation and analytics platform powered by AI to detect anomalies and drive data-driven insights.',
    href: '/smart-investigate',
  },
  {
    image: '/assets/img/icon/surface-as-a-service.webp',
    title: 'Vision Plus',
    description:
      'Fiserv VisionPLUS account processing platform implementation and support services for financial institutions.',
    href: '/vision-plus',
  },
];

export const PROFESSIONAL_SERVICES: readonly ProfessionalService[] = [
  {
    iconClass: 'icon-04',
    title: 'Digital Process Automation',
    href: '/digital-process-automation',
    description:
      'Build apps 10x faster. Automate, orchestrate, and integrate services with Pega, ServiceNow, and Microsoft Power Platform—governed, secured, enterprise-grade.',
  },
  {
    iconClass: 'icon-05',
    title: 'Cloud Migration',
    href: '/cloud-migration',
    description:
      'Plan, migrate, and modernize workloads to the cloud with zero-downtime strategies, landing zones, and robust governance.',
  },
  {
    iconClass: 'icon-01',
    title: 'Data Analytics',
    href: '/data-analytics',
    description:
      'Turn data into decisions. Build scalable data platforms, BI dashboards, and ML pipelines for measurable outcomes.',
  },
  {
    iconClass: 'icon-04',
    title: 'Digital Transformation',
    href: '/digital-transformation',
    description:
      'Reimagine products and processes end-to-end—strategy, experience, and engineering—accelerated by cloud and automation.',
  },
  {
    iconClass: 'icon-03',
    title: 'Domain Consulting',
    href: '/domain-consulting',
    description:
      'Leverage deep industry expertise to align technology with domain-specific regulations, KPIs, and operating models.',
  },
];

// ============================================================================
// Navigation Constants
// ============================================================================

export const PROFESSIONAL_SERVICES_NAV: readonly string[] = [
  'Digital Process Automation',
  'Cloud Migration',
  'Data Analytics',
  'Digital Transformation',
  'Domain Consulting',
];

export const MANAGED_SERVICES_NAV: readonly NavigationLink[] = [
  { label: 'ORMB', href: '/ormb' },
  { label: 'Vision Plus', href: '/vision-plus' },
  { label: 'Smart Investigate', href: '/smart-investigate' },
  { label: 'MSD365', href: '/msd365' },
];

// ============================================================================
// Career Page Constants
// ============================================================================

export const CAREER_VALUES: readonly CareerValue[] = [
  {
    title: 'Craft',
    description: 'Fewer steps, faster releases',
    icon: 'fas fa-wrench',
    chips: [
      { label: 'Lead time -45%', icon: 'fas fa-clock' },
      { label: 'Rollback rate 0%', icon: 'fas fa-check' },
    ],
  },
  {
    title: 'Clarity',
    description: 'Aligned on outcomes',
    icon: 'fas fa-balance-scale',
    chips: [
      { label: 'Roadmap throughput 2x', icon: 'fas fa-chart-line' },
      { label: 'Stakeholder demos weekly', icon: 'fas fa-chalkboard' },
    ],
  },
  {
    title: 'Enablement',
    description: 'Structured onboarding and knowledge transfer',
    icon: 'fas fa-book',
    chips: [
      { label: 'First PR ≤ 1 week', icon: 'fas fa-code-branch' },
      { label: 'eNPS increase', icon: 'fas fa-arrow-up' },
    ],
  },
  {
    title: 'Security & Compliance',
    description: 'Hardened posture and audit readiness',
    icon: 'fas fa-shield-alt',
    chips: [
      { label: '0 critical incidents', icon: 'fas fa-shield-alt' },
      { label: 'Audit pass rate 100%', icon: 'fas fa-clipboard-check' },
    ],
  },
  {
    title: 'Reliability',
    description: 'Resilient systems and incident response',
    icon: 'fas fa-server',
    chips: [
      { label: 'Uptime 99.9%', icon: 'fas fa-uptime' },
      { label: 'MTTR < 15 min', icon: 'fas fa-tools' },
    ],
  },
];

// ============================================================================
// About Page Constants
// ============================================================================

export const ABOUT_VALUES: readonly AboutValue[] = [
  {
    icon: '/assets/img/about/about-icon.webp',
    title: 'Vision',
    description: 'Empowering businesses through innovative technology solutions.',
  },
  {
    icon: '/assets/img/about/about-icon-2.webp',
    title: 'Values',
    description: 'IT automation and digital transformation for businesses.',
  },
  {
    icon: '/assets/img/about/about-icon-3.webp',
    title: 'Mission',
    description: 'Strengthen your IT backbone and fuel business innovation.',
  },
];

// ============================================================================
// 404 Page Constants
// ============================================================================

export const NOT_FOUND_LINKS: readonly NotFoundLink[] = [
  ['/', 'Home'],
  ['/contact', 'Contact'],
  ['/career', 'Careers'],
  ['/cloud-migration', 'Cloud Migration'],
  ['/msd365', 'MSD365'],
  ['/vision-plus', 'Vision Plus'],
  ['/smart-investigate', 'Smart Investigate'],
  ['/career', 'Careers'],
];

export const ORMB_INDUSTRIES: readonly ServiceCard[] = [
  {
    icon: 'fas fa-university',
    title: 'Banking',
    description:
      'Billing, revenue management and fees calculation for retail, corporate, or digital banking products and services.',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Utilities',
    description:
      'Meter-based billing for electricity, gas, and water services with tiered pricing and demand-based charges.',
  },
  {
    icon: 'fas fa-wifi',
    title: 'Telecommunications',
    description:
      'Complex billing for voice, data, and value-added telecom services with usage-based pricing and real-time rating capabilities.',
  },
];

// ============================================================================
// Landing Page — Hero Carousel Slides
// AI Engineering is first so it appears on initial load.
// ============================================================================

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    backgroundImage: '/assets/img/hero/hero-slider-6.webp',
    eyebrow: 'OMNIA',
    title: 'AI Engineering',
    description:
      'From Generative AI and Agentic systems to MCP Servers and LLMOps—embed intelligence into every layer of your software delivery lifecycle.',
    ctaHref: '/ai-engineering',
  },
  {
    backgroundImage: '/assets/img/hero/hero-slider-4.webp',
    eyebrow: 'OMNIA',
    title: 'Digital Process Automation',
    description:
      'Build apps 10x faster. Automate, orchestrate, and integrate services with Pega, ServiceNow, and Microsoft Power Platform—governed, secured, enterprise-grade.',
    ctaHref: '/digital-process-automation',
  },
  {
    backgroundImage: '/assets/img/hero/hero-slider-5.webp',
    eyebrow: 'OMNIA',
    title: 'Cloud Migration',
    description:
      'Plan, migrate, and modernize workloads to the cloud with zero-downtime strategies, landing zones, and robust governance.',
    ctaHref: '/cloud-migration',
  },
  {
    backgroundImage: '/assets/img/hero/hero-slider-1.webp',
    eyebrow: 'OMNIA',
    title: 'Data Analytics',
    description:
      'Turn data into decisions. Build scalable data platforms, BI dashboards, and ML pipelines for measurable outcomes.',
    ctaHref: '/data-analytics',
  },
  {
    backgroundImage: '/assets/img/hero/hero-slider-3.webp',
    eyebrow: 'OMNIA',
    title: 'Digital \nTransformation',
    description:
      'Reimagine products and processes end-to-end—strategy, experience, and engineering—accelerated by cloud and automation.',
    ctaHref: '/digital-transformation',
  },
  {
    backgroundImage: '/assets/img/hero/hero-slider-3.webp',
    eyebrow: 'OMNIA',
    title: 'Domain Consulting',
    description:
      'Leverage deep industry expertise to align technology with domain-specific regulations, KPIs, and operating models.',
    ctaHref: '/domain-consulting',
  },
];

// ============================================================================
// Landing Page — Professional Services Bento Grid (secondary cards)
// ============================================================================

export const HOME_PROFESSIONAL_SERVICES_GRID: readonly ServiceGridCard[] = [
  {
    title: 'Cloud Migration',
    href: '/cloud-migration',
    description: 'Migrate your on-premises applications to the cloud with ease.',
    icon: 'fas fa-cloud',
  },
  {
    title: 'Data Analytics',
    href: '/data-analytics',
    description: 'Analyze your data to gain insights and make informed decisions.',
    icon: 'fas fa-chart-line',
  },
  {
    title: 'Digital Transformation',
    href: '/digital-transformation',
    description: 'Transform your business to be more efficient and effective.',
    icon: 'fas fa-digital-tachograph',
  },
  {
    title: 'Domain Consulting',
    href: '/domain-consulting',
    description: 'Consult with our experts to improve your business.',
    icon: 'fas fa-briefcase',
  },
];

// ============================================================================
// Landing Page — AI Engineering Section
// ============================================================================

export const AI_ENGINEERING_FEATURES: readonly IconLabelItem[] = [
  { icon: 'fas fa-wand-magic-sparkles', label: 'Generative AI' },
  { icon: 'fas fa-robot', label: 'Agentic AI' },
  { icon: 'fas fa-server', label: 'MCP Servers' },
  { icon: 'fas fa-sliders', label: 'LLMOps' },
  { icon: 'fas fa-code-branch', label: 'AI-Driven SDLC' },
  { icon: 'fas fa-shield-alt', label: 'Responsible AI' },
];

export const AI_ENGINEERING_CAPABILITY_CARDS: readonly ServiceCard[] = [
  {
    icon: 'fas fa-wand-magic-sparkles',
    title: 'Generative AI',
    description:
      'LLMs, RAG pipelines, and fine-tuned models integrated into your products and processes with enterprise-grade guardrails.',
  },
  {
    icon: 'fas fa-robot',
    title: 'Agentic AI',
    description:
      'Autonomous multi-agent systems that plan, act, and self-correct—delivering end-to-end automation across complex workflows.',
  },
  {
    icon: 'fas fa-server',
    title: 'MCP Servers',
    description:
      'Secure Model Context Protocol servers that connect AI models to your enterprise data and tools without exposing raw systems.',
  },
  {
    icon: 'fas fa-code',
    title: 'AI-Powered SDLC',
    description:
      'AI at every stage of delivery—from requirements and design to testing, deployment, monitoring, and incident response.',
  },
];

// ============================================================================
// Landing Page — Core Values
// ============================================================================

export const HOME_CORE_VALUES: readonly CoreValue[] = [
  {
    title: 'Innovation',
    description: 'Thoughtful adoption of technology to unlock measurable impact and sustainable growth.',
    icon: 'fas fa-lightbulb',
  },
  {
    title: 'Trust & Reliability',
    description: 'Transparent communication and dependable delivery—so you always know where we stand.',
    icon: 'fas fa-handshake',
  },
  {
    title: 'Excellence',
    description: 'Careful craftsmanship, best practices, and continuous improvement in everything we do.',
    icon: 'fas fa-gem',
  },
];
