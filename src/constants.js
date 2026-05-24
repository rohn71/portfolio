// ─── react-icons (needed for SKILL_TILES and HANDLES) ────────────────────────
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { RiShieldKeyholeLine, RiTwitterXLine } from 'react-icons/ri';
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
} from 'react-icons/si';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const ROLES = [
  'Software Engineer',
  'Fullstack Developer',
  'React Developer',
];

export const NAME_TEXT        = 'ROHHUN LAIJU';
export const NAME_FONT        = '700 112px "Bebas Neue"';
export const NAME_LINE_HEIGHT = 96;
export const SCRAMBLE_CHARS   = '01110010 11011011 11001001 11010001 11011111 11100011';

// ─── About ────────────────────────────────────────────────────────────────────

export const PROFILE_IMAGE_PATH = '/images/profile.jpg';

export const BIO_PARAGRAPHS = [
  `Hey, I'm Rohhun. I build things on the web, mostly React, mostly at the intersection of AI and identity. I'm part of the AI Agents & Marketplace team at Ping Identity, where I went from intern to full-time engineer, and I've been figuring things out ever since.`,
  `I work across the full stack, React and JavaScript/Typescript on the frontend, Node.js on the backend. Right now I'm leaning harder into backend and AI, always looking for more to explore.`,
  `When I'm not at a keyboard, I'm on a badminton court, or out for a ride on my bike. Based in Bangalore.`,
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILL_TILES = [
  { name: 'React',         Icon: SiReact,            color: '#61dafb', url: 'https://react.dev' },
  { name: 'JavaScript',   Icon: SiJavascript,        color: '#f7df1e', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript',   Icon: SiTypescript,        color: '#3178c6', url: 'https://www.typescriptlang.org' },
  { name: 'Redux',        Icon: SiRedux,             color: '#ab7bff', url: 'https://redux.js.org' },
  { name: 'Node.js',      Icon: SiNodedotjs,         color: '#7cc26e', url: 'https://nodejs.org' },
  { name: 'Express',      Icon: SiExpress,           color: '#e8f4ff', url: 'https://expressjs.com' },
  { name: 'MongoDB',      Icon: SiMongodb,           color: '#47a248', url: 'https://www.mongodb.com' },
  { name: 'MySQL',        Icon: SiMysql,             color: '#4479a1', url: 'https://www.mysql.com' },
  { name: 'Docker',       Icon: SiDocker,            color: '#2496ed', url: 'https://www.docker.com' },
  { name: 'Java',         Icon: FaJava,              color: '#f89820', url: 'https://www.java.com' },
  { name: 'CSS3',         Icon: SiCss,               color: '#61a9ff', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'SCSS',         Icon: SiSass,              color: '#f89ec3', url: 'https://sass-lang.com' },
  { name: 'Git / GitHub', Icon: SiGithub,            color: '#e8f4ff', url: 'https://github.com' },
  { name: 'Jest',         Icon: SiJest,              color: '#d8a0ff', url: 'https://jestjs.io' },
  { name: 'IAM',          Icon: RiShieldKeyholeLine, color: '#74b7ff', url: 'https://oauth.net' },
  { name: 'Git',          Icon: SiGit,               color: '#f05133', url: 'https://git-scm.com' },
];

// ─── Resume ───────────────────────────────────────────────────────────────────

export const EXPERIENCE_TIMELINE = [
  {
    company: 'Ping Identity',
    type: 'work',
    title: 'Software Engineer II',
    period: 'January 2024 – Present',
    location: 'Bangalore, India',
    roles: [
      {
        role: 'Software Engineer II',
        period: 'April 2026 – Present',
        points: [
          'Closed a security gap in OAuth 2.0 Token Exchange by introducing an opt-in configuration flag across app-management backend and Authorization Server, enforcing group-membership policies at token issuance with supporting audit events, without new APIs or data stores.',
          'Delivered AI Agent licensing enforcement using dynamic capability checks to hide/disable unlicensed actions, plus contextual upgrade prompts and a Contact Sales CTA for upsell support.',
        ],
      },
      {
        role: 'Software Engineer I',
        period: 'June 2024 – March 2026',
        points: [
          'Co-architected and launched a new enterprise marketplace from scratch in a 4-person team, leading the React/Astro frontend and contributing to Node.js tagging and analytics pipelines.',
          'Designed and shipped a production-grade Lexical rich-text editor with dual-mode architecture (WYSIWYG + Markdown preview) and dynamic resource-upload workflows auto-configured by catalog type.',
          'Spearheaded frontend development from scratch for the AI Agents console, integrating credential-rotation pipelines within the shared platform ecosystem.',
        ],
      },
      {
        role: 'Software Engineer Intern',
        period: 'January 2024 – June 2024',
        points: [
          'Engineered comprehensive test coverage for the DaVinci API using Chai, Mocha, and Sinon, raising coverage from 23% to over 70% and significantly reducing regression risk.',
        ],
      },
    ],
    techStack: 'Docker, React, JavaScript, TypeScript, Astro, Spring Boot, OAuth 2.0, Node.js, Playwright, Jest, Lexical, Chai, Mocha, Sinon',
  },
  {
    company: 'LexisNexis Risk Solutions (HPCC Systems)',
    type: 'internship',
    title: 'Project Intern',
    period: 'September 2022 – January 2023',
    location: 'Remote',
    points: [
      'Implemented a batch image-processing library in Enterprise Control Language (ECL), enabling efficient conversion of 100,000+ images to ECL tensors for distributed neural network pipelines.',
    ],
    techStack: 'ECL, Distributed Data Processing',
  },
];

export const PROJECT_TIMELINE = [
  {
    type: 'hackathon',
    title: 'AI Form Builder — 3rd Prize, Ping Winter Hackathon 2024',
    points: [
      'Built an LLM-powered engine that interprets natural-language prompts, generates complex JSON schemas, and renders fully validated web forms in real time.',
    ],
    techStack: 'React, Generative AI',
  },
  {
    type: 'project',
    title: 'GetLance Freelance Portal',
    points: [
      'Developed a full-stack peer-to-peer campus freelancing platform with JWT authentication and Stripe API integration for secure financial transactions.',
    ],
    techStack: 'MERN Stack, Stripe',
  },
  {
    type: 'project',
    title: 'Credit Card Fraud Detection',
    points: [
      'Built a machine learning pipeline on a 32-feature dataset to classify fraudulent transactions, including EDA with SweetViz, feature engineering, SMOTE balancing, and model evaluation across Decision Tree, Gradient Boosting, and Logistic Regression.',
    ],
    techStack: 'Python, Scikit-learn, SweetViz, SMOTE',
  },
];

export const EDUCATION = {
  type: 'education',
  title: 'B.E. in Computer Science Engineering',
  institution: 'R.V. College of Engineering',
  location: 'Bengaluru, India',
  period: '2020 – 2024',
};

export const TYPE_META = {
  work:       { label: 'experience', accent: '#f2c94c' },
  internship: { label: 'experience', accent: '#f2c94c' },
  project:    { label: 'project',    accent: '#61a9ff' },
  hackathon:  { label: 'hackathon',  accent: '#56b68f' },
  education:  { label: 'education',  accent: '#ffb36b' },
};

// ─── Connect ──────────────────────────────────────────────────────────────────

export const HANDLES = [
  {
    platform: 'GitHub',
    handle:   'rohn71',
    url:      'https://github.com/rohn71',
    Icon:     FaGithub,
    note:     'code lives here',
  },
  {
    platform: 'LinkedIn',
    handle:   'rohhun-laiju',
    url:      'https://linkedin.com/in/rohhun-laiju',
    Icon:     FaLinkedin,
    note:     "let's connect",
  },
  {
    platform: 'Twitter / X',
    handle:   '@rohhunlaiju',
    url:      'https://twitter.com/rohhunlaiju',
    Icon:     RiTwitterXLine,
    note:     'occasional thoughts',
  },
  {
    platform: 'Email',
    handle:   'rohhun2000@gmail.com',
    url:      'mailto:rohhun2000@gmail.com',
    Icon:     MdOutlineEmail,
    note:     'always open',
  },
];
