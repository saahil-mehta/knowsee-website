# knowsee Business Strategy

> Last updated: January 2025

## Executive Summary

knowsee positions itself as a **Data Engineering + AI** service provider, offering both standalone services and a bundled "Better Together" package. The core insight: AI tools alone are insufficient—they require solid data foundations, clean pipelines, and accessible data. We provide both the engineering to build those foundations and the AI tool to leverage them.

---

## Core Value Proposition

### The Problem

- Companies have terabytes/petabytes of data hidden in warehouses, silos, and disparate systems
- AI tools promise insights but fail without clean, accessible, well-structured data
- Traditional consulting firms elongate projects with no delivery accountability
- Managed pipeline tools (Fivetran, Airbyte) scale costs with data volume and sources
- Most AI chatbots send data to third-party servers, creating compliance risks

### The Solution

**Engineering + AI, Better Together**

1. **Data Engineering**: Build pipelines, rationalise existing infrastructure, create foundations
2. **knowsee AI**: Chat with your data warehouse, fully deployed on YOUR infrastructure
3. **Bundle**: Discounted when taken together, because they genuinely work better combined

---

## Pricing Structure

### Bundled Pricing (Recommended)

| Service | Monthly Price |
|---------|---------------|
| Data Engineering | £2,499 |
| knowsee | £999 |
| knowsee Secure | £1,099 |
| **Bundle Total** | **£3,498 - £3,598** |

### Standalone Pricing

| Service | Monthly Price |
|---------|---------------|
| Data Engineering | £2,999 |
| knowsee | £1,499 |
| knowsee Secure | £1,599 |

### Bundle Savings

- Engineering + knowsee: Save £1,000/month (22% discount)
- Engineering + knowsee Secure: Save £1,000/month

---

## Service Definitions

### Data Engineering (£2,499/month bundled, £2,999 standalone)

#### Deliverables (Monthly Allocation)

| Deliverable | Included | Notes |
|-------------|----------|-------|
| New pipelines | Up to 4 simple OR 2 medium OR 1 complex | Mix and match proportionally |
| Pipeline rationalisation | Up to 5 pipelines reviewed + optimised | Cost, performance, reliability |
| Greenfield work | Up to 1 new system/architecture | New warehouse, orchestration, data model |
| Maintenance | Ongoing for all delivered work | Bug fixes, monitoring, adjustments |
| Support | 24H response SLA | Via Slack/email |

#### Pipeline Complexity Tiers

| Complexity | Description | Examples |
|------------|-------------|----------|
| **Simple** | Single source to single destination, minimal transformation | REST API to PostgreSQL, CSV upload to warehouse |
| **Medium** | Multiple sources or transformations, some orchestration | 3 APIs transformed to Snowflake, CDC replication |
| **Complex** | Multi-step orchestration, custom logic, error handling | Event streaming, real-time aggregations, ML feature pipelines |

#### Overflow Pricing

| Complexity | Additional Cost |
|------------|-----------------|
| Simple pipeline | £400 |
| Medium pipeline | £800 |
| Complex pipeline | £1,500 |

#### Exclusions

- Infrastructure provisioning costs (cloud bills are client responsibility)
- Data governance/cataloguing tool licensing
- Third-party connector licensing
- On-call/incident response outside business hours (available as add-on)
- Training/documentation beyond handover notes

#### SLA/SLO

- **Response SLA**: 24 hours for all support requests
- **Resolution SLO**: Defined per task based on complexity
- **Transparency**: Progress tracking shared with client

---

### knowsee (£999/month bundled, £1,499 standalone)

Conversational AI tool for your data warehouse, deployed on YOUR infrastructure.

#### Included

- Deployment on client's cloud infrastructure
- Connection to client's data sources
- Standard model configuration (GPT-4o/Claude)
- Monthly updates to knowsee core
- 24H support SLA

---

### knowsee Secure (£1,099/month bundled, £1,599 standalone)

Privacy-first variant for regulated industries and sensitive data.

#### Included

Everything in standard knowsee, plus:

- Open-weight model deployment (Llama, Mistral, etc.)
- Fully air-gapped architecture
- Data never leaves client's environment
- Suitable for GDPR-sensitive and regulated industries

---

## Free Audit: Data & AI Readiness Assessment

### Purpose

Lead generation tool that delivers genuine value while surfacing problems our paid services solve.

### Coverage (8 Areas)

