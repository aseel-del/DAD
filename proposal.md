# Commercial & Technical Proposal
## Modern Corporate Website & Custom Node.js Admin Panel

**Client:** Dar Aldawa Development & Investment Co. (DAD Group)  
**Website:** [www.dadgroup.com](https://www.dadgroup.com/)  
**Prepared By:** BoldPro  
**Proposal Version:** 1.0 (Definitive Scope & Governance Specification)  
**Date:** September 2026  
**Contract Value:** JD 5,000 (Inclusive of all applicable sales tax)  

---

## 1. Executive Summary & Strategic Value Proposition

**BoldPro** is pleased to submit this comprehensive technical and commercial proposal to **Dar Aldawa Development & Investment Co. (DAD Group)** for the complete redesign, bespoke engineering, and deployment of a modern corporate website and custom administrative management system.

Established in 1975, Dar Aldawa is one of the premier pharmaceutical manufacturing and healthcare leaders in the Middle East and North Africa (MENA) region, exporting life-saving pharmaceuticals and consumer healthcare formulations across dozens of global markets. To match this stellar scientific heritage and market leadership, DAD Group requires a digital platform that conveys institutional trust, innovation, and global compliance.

BoldPro will deliver an ultra-high-performance, secure, and modern digital platform featuring:

*   **Bespoke UI/UX Design System:** A world-class visual identity tailored for healthcare professionals (HCPs), global distribution partners, institutional investors, regulators, and consumers across mobile, tablet, and desktop.
*   **Custom Node.js Administration Panel (CMS):** A secure, purpose-built administration hub designed around DAD Group workflows, liberating internal teams from bloated, vulnerable off-the-shelf plugins and license fees.
*   **Modular Marketing & Campaign Engine:** Ability to spin up dedicated product launch pages, awareness day microsites, and regional initiatives under the main corporate domain (`dadgroup.com`) with custom SEO metadata and tracking pixels.
*   **Trilingual Precision (EN / AR / FR):** Native human-curated localization featuring true Right-to-Left (RTL) typography and layout mirroring for Arabic, delivered in a structured phased rollout (EN + AR first, then FR).
*   **Ironclad Technical SEO & Enterprise Standards:** Sub-second Core Web Vitals performance, JSON-LD Schema markup, automated backups, role-based workflows, and 1 full year of warranty and maintenance.

---

## 2. Client Relations & Project Governance: The "No Blame Game" Framework

At BoldPro, we believe that world-class software delivery relies on crystal-clear accountability, structured milestones, and proactive client relationship management. To ensure the project finishes strictly within the 6-week timeline with zero ambiguity, both parties will operate under the following governance principles:

> [!IMPORTANT]
> **MANDATORY DESIGN & ASSET APPROVAL GATE (WEEK 2)**  
> **Rule:** Frontend and backend code engineering will strictly commence ONLY after DAD Group provides formal written sign-off on the complete UI/UX Figma prototype, layout architecture, and initial bilingual content/assets (English & Arabic).  
> **Why This Protects DAD Group:** Guarantees that the final visual product matches executive expectations 100% before technical implementation, eliminating costly mid-development redesigns and timeline slippage.

### 2.1 RACI Responsibility Assignment Matrix

| Project Domain / Activity | BoldPro | DAD Group | Notes / Handover Criteria |
| :--- | :--- | :--- | :--- |
| **Project Discovery & IA Mapping** | Responsible / Accountable | Consulted / Informed | Joint kickoff & stakeholder alignment. |
| **UI/UX Design Prototypes (Figma)** | Responsible / Accountable | Reviewer / Sign-Off | Includes Mobile, Tablet, Desktop (LTR & RTL). |
| **Content Copy & Media Assets (EN/AR)** | Consulted / Formatting | Responsible / Accountable | High-res imagery, product data, approved copy. |
| **Formal Design & Content Sign-Off** | Facilitator | Accountable / Signer | **Mandatory gate before coding starts.** |
| **Node.js Backend & CMS Development** | Responsible / Accountable | Informed | Custom API, DB schema, RBAC implementation. |
| **Frontend UI Engineering (EN / AR)** | Responsible / Accountable | Informed | Sub-second Next.js / Tailwind CSS build. |
| **Product Catalog & Dynamic Modules** | Responsible / Accountable | Consulted | Dynamic filtering & leaflet downloads. |
| **French Translation & Data Ingestion** | Responsible (System Prep) | Accountable (Content) | French copy provided in Week 4; ingested in Week 5. |
| **Staging Review & Acceptance (UAT)** | Responsible (Fixes) | Accountable (Testing) | Formal staging walkthrough on test URL. |
| **DNS / Hosting Server Provisioning** | Responsible (Deployment) | Accountable (Access) | DNS pointers & cloud server credentials. |
| **Admin Training & Knowledge Handover** | Responsible / Accountable | Attending / Signer | Live training session + Admin Video/PDF Guide. |
| **1-Year Post-Launch Maintenance** | Responsible / Accountable | Informed | Ongoing monitoring, backups, security patching. |

### 2.2 Scope Management & Change Control Policy

To preserve the agreed 6-week timeline and fixed budget of JD 5,000, any feature request outside the defined scope will follow a transparent Change Request (CR) workflow:
1. **Identification:** The client or BoldPro identifies a desired enhancement.
2. **Impact Assessment:** BoldPro delivers a written assessment detailing the estimated hours, cost (if any), and timeline impact within 24 hours.
3. **Decision:** DAD Group decides whether to approve the CR immediately, adjust other requirements to maintain the 6-week launch, or defer it to the post-launch maintenance window.

---

## 3. Detailed Scope of Work & System Architecture

### 3.1 Public Corporate Website Architecture

The public portal will be built with a high-performance Jamstack / SSR architecture (Next.js / TypeScript + Tailwind CSS) ensuring instant page transitions, top-tier cybersecurity, and flawless SEO indexing.

#### Dynamic vs. Structured Semi-Static Content Matrix:

| Section / Module | Type | Admin Management Capability | Localization |
| :--- | :--- | :--- | :--- |
| **Homepage** | Semi-Static Layout | Update Hero banners, ticker, trust metrics & highlighted products | EN, AR (RTL), FR |
| **About DAD Group** | Semi-Static Structured | Edit company history, mission/vision, leadership board & network | EN, AR (RTL), FR |
| **Manufacturing & Quality** | Semi-Static Structured | Update facility details (Jordan/Algeria), GMP certificates & R&D copy | EN, AR (RTL), FR |
| **Sustainability & ESG** | Semi-Static Structured | Manage CSR commitments, sustainability reports & governance copy | EN, AR (RTL), FR |
| **Product Catalog & Therapeutics** | Fully Dynamic | Add/edit unlimited products, categories, indications & PDF leaflets | EN, AR (RTL), FR |
| **Media & News Center** | Fully Dynamic | Publish press releases, news articles, photo/video media & media kits | EN, AR (RTL), FR |
| **Campaign Landing Pages** | Fully Dynamic (Modular) | Create dedicated landing pages under `dadgroup.com` with custom slugs | EN, AR (RTL), FR |
| **Careers & Job Vacancies** | Dynamic / Form-Driven | Post job openings, accept CV uploads & manage candidate inquiries | EN, AR (RTL), FR |
| **Contact & Branch Inquiries** | Form-Driven | Manage departmental routing (Sales, Medical, Exports, General) | EN, AR (RTL), FR |

---

### 3.2 Custom Node.js Admin Panel (CMS) Capabilities

The bespoke administration backend is engineered natively in Node.js, providing an intuitive, blisteringly fast control panel without third-party plugin bloat.

*   **Role-Based Access Control (RBAC):** Three distinct user tiers: *Super Admin* (system configs, user access, SEO redirects), *Editor* (publish and edit all content), and *Contributor* (draft content subject to editorial approval).
*   **Bilingual Side-by-Side Editor:** Manage English and Arabic content in synchronized side-by-side fields to eliminate translation gaps.
*   **Media Optimizer & Document Vault:** Automated server-side conversion of uploaded imagery to modern next-gen WebP format with automated thumbnail generation and secure PDF leaflet storage.
*   **Campaign Landing Page Generator:** Marketing team can launch landing pages (e.g. `dadgroup.com/diabetes-awareness` or `dadgroup.com/new-product`) using reusable UI blocks, custom headers, forms, and tracking scripts.
*   **Enterprise SEO Management Suite:** Custom page title, meta description, OpenGraph social sharing images, canonical tags, automated XML sitemaps, and 301 URL redirect manager.
*   **Security & Audit Logging:** Two-Factor Authentication (2FA) support, secure JWT session management, brute-force IP rate limiting, and comprehensive activity audit logs.

---

### 3.3 Trilingual Implementation & Phased Rollout

*   **Arabic (AR):** Complete native Right-to-Left (RTL) layout mirroring with optimized Arabic typography (Cairo / IBM Plex Arabic).
*   **English (EN):** International corporate standard Left-to-Right (LTR) presentation.
*   **French (FR):** Tailored for DAD Group's North African (e.g., Algeria) and Francophone international export markets.
*   **Human-Curated Content:** Zero automated machine translation scripts (e.g. Google Translate widgets) to ensure medical precision and brand authority.
*   **Phased Release:** Weeks 1–4 focus on delivering and perfecting English and Arabic; French content is connected, tested, and validated in Weeks 5–6.

---

### 3.4 Technical SEO, Performance & Security

*   **Core Web Vitals Excellence:** Targeting 90+ mobile & desktop performance scores with sub-1.2s Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).
*   **Structured Data (Schema.org):** Deep JSON-LD implementation covering `Organization`, `MedicalBusiness`, `Product`, `NewsArticle`, and `BreadcrumbList` schemas.
*   **Security Hardening:** OWASP Top-10 compliant architecture, Content Security Policy (CSP), CORS protection, XSS/CSRF mitigation, and SSL/TLS HTTPS encryption.
*   **Automated Backups:** Automated daily database dumps and weekly file snapshots stored in secure off-site cloud storage with one-click disaster recovery.

