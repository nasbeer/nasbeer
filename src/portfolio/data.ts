export const EMAIL = 'nazbeer.ahammed@gmail.com';

// Social links match the sameAs list in index.html's JSON-LD.
export const LINKS = {
  github: 'https://github.com/nazbeer',
  linkedin: 'https://www.linkedin.com/in/nazbeerahammed/',
  facebook: 'https://www.facebook.com/nazbeer.ahammed',
  youtube: 'https://www.youtube.com/user/nazbeerahammed',
  instagram: 'https://www.instagram.com/nasbeer.codes/',
  allProjects: 'https://github.com/nazbeer',
} as const;

export type SocialKey = 'github' | 'linkedin' | 'facebook' | 'youtube' | 'instagram';

export interface Pillar { t: string; kind: 'net' | 'code' | 'cloud'; d: string; tags: string[] }
export interface Project { n: string; m: string; h: number; d: string; tags: string[]; url?: string; demo?: boolean }
export interface Job { when: string; role: string; co: string; loc: string; now?: boolean; b: string[] }
export interface Cert { t: string; by: string; tag: string; c: string[] }

export const PILLARS: Pillar[] = [
  { t: 'AI/ML & Data Science', kind: 'net', d: 'Expert in LLMs, RAG architectures, analytics pipelines, and machine learning workflows. Experience with TensorFlow, predictive analytics, and AI-powered solutions.', tags: ['Python', 'TensorFlow', 'RAG', 'LLMs', 'OpenAI', 'scikit-learn'] },
  { t: 'Full Stack Development', kind: 'code', d: 'Building scalable web and mobile applications using React, React Native, Node.js, and Python. Strong expertise in microservices and API-driven systems.', tags: ['React', 'React Native', 'Node.js', 'Python', 'Django', 'FastAPI'] },
  { t: 'Cloud & DevOps', kind: 'cloud', d: 'Cloud computing with AWS and Azure, Docker, Kubernetes, CI/CD pipelines, and monitoring with Prometheus and Grafana. Database design and optimization.', tags: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'] },
];

export const TECH = ['React', 'React Native', 'Next.js', 'Node.js', 'Python', 'Django', 'FastAPI', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'TensorFlow', 'LLMs', 'RAG', 'Git', 'REST APIs', 'GraphQL'];

export const FEATURED: Project[] = [
  { n: 'PromptForger', m: 'PF', h: 205, d: 'Turn client briefs into landing pages and campaign assets with PromptForger. Reuse brand kits, create product ads, publish supported…', tags: ['React Native', 'React', 'Vitest', 'Node', 'Typescript', 'PostgreSQL'], url: 'https://promptforger.in' },
  { n: 'Dis Chem App', m: 'DC', h: 190, d: 'Dis-Chem Pharmacies is a major South African retail pharmacy chain specializing in health, beauty, wellness, and prescriptions.', tags: ['React Native', 'Node', 'Typescript', 'PostgreSQL', 'Redis', 'AWS'], url: 'https://www.dischem.co.za' },
  { n: 'Compass Portal - Core42 AI', m: 'C42', h: 160, d: 'Enterprise AI SaaS platform for managing AI models, subscriptions, API usage, and billing. Implemented secure authentication, usage analytics, AP…', tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker'], url: 'https://core42.ai' },
  { n: 'Outdated - Wellness App', m: 'OD', h: 262, d: 'Outdated.me is an AI-powered emotional wellness and self-growth app designed to help you heal, rebuild confidence, and move forward, one day…', tags: ['Node', 'React Native', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes'], url: 'https://outdated.me' },
];

export const PROJECTS: Project[] = [
  { n: 'AI Astraea', m: 'AA', h: 215, d: 'AI-driven platform leveraging Retrieval-Augmented Generation and autonomous agents for intelligent…', tags: ['Python', 'React', 'React Native', 'Next.js'], demo: true },
  { n: 'Compass AI Chat', m: 'CC', h: 185, d: 'Real-time AI chat interface integrated with Core42 models, supporting secure authentication, streaming…', tags: ['Python', 'React', 'TypeScript', 'Azure'], demo: true },
  { n: 'Loop360', m: '360', h: 28, d: 'Social intelligence mobile application focused on claims verification and digital trust. Features claims…', tags: ['React Native', 'Next.js', 'NestJS', 'MongoDB'] },
  { n: 'Jubna Advertising Platform', m: 'JB', h: 22, d: 'Large-scale native advertising and monetization platform with real-time analytics, campaign…', tags: ['React', 'Python', 'Node.js', 'PHP'], demo: true },
  { n: 'SureView TV', m: 'SV', h: 175, d: 'Digital media and streaming analytics platform providing content performance insights, monetization…', tags: ['React', 'Python', 'Node.js', 'PHP'], demo: true },
  { n: 'Gulfway Delivery App', m: 'GW', h: 150, d: 'React Native delivery management app with real-time order tracking, driver route optimization using Google…', tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase'] },
  { n: 'Veterinary Management System', m: 'VM', h: 210, d: 'Complete MEAN Stack veterinary management system including appointment scheduling, medical record…', tags: ['React', 'Node.js', 'MongoDB', 'Express'] },
  { n: 'Trenchbound', m: 'TB', h: 168, d: 'Gaming application which helps gamers to experience the mariana trench depth and its hidden gems', tags: ['React Native', 'AWS', 'Firebase', 'REST APIs'] },
];

export const ACCOMPLISH = [
  'Best Performer at Core42 (Dec 2024) for high-impact contributions',
  'Delivered full-featured Veterinary Management System in 2.5 months',
  'Built BizTrackPro in 1.5 months using ReactJS, Django, and Flutter',
  'Architected cloud-native microservices with Docker and Kubernetes',
  'Implemented AI/ML solutions including LLM-based features and RAG pipelines',
  'Led cross-functional engineering teams across web and mobile projects',
];

export const JOBS: Job[] = [
  { when: 'June 2024 – Present', role: 'Sr Full Stack Engineer/Developer', co: 'Core42.ai', loc: 'India (Remote)', now: true, b: [
    'Led backend development for Compass Portal using Python (FastAPI/Django) and Node.js',
    'Architected Azure SaaS Marketplace integration for subscription management',
    'Developed React Native companion app with real-time analytics and API Playground',
    'Built microservices architecture with Docker, Kubernetes, and CI/CD pipelines',
    'Implemented Prometheus + Grafana monitoring for system health'] },
  { when: 'July 2023 – February 2024', role: 'Team Lead & Senior UI/UX Developer', co: 'Gulf Way Marketing LLC', loc: 'Dubai, UAE', b: [
    'Delivered 12+ web and mobile projects using React, React Native, Node.js, Angular, and Django',
    'Built Gulfway Delivery App with real-time tracking and Google Maps SDK integration',
    'Developed Rental App with Stripe payments and booking management',
    'Created Limo Services App with real-time location tracking and in-app chat',
    'Delivered Veterinary Management System (MEAN Stack) in 2.5 months',
    'Released 8 custom WordPress websites for corporate clients'] },
  { when: 'April 2020 – February 2023', role: 'Team Lead and Data Scientist', co: 'DiGIMENA FZE', loc: 'Dubai, UAE', b: [
    'Led UI enhancement for Jubna Advertising Platform with complete UX redesign',
    'Built React Native Ad Performance Tracker App for live campaign analytics',
    'Developed Kalimad API using Django + ReactJS for engagement analytics',
    'Created Predictive Bidding Tool using Python scikit-learn for ad cost optimization',
    'Automated ad spend reports reducing reporting time by 60%'] },
  { when: 'December 2019 – April 2020', role: 'WordPress & UI Developer', co: 'TPConnects Technologies LLC', loc: 'Dubai, UAE', b: [
    'Built Flight Booking Companion App using React Native with Amadeus and NDC APIs',
    'Updated WordPress UI for five B2C airline platforms',
    'Implemented B2C flight management platforms using Angular, Node.js, and Java Spring Boot',
    'Designed REST and MVC microservices for IATA NDC API'] },
  { when: 'November 2012 – August 2019', role: 'Full Stack Developer', co: 'Expibotz Technologies Private Limited', loc: 'India', b: [
    'Developed enterprise applications using React, React Native, Python (Django/Flask), Angular, ASP.NET',
    'Built KSEB Mobile App (Kerala State Electricity Board) with secure payment gateways',
    'Created whiteboard tutoring platform with WebRTC and Socket.io',
    'Developed analytics dashboards and automated data pipelines with Python'] },
];

export const CERTS: Cert[] = [
  { t: 'Scrum Master', by: 'PMI', tag: 'Project Management', c: [] },
  { t: 'Data Science Foundation', by: 'IBM', tag: 'Data Science', c: ['Data Science'] },
  { t: 'SQL', by: 'HackerRank', tag: 'Database', c: ['Data Science', 'Programming'] },
  { t: 'CSS', by: 'HackerRank', tag: 'Frontend', c: ['Frontend'] },
  { t: 'Python', by: 'HackerRank', tag: 'Programming', c: ['Programming'] },
  { t: 'Fake News Detection with ML', by: 'Coursera Projects', tag: 'Machine Learning', c: ['Machine Learning'] },
  { t: 'Google Data Analyst Certification', by: 'Coursera', tag: 'Data Analysis', c: ['Data Science'] },
  { t: 'G Suite Admin Fundamentals', by: 'Coursera', tag: 'Administration', c: [] },
  { t: 'Deep Learning Fundamentals', by: 'SimpliLearn', tag: 'Deep Learning', c: ['Machine Learning'] },
  { t: 'Introduction to AI', by: 'SimpliLearn', tag: 'AI', c: ['Machine Learning'] },
  { t: 'React JS With Node & Express', by: 'Udemy', tag: 'Full Stack', c: ['Full Stack', 'Frontend'] },
];

export const FILTERS = ['All', 'Data Science', 'Machine Learning', 'Programming', 'Frontend', 'Full Stack'];
export const NAV: [string, string][] = [['home', 'Home'], ['about', 'About'], ['projects', 'Projects'], ['experience', 'Experience'], ['contact', 'Contact']];
export const SOCIAL: [SocialKey, string, string][] = [
  ['github', 'GitHub', 'View my projects'],
  ['linkedin', 'LinkedIn', "Let's connect professionally"],
  ['facebook', 'Facebook', 'Follow my updates'],
  ['youtube', 'YouTube', 'Watch my tutorials'],
  ['instagram', 'Instagram', 'Behind the scenes'],
];
export const SERVICES = ['Data Science', 'Machine Learning', 'Full Stack Development', 'UI/UX Design', 'Cloud Solutions'];