| Area | What We Check |
|------|---------------|
| **1. Data Architecture** | Warehouse/lake structure, data flow mapping, single source of truth |
| **2. Pipeline Health** | ETL/ELT reliability, failure rates, latency, monitoring coverage |
| **3. Cost Efficiency** | Cloud spend analysis, compute waste, storage bloat, zombie resources |
| **4. AI Readiness** | Data quality for ML/AI, accessibility, embedding readiness |
| **5. Compliance Posture** | GDPR handling, retention policies, access controls, PII exposure |
| **6. Integration Gaps** | Systems not connected, manual data movement, spreadsheet bridges |
| **7. Test Coverage** | Data validation tests, schema tests, pipeline tests, alerting |
| **8. Data Quality & Lineage** | Completeness, accuracy, freshness, lineage tracking, cataloguing maturity |

### Delivery Process

| Stage | What Happens | Timeline |
|-------|--------------|----------|
| Intake call | Understand current state, access requirements | Day 1 |
| Analysis | Review architecture, costs, pipelines | Days 2-5 |
| Report | Written scorecard with RAG ratings | Day 6 |
| Readout call | Present findings + recommendations | Day 7-10 |

### Deliverables

1. **Scorecard**: RAG rating (Red/Amber/Green) across all 8 areas with numerical scores
2. **Action Points**: Specific, actionable recommendations per area (not vague "improve this")
3. **Prioritised Roadmap**: What to fix first, what can wait
4. **Cost/Benefit Estimates**: For each recommendation

### Scorecard Format

```
DATA & AI READINESS SCORECARD
------------------------------------------------------
Company: [Client Name]
Date: [Date]

AREA                        SCORE    STATUS
------------------------------------------------------
Data Architecture           6/10     AMBER
Pipeline Health             4/10     RED
Cost Efficiency             5/10     AMBER
AI Readiness                3/10     RED
Compliance Posture          7/10     AMBER
Integration Gaps            4/10     RED
Test Coverage               5/10     AMBER
Data Quality & Lineage      4/10     RED
------------------------------------------------------
OVERALL READINESS           4.8/10   NOT READY

TOP 3 RECOMMENDATIONS:
1. [Specific finding -> specific fix]
2. [Specific finding -> specific fix]
3. [Specific finding -> specific fix]

ESTIMATED MONTHLY SAVINGS: £X,XXX
ESTIMATED TIME TO AI-READY: X months
```

### Client Requirements for Audit

- Read-only access to cloud console (AWS/GCP/Azure)
- Read-only access to data warehouse
- 30 minutes with someone who knows current architecture
- List of current pain points (optional but helpful)

---

## Competitive Positioning

### vs Fivetran/Airbyte

> "Fivetran charges per connector and scales with data volume. At 50 sources, you're paying £5k+/month just for pipelines. Our engineering subscription is flat-rate—add as many sources as we can build in your allocation."

**Key Differentiator**: Flat-rate vs per-source/per-compute pricing

### vs Consulting Firms / Contractors

> "Traditional consultants bill hourly with no delivery guarantees. We work to defined SLOs with transparent progress tracking. Our incentive is to finish efficiently, not to elongate."

**Key Differentiator**: SLO-driven delivery with accountability

### vs Other AI Chatbots

> "Most AI tools send your data to third-party servers. knowsee runs on YOUR infrastructure, with YOUR models, in YOUR cloud. We can deploy fully air-gapped with open-weight models—your data never leaves your environment."

**Key Differentiator**: Privacy-first, on-premise deployment

### vs Full-Time Hire

> "A senior data engineer costs £80-120k/year plus benefits, recruitment, and management overhead. Our subscription delivers the output of multiple AI-augmented engineers at a fraction of the cost, with no long-term commitment."

**Key Differentiator**: Cost efficiency without commitment

---

## Open Source Strategy

### knowsee-public

A reference implementation released as open source.

**Purpose**:
- Demonstrate that CopilotKit + Google ADK work together effectively
- Gain free marketing through CopilotKit and Google promotion
- Attract developers who try self-hosting, realise complexity, and become leads

**Monetisation Path**:
- Code is free
- Implementation, customisation, support, and maintenance are paid
- The upgrade path: "Need help? Hire the maintainer"

**Differentiators (Not in OSS)**:
- Production-grade prompts and agent architecture
- Claude.md configurations tuned for specific use cases
- Ongoing maintenance and updates
- Support SLA
- Custom integrations

---

## Target Market

### Positioning

**Horizontal service, vertical marketing**

The service applies to any industry with data engineering needs. Marketing can be tailored to specific verticals when approaching them, but the website speaks to universal pain points.

### Ideal Customer Profile (ICP)

Mid-market companies (50-500 employees) with:
- Existing data infrastructure that's underperforming
- Manual data processes consuming significant time
- Desire to leverage AI but lacking clean data foundations
- Budget for ongoing subscription (not just one-off project)
- Technical decision-maker who understands the value