---

## 4. Proven Technology Stack

| Layer | Technology | Strategic Benefit to DAD Group |
| :--- | :--- | :--- |
| **Frontend UI** | Next.js / React (TypeScript) + Tailwind CSS | Server-Side Rendering (SSR) for instant loading, full RTL compatibility, top Google search indexing. |
| **Backend & API** | Node.js (Express / Fastify Architecture) | Ultra-fast execution, microsecond API responses, robust custom business logic without 3rd-party plugin bloat. |
| **Database** | PostgreSQL / MongoDB + Redis In-Memory Cache | ACID-compliant relational data management for multilingual entities and sub-millisecond cached responses. |
| **Admin CMS** | Custom Bespoke Control Panel | Clean, responsive, tailored directly to DAD Group team roles; zero recurring third-party software licensing fees. |
| **SEO & Analytics** | Google Analytics 4, GTM, JSON-LD Schema | Granular visitor tracking, campaign conversion attribution, rich Google SERP snippet formatting. |
| **DevOps & CI/CD** | Git / GitHub, Docker, NGINX, Ubuntu Linux | Version-controlled development, automated testing, isolated Staging and Production hosting environments. |

---

## 5. 6-Week Milestone Implementation Schedule

```
Week 1: Discovery, Information Architecture, & UX Wireframes
Week 2: UI/UX High-Fidelity Design System in Figma (EN & AR)
        ★ MANDATORY MILESTONE GATE: Formal UI/UX & Content Sign-Off
Week 3: Node.js Backend & API Architecture + Core Frontend (EN & AR RTL)
Week 4: Dynamic Modules, Campaign Builder & Media Optimizer
Week 5: French Language Layer Integration, Technical SEO & Staging UAT
Week 6: End-to-End QA, Security Audit, Admin Training & Production Go-Live
```

