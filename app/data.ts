import {
  Building2,
  ChartColumn,
  DatabaseZap,
  Globe2,
  Landmark,
  Link2,
  Network,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Ecosystem", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Company Profile", href: "/company-profile" },
  { label: "Contact", href: "/contact" },
];

export const metrics = [
  { value: "$2.4B+", label: "Infrastructure Capacity", detail: "Tokenized asset support" },
  { value: "3", label: "Integrated Platforms", detail: "FuzionOS - FuzionPay - Capital" },
  { value: "18+", label: "Market Jurisdictions", detail: "Asia - Middle East - Africa" },
  { value: "99.9%", label: "Network Uptime", detail: "FuzionOS mainnet SLA" },
];

export const stackLayers: Array<{
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}> = [
  {
    eyebrow: "Blockchain & EVM Infrastructure",
    title: "FuzionOS",
    icon: Network,
    items: ["Proprietary EVM", "Permissioned networks", "Smart contract layer", "Token registry", "Sovereign / private rails"],
  },
  {
    eyebrow: "Wallet, Custody & Settlement",
    title: "FuzionPay",
    icon: WalletCards,
    items: ["MPC wallets", "HD wallet structure", "Escrow infrastructure", "Merchant settlement", "Fiat / token settlement"],
  },
  {
    eyebrow: "Tokenization, Exchange & Marketplace",
    title: "MTN  Capital",
    icon: Landmark,
    items: ["RWA tokenization", "Commodity & ETF issuance", "CEX exchange", "Secondary marketplace", "Listing & compliance desk"],
  },
];

export const capabilities: Array<{
  title: string;
  icon: LucideIcon;
  copy: string;
  tags: string[];
}> = [
  {
    title: "RWA Tokenization",
    icon: Building2,
    copy: "Enable developers, REITs and property platforms to fractionalise and tokenize real estate with full compliance and custody infrastructure.",
    tags: ["Developers", "REITs", "Property Platforms"],
  },
  {
    title: "Commodity Tokenization",
    icon: Link2,
    copy: "Tokenize physical commodities with full chain-of-custody, exchange listing and institutional settlement flows.",
    tags: ["Commodity Owners", "Traders", "Banks"],
  },
  {
    title: "Fund & ETF Tokenization",
    icon: ChartColumn,
    copy: "Issue and manage tokenized funds and ETFs with institutional-grade KYC/AML, investor onboarding and secondary market liquidity.",
    tags: ["Fund Managers", "Banks", "Asset Managers"],
  },
  {
    title: "Crypto Exchange Infrastructure",
    icon: TrendingUp,
    copy: "Deploy licensed CEX operations with deep liquidity support, MPC custody, compliance engines and fiat on/off ramp integration.",
    tags: ["Licensed Exchanges", "Brokers"],
  },
  {
    title: "Wallet & Merchant Settlement",
    icon: WalletCards,
    copy: "Enterprise-grade wallet infrastructure supporting merchants and institutional clients with multi-currency settlement rails.",
    tags: ["Merchants", "Payment Partners"],
  },
  {
    title: "Sovereign Blockchain",
    icon: Network,
    copy: "Build national or institutional-grade permissioned blockchain networks with sovereign EVM deployment and validator frameworks.",
    tags: ["Governments", "Regulators", "Public Sector"],
  },
];

export const solutionRows = [
  {
    number: "01",
    title: "Real Estate Tokenization",
    copy: "Enable property developers, REIT operators and platforms to fractionalise and digitise real estate assets.",
    textSide: "left",
    features: [
      "Property valuation support",
      "Legal structure and SPV guidance",
      "Smart contract tokenization",
      "Token issuance via MTN Capital",
      "Investor onboarding KYC/AML",
      "Secondary market liquidity",
    ],
  },
  {
    number: "02",
    title: "Commodity Tokenization",
    copy: "Tokenize physical commodities \u2014 gold, oil, agricultural products \u2014 with full chain-of-custody and institutional settlement.",
    textSide: "right",
    features: [
      "Physical commodity custody",
      "Commodity token smart contracts",
      "Supply chain registry",
      "Exchange listing",
      "Institutional investor onboarding",
      "Fiat and crypto settlement",
    ],
  },
  {
    number: "03",
    title: "Fund & ETF Tokenization",
    copy: "Issue and manage tokenized funds and ETFs with institutional-grade compliance and investor onboarding.",
    textSide: "left",
    features: [
      "Fund structure guidance",
      "NAV calculation infrastructure",
      "Tokenized unit issuance",
      "KYC/AML management",
      "Automated dividend distribution",
      "Secondary market trading",
    ],
  },
  {
    number: "04",
    title: "Crypto Exchange Infrastructure",
    copy: "Full technology stack for licensed centralised exchange operators \u2014 from matching engine to custody, compliance and fiat integration.",
    textSide: "right",
    features: [
      "High-performance matching engine",
      "MPC custody via FuzionPay",
      "Fiat on/off ramp integration",
      "KYC/AML verification",
      "Regulatory reporting",
      "Market maker tools",
    ],
  },
  {
    number: "05",
    title: "Wallet & Merchant Settlement",
    copy: "Enterprise-grade wallet infrastructure and merchant settlement rails for businesses managing digital asset payments.",
    textSide: "left",
    features: [
      "MPC and HD wallet deployment",
      "Merchant wallet setup",
      "Multi-currency settlement",
      "Escrow and conditional payments",
      "Platform settlement engine",
      "Real-time monitoring",
    ],
  },
  {
    number: "06",
    title: "Sovereign Blockchain",
    copy: "Build national or institutional-grade permissioned blockchain networks with sovereign EVM deployment.",
    textSide: "right",
    features: [
      "Sovereign EVM deployment",
      "Permissioned validator config",
      "National digital asset registry",
      "CBDC infrastructure capability",
      "Public-sector smart contracts",
      "Government system integration",
    ],
  },
] as const;

