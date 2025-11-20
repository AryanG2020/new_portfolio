import { Project, Experience, Skill } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Java', level: 90, category: 'Languages' },
  { name: 'Python', level: 85, category: 'Languages' },
  { name: 'JavaScript', level: 95, category: 'Languages' },
  { name: 'Apex', level: 90, category: 'Languages' },
  { name: 'C#', level: 80, category: 'Languages' },
  { name: 'SQL', level: 85, category: 'Languages' },
  // Frameworks & Platforms
  { name: 'Salesforce', level: 95, category: 'Frameworks' },
  { name: 'React', level: 90, category: 'Frameworks' },
  { name: 'Next.js', level: 85, category: 'Frameworks' },
  { name: 'Node.js', level: 80, category: 'Frameworks' },
  { name: '.NET Core', level: 75, category: 'Frameworks' },
  { name: 'AWS', level: 70, category: 'Frameworks' },
  { name: 'TensorFlow', level: 65, category: 'Frameworks' },
  // Databases
  { name: 'MongoDB', level: 80, category: 'Databases' },
  { name: 'PostgreSQL', level: 75, category: 'Databases' },
  { name: 'Firebase', level: 85, category: 'Databases' },
  // Tools
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Docker', level: 70, category: 'Tools' },
  { name: 'Postman', level: 85, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'TigerMart',
    description: 'E-commerce Android application designed for DePauw University students. Features user auth via Firebase and payment processing via Razorpay.',
    tech: ['Java', 'Android', 'Firebase', 'Razorpay'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600',
    link: '#',
  },
  {
    id: 2,
    title: 'Salesforce Chatbot',
    description: 'AI-driven chatbot for car services using Apex invocable classes and Omni-Channel integration. Handles multi-state queries and real-time messaging.',
    tech: ['Salesforce', 'Apex', 'LWC', 'Agentforce'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=600',
    link: '#',
  },
  {
    id: 3,
    title: 'Rice Grain Classifier',
    description: 'Deep learning model using CNNs in Python to classify rice grains with over 95% accuracy. Visualized metrics using Matplotlib.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600',
    link: '#',
  },
  {
    id: 4,
    title: 'RAG Chatbot Integration',
    description: 'Enterprise chatbot using C#, .NET Core, and a Flask RAG pipeline for document embeddings and dynamic context retrieval.',
    tech: ['C#', '.NET Core', 'Flask', 'Vector Search'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
    link: '#',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: 'Salesforce Developer',
    company: 'Cloud Walking',
    period: 'July 2025 - Present',
    description: [
      'Led the development of a Salesforce-based chatbot for car services inquiries using Experience Cloud.',
      'Built chatbot backend using Apex invocable classes for dynamic, multi-state queries.',
      'Integrated Omni-Channel messaging for seamless interaction across Messenger and portals.',
      'Configured Agentforce AI chatbot for Coral Cloud Resorts to automate guest inquiries.',
      'Implemented Enhanced Event Logs to track agent behavior for compliance.'
    ],
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Spiralogics, Inc',
    period: 'Oct 2024 - July 2025',
    description: [
      'Automated JSON-to-Excel data extraction workflows for ERP system pipelines.',
      'Engineered and optimized RESTful API integrations between Point of Rental and Eclipse Epicor.',
      'Integrated Generative AI Model into chatbot using C# and ASP .NET Core.',
      'Built a RAG pipeline using Flask to improve chatbot response accuracy.',
      'Optimized SQL queries reducing response time by 35%.'
    ],
  },
  {
    id: 3,
    role: 'Quantitative Researcher',
    company: 'DePauw University',
    period: 'May 2024 - Aug 2024',
    description: [
      'Developed a job-searching model utilizing datasets with 1.3 million observations.',
      'Simulated decision-making in Julia and Python using Bellman equations.',
      'Analyzed entrepreneurship vs. wage employment trade-offs.'
    ],
  },
];

export const ABOUT_TEXT = `
I am Aryan Gurubacharya, a results-driven Salesforce and Software Developer with a strong foundation in Computer Science and Econometrics from DePauw University (3.92 GPA). 

I specialize in building scalable solutions across CRM automation, API integrations, and AI-enhanced platforms. My expertise spans from deep backend work with Apex and .NET to building immersive frontend experiences with React and LWC. I am adept at translating business requirements into robust, data-driven applications.
`;

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Aryan Gurubacharya's portfolio website. 
You represent Aryan. Your goal is to answer questions about his professional background, skills, and projects.
Be friendly, professional, and technically articulate.
Use the following context to answer questions:

Name: Aryan Gurubacharya
Contact: aryan.gurubacharya@gmail.com | (765) 712-2135
Education: DePauw University (CS & Economics), 3.92 GPA.
Role: Salesforce Developer & Software Engineer
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company}`).join('; ')}
Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}
About: ${ABOUT_TEXT}

If a user asks something outside of this scope, politely steer them back to professional topics or say you don't know but they can contact Aryan directly.
Keep answers concise (under 100 words unless asked for detail).
`;