| Week / Phase | Key Activities & Milestones | Deliverables | Sign-Off Required |
| :--- | :--- | :--- | :--- |
| **Week 1: Discovery & Wireframes** | • Stakeholder alignment & requirements workshop<br>• Information Architecture (IA) & Sitemap mapping<br>• Low-fidelity UX wireframes (Mobile & Desktop) | • Sitemap & IA Spec<br>• Wireframe prototype<br>• Content collection template | Information Architecture Sign-Off |
| **Week 2: UI/UX Design & Approval Gate** | • High-fidelity visual UI design in Figma (EN & AR)<br>• Design System (Typography, Colors, Components)<br>• Content & asset collection from DAD Group | • Complete Figma UI Mockups<br>• Asset package ready<br>• Design System tokens | **★ MANDATORY GATE:**<br>UI/UX & Content Sign-Off |
| **Week 3: Backend & Core Frontend** | • Node.js database & REST API architecture<br>• Admin CMS shell, authentication & RBAC<br>• Frontend core templates (EN & AR RTL setup) | • Functional Admin shell<br>• Core frontend pages<br>• API documentation | Sprint Progress Review |
| **Week 4: Dynamic Modules & Campaigns** | • Dynamic Product Catalog & Therapeutic filters<br>• News/Media Center & PDF leaflet downloads<br>• Modular Campaign Landing Page Builder<br>• Media optimizer & WebP compression | • Dynamic modules live on Staging<br>• Campaign builder tool<br>• Initial product data import | Dynamic Features Demo |
| **Week 5: French Integration & Staging UAT** | • French language data schema & frontend wiring<br>• French content ingestion<br>• Technical SEO (Schema, Sitemaps, OpenGraph)<br>• Staging deployment for Client UAT | • Trilingual Staging Site<br>• SEO audit report<br>• UAT test environment | Staging UAT Acceptance |
| **Week 6: QA, Training & Production Launch** | • Cross-browser & cross-device QA validation<br>• Security penetration & performance load testing<br>• DAD Group Admin Training session<br>• Production deployment to `www.dadgroup.com` | • Live Production Website<br>• Admin User Manual & Video<br>• Handover documentation | **★ FINAL SIGN-OFF:**<br>Project Handover & Go-Live |