export const projectPlatforms = [
  {
    name: "FuzionOS",
    subtitle: "Sovereign EVM & Blockchain",
    description:
      "FuzionOS is the blockchain operating system powering the MTN Investments ecosystem, providing foundational infrastructure for token issuance, smart contract deployment and sovereign-grade digital rails.",
    button: "Enquire About FuzionOS",
    accent: "#004aad",
    features: [
      ["Proprietary EVM infrastructure", "Custom Ethereum Virtual Machine for regulated deployments"],
      ["Permissioned blockchain networks", "Private, consortium and sovereign-grade network configurations"],
      ["Validator network framework", "Institutional-grade consensus with active validators"],
      ["Smart contract deployment", "Audited contracts for tokenization, settlement and compliance"],
      ["Token registry", "On-chain asset registry for all tokenized instruments"],
    ],
  },
  {
    name: "FuzionPay",
    subtitle: "Digital Wallet, Custody & Settlement",
    description:
      "FuzionPay is the wallet, custody and settlement infrastructure of MTN Investments, designed to support secure digital asset payments, institutional custody flows and merchant settlements.",
    button: "Enquire About FuzionPay",
    accent: "#004aad",
    features: [
      ["MPC wallet architecture", "Multi-party computation for zero-single-point-of-failure custody"],
      ["HD wallet structure", "Hierarchical deterministic wallets for scalable account management"],
      ["Investor wallets", "Dedicated wallets with full KYC integration"],
      ["Merchant wallets", "Commercial settlement infrastructure for payment partners"],
      ["Custody wallets", "Institutional-grade cold and warm custody"],
    ],
  },
  {
    name: "MTN Capital",
    subtitle: "Tokenization, Exchange & Marketplace",
    description:
      "MTN Capital is the investment and exchange layer, enabling institutions, asset owners and fund managers to tokenize, list, trade and manage regulated digital assets across global markets.",
    button: "Enquire About MTN Capital",
    accent: "#004aad",
    features: [
      ["RWA tokenization", "Real-world asset tokenization for real estate, commodities and more"],
      ["Commodity tokenization", "Gold, oil, agricultural and natural resource tokenization"],
      ["ETF and fund tokenization", "Regulated tokenized fund issuance and management"],
      ["Primary issuance platform", "First-issuance with prospectus and disclosure management"],
      ["Secondary marketplace", "Regulated secondary trading venue for tokenized assets"],
    ],
  },
  {
    name: "FuzionBlocks",
    subtitle: "Supply Chain & Document Verification",
    description:
      "FuzionBlocks provides enterprise-grade supply chain tracking and document verification infrastructure, enabling verified trade corridors with regulator-visible proofs and bank-ready documentation.",
    button: "Enquire About FuzionBlocks",
    accent: "#008466",
    features: [
      ["Document verification", "Digital proof of authenticity for trade documents and invoices"],
      ["Supply chain tracking", "End-to-end visibility across manufacturing, logistics and delivery"],
      ["Trade corridor integration", "Cross-border trade facilitation with verified exporter/importer profiles"],
      ["Bank integration layer", "LC facilitation and financing documentation for financial institutions"],
      ["Regulator visibility", "Transparent audit trail for customs, tax authorities and regulators"],
    ],
  },
  {
    name: "E-invoicing",
    subtitle: "Digital Invoice Management & Compliance",
    description:
      "E-invoicing platform provides government-compliant digital invoicing infrastructure with real-time tax reporting, fraud prevention and seamless integration with accounting systems.",
    button: "Enquire About E-invoicing",
    accent: "#004aad",
    features: [
      ["Tax-compliant invoicing", "Jurisdiction-specific e-invoice formats and regulatory compliance"],
      ["Real-time tax reporting", "Automated VAT/GST reporting to tax authorities"],
      ["Invoice verification", "Digital signatures and cryptographic proofs for authenticity"],
      ["ERP integration", "Seamless connection to SAP, Oracle, QuickBooks and local systems"],
      ["Multi-currency support", "Cross-border invoicing with automatic currency conversion"],
    ],
  },
  {
    name: "Gold/Mining Trading Solution",
    subtitle: "Precious Metals & Mining Trade Platform",
    description:
      "Specialized trading infrastructure for gold, precious metals and mining commodities, providing custody verification, chain-of-custody tracking and institutional settlement for physical commodity trades.",
    button: "Enquire About Gold/Mining Trading Solution",
    accent: "#004aad",
    features: [
      ["Physical commodity custody", "Verified storage and vault integration for precious metals"],
      ["Assay verification", "Digital certificates for purity, weight and authenticity"],
      ["Chain-of-custody tracking", "Immutable record from mine to vault to final delivery"],
      ["Trade matching", "Buyer-seller matching for bulk commodity transactions"],
      ["Price discovery", "Real-time market pricing and settlement rate calculation"],
    ],
  },
  {
    name: "Inventory Tracking Solutions",
    subtitle: "Real-time Asset & Inventory Management",
    description:
      "Enterprise inventory tracking platform with IoT integration, real-time visibility and automated reconciliation, designed for warehouses, manufacturers and logistics operators.",
    button: "Enquire About Inventory Tracking Solutions",
    accent: "#004aad",
    features: [
      ["Real-time visibility", "Live tracking of inventory across multiple locations and warehouses"],
      ["IoT sensor integration", "Temperature, humidity and location monitoring for sensitive goods"],
      ["Automated reconciliation", "Physical count verification and discrepancy detection"],
      ["Multi-location management", "Centralized control across warehouses, distribution centers and stores"],
      ["FIFO/LIFO tracking", "Batch and serial number tracking for compliance and quality control"],
    ],
  },
] as const;