### Industry Examples

Marketing will highlight problems solved across industries:

**Fintech**
- Challenge: Batch processing meant fraud detection was 24h delayed
- Solution: Streaming architecture with sub-second latency
- Result: Fraud detection reduced from 24h to <5 seconds

**Marketing Agency**
- Challenge: Manual data pulls from 6 ad platforms, 20h/week wasted
- Solution: Unified pipeline aggregating Meta, Google, TikTok, LinkedIn, Twitter, Snapchat
- Result: Automated daily reports, 20h/week recovered

**E-commerce**
- Challenge: Stock levels out of sync across Shopify, Amazon, warehouse system
- Solution: Event-driven sync pipeline with conflict resolution
- Result: Overselling incidents reduced by 94%

---

## Scaling Model

### Team Structure

- India-based engineers for cost efficiency
- AI augmentation (Claude subscriptions) for productivity multiplication
- Saahil as technical lead, architect, and quality gate

### Unit Economics

| Factor | Value |
|--------|-------|
| Indian engineer cost | ~£1,500-2,000/month |
| AI productivity multiplier | 4-5x |
| Effective output | 4-5 engineers per hire |
| Revenue per client | £2,499-3,598/month |
| Gross margin target | 60-70%+ |

### Quality Controls

- Hard limit on time dedication: Each engineer dedicates minimum focused effort per client
- No oversubscription: Team never takes more than it can handle well
- Data privacy moat: Fully compliant, fully separate environments per client

---

## Website Strategy

### Design Direction

**Aesthetic**: Linear.app + Vercel.com style, Notion.so layout inspiration

| Principle | Implementation |
|-----------|----------------|
| **Whitespace** | Generous padding, sections breathe, no clutter |
| **Typography** | Satoshi font, large headlines, high contrast |
| **Colour** | Minimal palette—monochrome base + one accent |
| **Motion** | Subtle scroll animations, smooth transitions |
| **Imagery** | Abstract/minimal or none—typography and whitespace do the work |
| **Responsive** | Fluid scaling, feels native on every device |
| **CTAs** | Clear, singular focus per section |

### Page Structure

```
HOME
├── Hero
│   └── Headline + subhead + primary CTA (Book a call / Free audit)
│
├── Problem Statement
│   └── "AI needs foundations. Your data is scattered. We fix both."
│
├── The Offering (Better Together)
│   ├── Engineering card
│   ├── knowsee card
│   └── Bundle pricing highlight
│
├── How It Works
│   └── 3-step flow: Audit → Implement → Maintain
│
├── Industry Problems Solved
│   └── Grid/scroll of case study cards from different verticals
│
├── Differentiators
│   ├── vs Fivetran/Airbyte (flat-rate)
│   ├── vs Consultants (SLO-driven)
│   └── vs Other AI tools (privacy-first)
│
├── Free Audit CTA
│   └── "Get your Data & AI Readiness Scorecard—free"
│
├── About / Credibility
│   └── Saahil intro + LinkedIn + CopilotKit feature mention
│
└── Footer
    └── Contact, legal, socials
```

### Additional Pages (Future)

| Page | Purpose |
|------|---------|
| `/engineering` | Deep dive on engineering offering, deliverables, SLAs |
| `/knowsee` | Deep dive on AI tool, features, Secure tier |
| `/audit` | Full audit breakdown, how to book |
| `/industries` | Expanded case studies by vertical |

### Interaction Design

- **Scroll-triggered reveals**: Sections fade/slide in as you scroll
- **Sticky nav**: Minimal, appears on scroll-up, hides on scroll-down
- **Smooth scroll**: Anchor links glide, no jump
- **Hover states**: Subtle scale/shadow on cards, colour shift on CTAs
- **Mobile**: Full-width sections, stacked cards, thumb-friendly CTAs

---

## Credibility & Social Proof

### Personal Brand

- LinkedIn presence: linkedin.com/in/saahil-mehta
- Engineering expertise as differentiator from anonymous AI tools
- "Hire the person, not just the product"

### External Validation

- CopilotKit featuring knowsee as reference implementation
- Open source community adoption
- Client testimonials (to be gathered)

---

## Next Steps

1. [ ] Finalise website copy based on this strategy
2. [ ] Redesign website with Linear/Vercel/Notion aesthetic
3. [ ] Create audit scorecard template
4. [ ] Prepare case study content from past experience
5. [ ] Set up booking flow for free audits
6. [ ] Release knowsee-public with clear OSS vs paid documentation
7. [ ] Reach out to CopilotKit for promotion coordination

---

## Document History

| Date | Change |
|------|--------|
| January 2025 | Initial strategy document created |