---

## 6. Comprehensive 1-Year Maintenance & SLA Plan (Included)

BoldPro includes **1 Full Year (12 Consecutive Months)** of complete technical maintenance, security protection, and SLA-governed support starting on the date of production launch at no additional charge:

*   **Technical Bug Fixes & Layout Corrections:** Rapid diagnosis and resolution of any functional, browser-compatibility, or layout issues.
*   **Security Patching & Dependency Updates:** Continuous updates for Node.js runtime, security libraries, database engines, and server packages.
*   **Automated Daily Backups & Disaster Recovery:** Automated off-site database backups with tested 1-hour recovery guarantee.
*   **24/7 Uptime & Server Health Monitoring:** Proactive monitoring of server health, SSL certificate validity, and page availability.
*   **Ongoing SEO Audits:** Quarterly health checks for Google Search Console indexing, broken links, and schema validation.
*   **Administrative Guidance:** Dedicated support for DAD Group CMS administrators for questions and content publishing guidance.

### Support SLA Response Tiers:

| Severity Level | Definition & Impact | First Response SLA | Target Resolution SLA |
| :--- | :--- | :---: | :---: |
| **Critical (Severity 1)** | Website down or major functionality failure affecting all visitors. | **< 2 Hours** | **< 6 Hours** |
| **High (Severity 2)** | Important feature impaired (e.g. form failure, product search issue) with workaround. | **< 4 Hours** | **< 12 Hours** |
| **Medium (Severity 3)** | Minor visual glitch, single language typo, or non-critical admin tool inconvenience. | **< 8 Hours** | **< 24 Hours** |
| **Low / Request (Severity 4)** | General advisory question, new user setup, or CMS guidance. | **< 12 Hours** | **< 48 Hours** |