export const companyProfiles = [
  {
    name: "MTN Asset Management",
    description: "Asset management, investment products, and portfolio structuring.",
  },
  {
    name: "Metal Mining Pvt Ltd",
    description: "Mining and metals project origination and execution vehicles.",
  },
  {
    name: "Unicore Supplies Pvt Ltd",
    description: "Supply, trade, and commodity procurement channels.",
  },
  {
    name: "PropStake.ai LLP",
    description: "RWA tokenization and digital investment platform heritage.",
  },
  {
    name: "Technofuzion Technologies",
    description: "Technology development house behind FuzionOS, FuzionBlocks, and the core product stack.",
  },
] as const;

export const regulatedActors = [
  "Financial institutions",
  "Government-backed programs",
  "Asset managers",
  "Commodity owners",
  "Exchange operators",
];

export const trustControls = [
  { title: "Compliance", icon: ShieldCheck, copy: "KYC, AML and permissioned access." },
  { title: "Token registry", icon: DatabaseZap, copy: "Issuance records and asset rules." },
  { title: "Market access", icon: Globe2, copy: "Cross-border deployment model." },
];

export const marketRails = [
  { value: "2.4B+", label: "Underbanked Adults", detail: "Target addressable market" },
  { value: "$18T", label: "RWA Market by 2030", detail: "Tokenized asset projection" },
  { value: "40+", label: "Active Regulators", detail: "Developing DLT frameworks" },
  { value: "3x", label: "Faster Settlement", detail: "vs. traditional rails" },
];

export const projects = [
  {
    title: "FuzionPay",
    tag: "Settlement",
    stage: "Operating layer",
    focus: "Wallets, custody, escrow and merchant payment infrastructure.",
  },
  {
    title: "MTN Capital",
    tag: "Markets",
    stage: "Capital layer",
    focus: "Tokenized issuance, exchange operations and structured products.",
  },
  {
    title: "PropStake.ai",
    tag: "Real estate",
    stage: "RWA platform",
    focus: "Digital investment workflows for real estate-backed opportunities.",
  },
  {
    title: "E-Banking",
    tag: "Financial rails",
    stage: "Banking interface",
    focus: "Account, compliance and money movement layers for digital finance.",
  },
  {
    title: "Gold Mining Trading Solution",
    tag: "Commodities",
    stage: "Commodity market",
    focus: "Sourcing, verification and marketplace flows for metals programs.",
  },
  {
    title: "Inventory Tracking Solution",
    tag: "Operations",
    stage: "Traceability",
    focus: "Multi-location inventory controls with reconciliation and visibility.",
  },
];

export const companies = companyProfiles.map((company) => company.name);

export const contactTracks = [
  "Tokenize an asset",
  "Launch wallet rails",
  "Deploy exchange infrastructure",
  "Build a private EVM network",
];
