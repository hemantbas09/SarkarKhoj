import type { Dictionary } from './types'

export const en: Dictionary = {
  header: {
    title: 'SarkarWeb',
    subtitle: 'नेपाल सरकार वेबसाइट निर्देशिका',
    navHome: 'Home',
    navAllCategories: 'All Categories',
    langToggleAria: 'Switch language',
  },
  hero: {
    badge: 'Official Directory • नेपाल सरकार',
    heading: 'Find Nepal Government Websites Easily',
    subheading:
      'Find official websites of Nepal’s government offices and organizations, all in one place.',
    searchPlaceholder:
      'Search government websites by name, department, or keyword...',
    popularSearchesLabel: 'Popular searches:',
    quickChips: [
      'Finance',
      'Home Affairs',
      'Passport',
      'Inland Revenue',
      'Education',
      'Foreign Affairs',
      'Health',
      'Hydropower',
    ],
    noResults: (query) => `No verified portals found matching “${query}”.`,
  },
  essential: {
    eyebrow: 'Fast Direct Access',
    title: 'Essential Government Portals',
    description:
      'Primary executive points of contact, central ministries, and critical citizen registration services.',
    visit: 'Visit',
    portalDescriptions: {
      'opmcm.gov.np':
        'Apex executive body overseeing federal policies, governance directives, and cabinet actions.',
      'moha.gov.np':
        'Internal security, national emergency relief, district administration, and citizenship.',
      'ird.gov.np':
        'Taxpayer registration, PAN filing, VAT assessments, and online corporate and individual revenue services.',
      'nepalpassport.gov.np':
        'Official electronic passport issuance, pre-enrollment booking system, and verification services.',
    },
  },
  banner: {
    eyebrow: 'Singha Durbar Secretariat',
    title: 'Connecting citizens to authenticated federal governance',
    description:
      'Direct navigation across all 7 Provinces, 753 Municipalities, and 22 Ministries under the Digital Nepal Framework.',
  },
  categoriesSection: {
    eyebrow: 'Directory Taxonomy',
    title: 'Browse by Government Category',
    description:
      'Access verified public portals categorized by administrative branch, constitutional authority, and territorial governance.',
    explorePortals: 'Explore portals',
    cards: {
      ministries: {
        count: '22 Ministries',
        title: 'Ministries',
        description:
          'Central executive policy portfolios including Finance, Foreign Affairs, Health, and Home.',
      },
      departments: {
        count: '54+ Line Depts',
        title: 'Departments',
        description:
          'Specialized administrative and execution bodies executing public services, licensing, and records.',
      },
      commissions: {
        count: '12 Commissions',
        title: 'Commissions',
        description:
          'Constitutional, oversight, and statutory regulatory bodies maintaining institutional integrity.',
      },
      'provincial-governments': {
        count: '7 Provinces',
        title: 'Provincial Governments',
        description:
          'Koshi, Madhesh, Bagmati, Gandaki, Lumbini, Karnali, and Sudurpashchim state assemblies.',
      },
      'local-governments': {
        count: '753 Municipalities',
        title: 'Local Governments',
        description:
          'Metropolitan cities, sub-metropolises, municipalities, and Gaunpalikas providing civic ward services.',
      },
      universities: {
        count: '14 Universities',
        title: 'Universities',
        description:
          'Chartered national universities including Tribhuvan University, Kathmandu University, and regional academies.',
      },
      'public-institutions': {
        count: '40+ Corporations',
        title: 'Public Institutions',
        description:
          'Public sector enterprises, civil aviation, electricity authorities (NEA), and national communication boards.',
      },
      'constitutional-bodies': {
        count: '9 Bodies',
        title: 'Constitutional Bodies',
        description:
          'Supreme Court, Election Commission, CIAA, Auditor General, and National Human Rights Commission.',
      },
    },
  },
  relatedBranches: {
    eyebrow: 'Government Hierarchy',
    title: 'Explore Related Branches & Entities',
    subtitle: 'Connecting all executive levels under the Constitution of Nepal',
    countLabel: '3 Categories',
    items: [
      {
        title: 'Departments',
        count: '54 Line Agencies',
        description:
          'Central operational line agencies delivering specialized civil administration and enforcement.',
      },
      {
        title: 'Commissions',
        count: '12 Official Bodies',
        description:
          'Statutory regulatory commissions ensuring public compliance, anti-corruption, and inclusion.',
      },
      {
        title: 'Constitutional Entities',
        count: '9 Constitutional Bodies',
        description:
          'Independent oversight entities mandated directly by Part 21–27 of the Constitution.',
      },
    ],
  },
  trust: {
    eyebrow: 'Official Domain Security Protocol',
    standards: 'NITC Standards',
    title: 'Citizen Security & Official Web Standards',
    description:
      'All legitimate federal, provincial, and local government platforms operate exclusively on verified .gov.np or educational .edu.np second-level domains with Transport Layer Security (TLS/HTTPS). Always verify the URL in your browser’s address bar before providing personal identity information.',
    features: [
      { title: 'DNSSEC Verified', subtitle: 'National IT Center Host' },
      { title: 'Spam & Phishing Shield', subtitle: 'Zero-trust verified registry' },
    ],
  },
  footer: {
    copyright: '© 2025 Government of Nepal. All Rights Reserved.',
    directoryLabel: 'Official Public Directory',
    backToTop: 'Back to top',
  },
  bottomNav: {
    home: 'Home',
    ministries: 'Ministries',
    departments: 'Departments',
    'provincial-governments': 'Provinces',
    'constitutional-bodies': 'Bodies',
  },
  search: {
    breadcrumbDirectory: 'Directory',
    breadcrumbResults: 'Search Results',
    visitLabel: 'Visit Website',
    searchPlaceholder: 'Search government portals…',
    pagination: {
      showing: (from, to, total) => `Showing ${from}–${to} of ${total}`,
      prev: 'Previous page',
      next: 'Next page',
    },
    summary: {
      allCategories: 'All Categories',
      matchesNote:
        'Matches found in Organization Name, Category, and Description',
      resultsFor: (count, query) => `${count} Results for “${query}”`,
    },
    emptySearch: {
      title: 'Search the government directory',
      text: 'Type an organization name, department, or keyword above — or try one of these:',
      suggestions: ['finance', 'passport', 'tax', 'university', 'kathmandu', 'election'],
    },
    noResults: {
      title: (query) => `No results for “${query}”`,
      text: 'Check the spelling, use a shorter keyword, or try one of these searches:',
      suggestions: ['finance', 'passport', 'tax', 'university', 'kathmandu', 'election'],
    },
    insight: {
      title: 'Search Insight',
      text: 'Searching for tax payments, VAT declarations, or customs duty? All federal monetary transactions are routed via the Central Financial System through verified .gov.np portals.',
      rows: [
        { label: 'Official TLD', value: '.gov.np' },
        { label: 'Security Standard', value: 'SSL 256-bit' },
      ],
    },
    notFound: {
      title: "Can't find what you're looking for?",
      description:
        'Browse all civic categories or view the complete alphabetical index of Nepal government services and autonomous agencies.',
      button: 'Browse All Categories',
      secondaryLink: 'View A–Z Index',
    },
    relatedServices: {
      title: 'Related Finance Services',
      items: [
        { label: 'PAN Registration' },
        { label: 'Tax Clearance Certificate' },
        { label: 'Federal Budget Speech & Data' },
        { label: 'Treasury Revenue Daily Status' },
      ],
    },
  },
  categoryPage: {
    breadcrumbHome: 'Home',
    breadcrumbCategories: 'Categories',
    common: {
      visitWebsite: 'Visit Website',
      verified: 'Verified',
      verifiedGovNp: 'Verified .gov.np',
      officialDomain: 'Official Domain',
      all: 'All',
      showing: 'Showing:',
      active: 'Active',
      resetFilters: 'Reset Directory Filters',
      statNitc: 'NITC Tier-III Data Center Hosted',
    },
    categories: {
      ministries: {
        heroTitle: 'Ministries of Nepal',
        description:
          'Explore official web portals of the federal executive ministries of the Government of Nepal.',
        breadcrumbCurrent: 'Ministries',
        heroBadge: 'Federal Executive Portals',
        location: 'Singha Durbar, Kathmandu',
        stat1: '22 Verified Federal Ministries',
        statValidation: 'Strict .gov.np Validation',
        searchPlaceholder:
          'Search by ministry name, portfolio, or .gov.np domain...',
        filterLabel: 'Filter Sector:',
        chips: [
          { label: 'All', filter: 'all' },
          { label: 'Finance', filter: 'economy' },
          { label: 'Security & Home', filter: 'security' },
          { label: 'Health', filter: 'health' },
          { label: 'Energy & Water', filter: 'infrastructure' },
        ],
        pills: [
          { label: 'All', count: 22, filter: 'all' },
          { label: 'Economy & Finance', filter: 'economy' },
          { label: 'Security & Home', filter: 'security' },
          { label: 'Diplomacy & Foreign', filter: 'diplomacy' },
          { label: 'Health & Population', filter: 'health' },
          { label: 'Infrastructure & Energy', filter: 'infrastructure' },
          { label: 'Education & Science', filter: 'education' },
        ],
        singhaDurbar: {
          badge: 'Singha Durbar Secretariat',
          text: 'Central seat of federal ministries coordinating national policy and governance.',
        },
        emptyTitle: 'No matching federal ministries found',
        emptyDescription:
          'Try checking for spelling variations, portfolio acronyms (e.g. MOF, MOHA), or clear the sector filter chips.',
        trustTitle: 'Official .gov.np TLD Standard',
        trustText:
          'All listed ministerial links are authenticated and under the National Information Technology Center (NITC) root domain.',
      },
      departments: {
        heroTitle: 'Departments of Nepal',
        description:
          'Specialized administrative and execution bodies delivering public services, licensing, and records.',
        breadcrumbCurrent: 'Departments',
        heroBadge: 'Federal Line Agencies',
        location: 'Kathmandu, Nepal',
        stat1: '54 Verified Line Agencies',
        statValidation: 'Strict .gov.np Validation',
        searchPlaceholder:
          'Search by department name, portfolio, or .gov.np domain...',
        filterLabel: 'Filter Sector:',
        chips: [
          { label: 'All', filter: 'all' },
          { label: 'Revenue', filter: 'revenue' },
          { label: 'Transport', filter: 'transport' },
          { label: 'Agriculture', filter: 'agriculture' },
        ],
        pills: [
          { label: 'All', count: 54, filter: 'all' },
          { label: 'Revenue & Tax', filter: 'revenue' },
          { label: 'Transport & Infrastructure', filter: 'transport' },
          { label: 'Agriculture & Food', filter: 'agriculture' },
        ],
        emptyTitle: 'No matching departments found',
        emptyDescription: 'Try checking the spelling or clear the sector filter chips.',
        trustTitle: 'Official .gov.np TLD Standard',
        trustText:
          'All listed departmental links are authenticated and under the National Information Technology Center (NITC) root domain.',
      },
      commissions: {
        heroTitle: 'Commissions of Nepal',
        description:
          'Constitutional, oversight, and statutory regulatory bodies maintaining institutional integrity.',
        breadcrumbCurrent: 'Commissions',
        heroBadge: 'Statutory Regulatory Bodies',
        location: 'Kathmandu, Nepal',
        stat1: '12 Official Bodies',
        statValidation: 'Strict .gov.np Validation',
        searchPlaceholder:
          'Search by commission name, mandate, or .gov.np domain...',
        filterLabel: 'Filter Type:',
        chips: [
          { label: 'All', filter: 'all' },
          { label: 'Anti-Corruption', filter: 'anti-corruption' },
          { label: 'Human Rights', filter: 'human-rights' },
        ],
        pills: [
          { label: 'All', count: 12, filter: 'all' },
          { label: 'Anti-Corruption', filter: 'anti-corruption' },
          { label: 'Human Rights', filter: 'human-rights' },
          { label: 'Public Service', filter: 'public-service' },
        ],
        emptyTitle: 'No matching commissions found',
        emptyDescription: 'Try checking the spelling or clear the filter chips.',
        trustTitle: 'Official .gov.np TLD Standard',
        trustText:
          'All listed commission links are authenticated and under the National Information Technology Center (NITC) root domain.',
      },
      'provincial-governments': {
        heroTitle: 'Provincial Governments',
        description:
          'Koshi, Madhesh, Bagmati, Gandaki, Lumbini, Karnali, and Sudurpashchim state assemblies.',
        breadcrumbCurrent: 'Provincial Governments',
        heroBadge: 'Sub-National Governance',
        location: '7 Provinces, Nepal',
        stat1: '7 Provincial Assemblies',
        statValidation: 'Strict .gov.np Validation',
        searchPlaceholder: 'Search by province name or .gov.np domain...',
        filterLabel: 'Filter Region:',
        chips: [
          { label: 'All', filter: 'all' },
          { label: 'East', filter: 'east' },
          { label: 'West', filter: 'west' },
        ],
        pills: [
          { label: 'All', count: 7, filter: 'all' },
          { label: 'Eastern', filter: 'east' },
          { label: 'Central', filter: 'central' },
          { label: 'Western', filter: 'west' },
        ],
        emptyTitle: 'No matching provinces found',
        emptyDescription: 'Try checking the spelling or clear the filter chips.',
        trustTitle: 'Official .gov.np TLD Standard',
        trustText:
          'All listed provincial links are authenticated and under the National Information Technology Center (NITC) root domain.',
      },
      'local-governments': {
        heroTitle: 'Local Governments',
        description:
          'Metropolitan cities, sub-metropolises, municipalities, and Gaunpalikas providing civic ward services.',
        breadcrumbCurrent: 'Local Governments',
        heroBadge: 'Municipal Governance',
        location: '753 Local Bodies',
        stat1: '753 Local Bodies',
        statValidation: 'Strict .gov.np Validation',
        searchPlaceholder: 'Search by municipality or .gov.np domain...',
        filterLabel: 'Filter Type:',
        chips: [
          { label: 'All', filter: 'all' },
          { label: 'Metropolitan', filter: 'metropolitan' },
          { label: 'Sub-Metropolitan', filter: 'sub-metropolitan' },
          { label: 'Municipality', filter: 'municipality' },
          { label: 'Gaunpalika', filter: 'gaunpalika' },
        ],
        pills: [
          { label: 'All', count: 753, filter: 'all' },
          { label: 'Metropolitan Cities', count: 6, filter: 'metropolitan' },
          { label: 'Sub-Metropolitan Cities', count: 11, filter: 'sub-metropolitan' },
          { label: 'Municipalities', count: 275, filter: 'municipality' },
          { label: 'Gaunpalikas', count: 461, filter: 'gaunpalika' },
        ],
        regionFilter: { allProvinces: 'All Pradesh', allDistricts: 'All Districts' },
        emptyTitle: 'No matching local governments found',
        emptyDescription: 'Try checking the spelling or clear the filter chips.',
        trustTitle: 'Official .gov.np TLD Standard',
        trustText:
          'All listed local government links are authenticated and under the National Information Technology Center (NITC) root domain.',
      },
      universities: {
        heroTitle: 'National Universities',
        description:
          'Chartered national universities including Tribhuvan University, Kathmandu University, and regional academies.',
        breadcrumbCurrent: 'Universities',
        heroBadge: 'Higher Education',
        location: '21 Universities',
        stat1: '21 National Universities',
        statValidation: 'Strict .edu.np Validation',
        searchPlaceholder: 'Search by university name or .edu.np domain...',
        filterLabel: 'Filter Region:',
        chips: [
          { label: 'All', filter: 'all' },
          { label: 'Central', filter: 'central' },
          { label: 'Eastern', filter: 'eastern' },
          { label: 'Western', filter: 'western' },
        ],
        pills: [
          { label: 'All', count: 21, filter: 'all' },
          { label: 'Central', filter: 'central' },
          { label: 'Eastern', filter: 'eastern' },
          { label: 'Western', filter: 'western' },
        ],
        emptyTitle: 'No matching universities found',
        emptyDescription: 'Try checking the spelling or clear the filter chips.',
        trustTitle: 'Official .edu.np TLD Standard',
        trustText:
          'All listed university links are authenticated and under the National Information Technology Center (NITC) root domain.',
      },
      'public-institutions': {
        heroTitle: 'Public Institutions',
        description:
          'Public sector enterprises, civil aviation, electricity authorities (NEA), and national communication boards.',
        breadcrumbCurrent: 'Public Institutions',
        heroBadge: 'Public Sector Enterprises',
        location: '40+ Corporations',
        stat1: '40+ Public Enterprises',
        statValidation: 'Strict .gov.np Validation',
        searchPlaceholder: 'Search by institution name or .gov.np domain...',
        filterLabel: 'Filter Sector:',
        chips: [
          { label: 'All', filter: 'all' },
          { label: 'Energy', filter: 'energy' },
          { label: 'Aviation', filter: 'aviation' },
        ],
        pills: [
          { label: 'All', count: 40, filter: 'all' },
          { label: 'Energy & Power', filter: 'energy' },
          { label: 'Aviation & Transport', filter: 'aviation' },
          { label: 'Communication', filter: 'communication' },
        ],
        emptyTitle: 'No matching institutions found',
        emptyDescription: 'Try checking the spelling or clear the filter chips.',
        trustTitle: 'Official .gov.np TLD Standard',
        trustText:
          'All listed institutional links are authenticated and under the National Information Technology Center (NITC) root domain.',
      },
      'constitutional-bodies': {
        heroTitle: 'Constitutional Bodies',
        description:
          'Supreme Court, Election Commission, CIAA, Auditor General, and National Human Rights Commission.',
        breadcrumbCurrent: 'Constitutional Bodies',
        heroBadge: 'Constitutional Authorities',
        location: 'Kathmandu, Nepal',
        stat1: '9 Constitutional Bodies',
        statValidation: 'Strict .gov.np Validation',
        searchPlaceholder: 'Search by body name, mandate, or .gov.np domain...',
        filterLabel: 'Filter Type:',
        chips: [
          { label: 'All', filter: 'all' },
          { label: 'Judiciary', filter: 'judiciary' },
          { label: 'Election', filter: 'election' },
        ],
        pills: [
          { label: 'All', count: 9, filter: 'all' },
          { label: 'Judiciary', filter: 'judiciary' },
          { label: 'Election', filter: 'election' },
          { label: 'Oversight', filter: 'oversight' },
        ],
        emptyTitle: 'No matching constitutional bodies found',
        emptyDescription: 'Try checking the spelling or clear the filter chips.',
        trustTitle: 'Official .gov.np TLD Standard',
        trustText:
          'All listed constitutional body links are authenticated and under the National Information Technology Center (NITC) root domain.',
      },
    },
  },
  sectors: {
    'Economic Core': 'Economic Core',
    'Public Security': 'Public Security',
    'Diplomacy & Treaties': 'Diplomacy & Treaties',
    'Public Healthcare': 'Public Healthcare',
    'Energy & Water': 'Energy & Water',
    'Education & R&D': 'Education & R&D',
    'Civil Service & Local': 'Civil Service & Local',
    'Digital Governance': 'Digital Governance',
    'Heritage & Aviation': 'Heritage & Aviation',
    'Revenue & Tax': 'Revenue & Tax',
    'Transport & Infrastructure': 'Transport & Infrastructure',
    'Agriculture & Food': 'Agriculture & Food',
    'Anti-Corruption': 'Anti-Corruption',
    'Human Rights': 'Human Rights',
    'Public Service': 'Public Service',
    'Judiciary': 'Judiciary',
    Election: 'Election',
    Oversight: 'Oversight',
    'Eastern Nepal': 'Eastern Nepal',
    'Central Nepal': 'Central Nepal',
    'Western Nepal': 'Western Nepal',
    'Metropolitan City': 'Metropolitan City',
    'Sub-Metropolitan City': 'Sub-Metropolitan City',
    Municipality: 'Municipality',
    'Rural Municipality (Gaunpalika)': 'Rural Municipality (Gaunpalika)',
    'Energy & Power': 'Energy & Power',
    'Aviation & Transport': 'Aviation & Transport',
    Communication: 'Communication',
    'Public Banking': 'Public Banking',
  },
  descriptions: {
    byId: {
      'mof.gov.np':
        "Responsible for financial management, national budget formulation, macroeconomic policy, public debt strategy, customs administration, and inland revenue collection.",
      'moha.gov.np':
        'Responsible for internal security, public order, immigration and border control, national disaster risk mitigation, citizenship issuance, and civil administration coordination.',
      'mofa.gov.np':
        "Formulates and executes Nepal's sovereign foreign policy, oversees diplomatic bilateral and multilateral relations, manages global missions, and governs consular passport affairs.",
      'mohp.gov.np':
        'Leads national healthcare delivery, public health standards, immunization drives, disease prevention protocols, pharmaceutical regulations, and tertiary hospital governance.',
      'moest.gov.np':
        'Oversees the national school curriculum, university grants, technical and vocational training, scientific research councils, and national scholarship certifications.',
      'moewri.gov.np':
        'Directs hydroelectric power plant generation, national power transmission grids, trans-boundary river resources, and agricultural irrigation infrastructure development.',
      'mocit.gov.np':
        'Leads national telecommunications expansion, digital public infrastructure (DPI), broadband networks, postal networks, cyber security directives, and broadcast media compliance.',
      'tourism.gov.np':
        'Promotes sustainable tourism, conserves UNESCO world heritage monuments, regulates national airspace, and expands domestic and international civil airports across Nepal.',
      'mofaga.gov.np':
        'Acts as the apex agency coordinating federal, provincial, and local levels of government, overseeing civil service deployment and institutional capacity across all 753 local bodies.',
      'ird.gov.np':
        'Department under the Ministry of Finance overseeing taxation, VAT, income tax assessments, and tax compliance across Nepal.',
      'customs.gov.np':
        'Handles import and export customs clearance, duty collection, and trade facilitation at all national border points.',
      'dotm.gov.np':
        'Regulates road transport, vehicle registration, driver licensing, and road safety standards across Nepal.',
      'doa.gov.np':
        'Promotes agricultural development, food security, crop research, and rural extension services nationwide.',
      'fcgo.gov.np':
        'Main government agency responsible for treasury operations, government accounting, and public financial reporting. Hosts the TSA (Treasury Single Account) system.',
      'ciaa.gov.np':
        'Apex anti-corruption body investigating abuse of authority, embezzlement, and corruption in public offices.',
      'nhrc.gov.np':
        'Protects and promotes human rights, investigates violations, and recommends policy reforms for inclusion.',
      'psc.gov.np':
        'Conducts recruitment, selection, and promotion for civil service positions across all government levels.',
      'koshi.gov.np':
        'Official portal of Koshi Province, the easternmost province, covering assembly, executive, and provincial services.',
      'bagmati.gov.np':
        'Official portal of Bagmati Province, home to the capital Kathmandu, covering provincial governance and services.',
      'karnali.gov.np':
        'Official portal of Karnali Province, the westernmost and most remote province, covering provincial governance.',
      'tu.edu.np':
        "Nepal's oldest and largest university, established in 1959 in Kirtipur, Kathmandu.",
      'ku.edu.np': 'Autonomous public university in Dhulikhel, established in 1991.',
      'purbuni.edu.np':
        'Federal university based in Sundar Haraicha (Gothgaun), Koshi Province.',
      'pu.edu.np': 'Federal university based in Pokhara, established in 1997.',
      'fwu.edu.np':
        'Federal university in Bhimdatta (Mahendranagar), Kanchanpur, established in 2010.',
      'mwu.edu.np':
        'Federal university in Birendranagar, Surkhet, established in 2010.',
      'rju.edu.np': 'Federal university in Janakpur, established in 2017.',
      'unepal.edu.np':
        'Public university established by the University of Nepal Act 2024 (Gaindakot).',
      'nou.edu.np':
        'Distance-learning public university in Lalitpur, established in 2016.',
      'afu.edu.np':
        'Federal university in Rampur, Chitwan, focused on agriculture and forestry.',
      'mbust.edu.np':
        'Science and technology university in Chitlang, Makwanpur, established in 2022.',
      'nsu.edu.np':
        'Sanskrit university (formerly Mahendra Sanskrit University), Dang, established in 1986.',
      'lbu.edu.np':
        'Buddhist studies university in Rupandehi, established in 2004.',
      'dcuhs.edu.np': 'Health sciences university in Geta, Kailali.',
      'yogmayaau.edu.np': 'Ayurveda university in Arun Valley, Sankhuwasabha.',
      'mtu.edu.np':
        'Provincial technical university in Budiganga, Morang, established in 2019.',
      'gandakiuniversity.edu.np':
        'Provincial university in Pokhara, established in 2019.',
      'mau.edu.np': 'Provincial agricultural university in Rajbiraj, Saptari.',
      'madheshuniversity.edu.np':
        'Provincial university in Birgunj, established in 2022.',
      'ltu.edu.np': 'Provincial technological university in Khajura, Banke.',
      'bagmatiuniversity.edu.np':
        'Provincial university in Hetauda, established in 2024.',
      'nea.gov.np':
        'State-owned utility responsible for generation, transmission, and distribution of electricity across Nepal.',
      'caan.gov.np':
        'Regulates civil aviation, air traffic control, airport operations, and aviation safety standards in Nepal.',
      'ntc.gov.np':
        'State-owned telecommunications provider delivering mobile, fixed-line, and internet services nationwide.',
      'rbb.com.np':
        'Wholly state-owned public commercial bank delivering retail and developmental finance services nationwide. Disburses state pensions, subsidies, and civic guarantees.',
      'sc.gov.np':
        'Highest court of justice in Nepal, interpreting the Constitution and delivering final appellate judgments.',
      'ecn.gov.np':
        'Conducts national and local elections, manages voter registration, and ensures democratic electoral processes.',
      'oag.gov.np':
        'Conducts financial audits of federal, provincial, and local governments to ensure accountability and transparency.',
      'nrrfc.gov.np':
        'Constitutional commission determining the distribution of revenue and fiscal equalization grants among federal, provincial, and local levels of governance under the Constitution of Nepal.',
    },
    localTemplate: (name, district, province) =>
      `Official portal of ${name} in ${district} District, ${province} Province, covering civic services, ward administration, and local governance.`,
  },
}