---

## 7. Commercial Investment & Payment Terms

### Fixed-Price Investment

| Item & Scope of Services | Amount (JOD) |
| :--- | :---: |
| **Complete Website Redesign & Engineering**<br>• Bespoke Modern UI/UX Design System (Mobile & Desktop)<br>• Public Corporate Platform (Dynamic Product Catalog, News, Careers, Media)<br>• Modular Campaign Landing Page Generator under `dadgroup.com`<br>• Full Trilingual Support (English, Arabic RTL, French – Human Curated)<br>• Technical SEO, Schema.org Data, Core Web Vitals Optimization | **Included** |
| **Custom Node.js Administration Panel (CMS)**<br>• Purpose-built, bloat-free Node.js backend<br>• Role-Based Access Control (Super Admin, Editor, Contributor)<br>• Automated WebP Media Optimizer & PDF Vault<br>• 301 Redirect & XML Sitemap Management Suite<br>• Zero recurring third-party CMS licensing fees | **Included** |
| **1-Year Enterprise Warranty & Maintenance Plan (12 Months)**<br>• SLA-governed bug fixing and technical support<br>• Security patching, automated backups & 24/7 uptime monitoring<br>• CMS Administrator support & training documentation | **Included** |
| **TOTAL FIXED CONTRACT VALUE (Inclusive of all Applicable Sales Tax)** | **JD 5,000** |

### Milestone Payment Schedule

| Milestone | Trigger / Completion Condition | Percentage | Amount (JOD) |
| :--- | :--- | :---: | :---: |
| **Milestone 1** | Contract Execution & Project Kickoff (Advance Mobilization) | 40% | JD 2,000 |
| **Milestone 2** | Formal Sign-Off on UI/UX Design & Content/Asset Readiness (End of Week 2) | 30% | JD 1,500 |
| **Milestone 3** | Staging UAT Approval, Admin Training & Live Production Deployment (Week 6) | 30% | JD 1,500 |
| **TOTAL** | **Full Project Delivery & 1-Year Maintenance Handover** | **100%** | **JD 5,000** |

---

## 8. Kickoff Clarifications & Technical Alignment

To initiate the 6-week timeline with maximum speed, DAD Group and BoldPro will align on the following 5 operational items during the kickoff session:

1. **Server Infrastructure:** Will DAD Group provide access to an existing cloud/VPS environment (e.g. AWS, Azure, Linux VPS) or would you prefer BoldPro to configure and manage cloud hosting?
2. **Product Catalog Migration:** Is the current pharmaceutical portfolio available in an exportable file (Excel, CSV, or database dump) for automated migration, or will product records be inputted via the CMS interface?
3. **Enterprise Integrations (ERP/HR):** Are there internal systems (e.g. SAP, HR recruitment software) requiring direct API sync, or should inquiries and CVs be routed to designated departmental emails and the CMS database?
4. **DNS & Domain Management:** Will DAD Group IT provide DNS access for staging subdomain configuration (e.g. `staging.dadgroup.com`) and SSL provisioning?
5. **French Content Readiness:** To align with Phase 2 delivery, DAD Group will supply approved French translations by **Week 4** for seamless ingestion in Week 5.

---

## 9. Formal Authorization & Sign-Off

By signing below, the authorized representatives of BoldPro and DAD Group accept the scope, commercial terms, timeline, governance gates, and specifications detailed in this proposal.

<br>

| Authorized Representative: **BoldPro** | Authorized Representative: **DAD Group (Dar Aldawa)** |
| :--- | :--- |
| **Signature:** ________________________________ | **Signature:** ________________________________ |
| **Name:** ___________________________________ | **Name:** ___________________________________ |
| **Title:** ____________________________________ | **Title:** ____________________________________ |
| **Date:** ____________________________________ | **Date:** ____________________________________ |
