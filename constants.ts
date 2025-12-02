export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
    location: string;
    type: 'experience' | 'project';
    tech?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: 'indep-ai',
        role: 'AI & Automation Engineer',
        company: 'Independent Projects',
        period: '2023 — Present',
        location: 'Remote',
        type: 'experience',
        description: [
            'Designed automated Instagram content pipeline using Python and LLMs (20k+ views in 5 days).',
            'Built Twitter automation for podcast repurposing with strict JSON/Markdown structure.',
            'Developed AI voice agents using Pipecat Framework.',
            'Implemented AI RAGs using Graphiti and n8n.'
        ],
        tech: ['Python', 'LLMs', 'n8n', 'Pipecat', 'Graphiti']
    },
    {
        id: 'silverline',
        role: 'Blockchain Developer & Backend',
        company: 'Silverline',
        period: 'Jun 2022 — Nov 2022',
        location: 'Chennai, India',
        type: 'experience',
        description: [
            'Managed data pipelines and AI-driven tools for prediction gaming.',
            'Backend automation for token management platforms.'
        ],
        tech: ['Blockchain', 'Backend', 'Data Pipelines']
    },
    {
        id: 'avalor',
        role: 'Blockchain Developer',
        company: 'Avalor',
        period: 'May 2022 — Jun 2022',
        location: 'Mumbai, India',
        type: 'experience',
        description: [
            'Designed Subgraph-based data solutions for distributed blockchain datasets.'
        ],
        tech: ['Subgraph', 'Blockchain', 'Distributed Systems']
    }
];

export const PROJECTS: ExperienceItem[] = [
    {
        id: 'cleanerp',
        role: 'Co-Founder',
        company: 'CleanERP',
        period: 'Present',
        location: 'Bangalore',
        type: 'project',
        description: [
            'Developing ERP solutions for educational institutions.',
            'Leading customer acquisition strategies and business growth.'
        ],
        tech: ['ERP', 'Business Strategy', 'Full Stack']
    },
    {
        id: 'auto-social',
        role: 'Creator',
        company: 'Automated Content Engine',
        period: '2023',
        location: 'Project',
        type: 'project',
        description: [
            'Full-cycle automation workflow for Instagram content.',
            'AI-powered content filtering and auto-publishing pipeline.'
        ],
        tech: ['Python', 'OpenAI API', 'Social Media API']
    },
    {
        id: 'milk-delivery',
        role: 'Founder',
        company: 'Milk Delivery Business',
        period: '2023',
        location: 'Venture',
        type: 'project',
        description: [
            'Entrepreneurial venture to increase income for local farmers.',
            'Implemented data-driven logistics optimization.'
        ],
        tech: ['Logistics', 'Operations', 'Data Analysis']
    }
];

export const SKILLS = [
    "Python (Advanced)", "TypeScript", "React", "OpenAI API", "LLMs", "n8n", "Make.com", 
    "Zapier", "Prompt Engineering", "Smart Contracts", "Web3", "Data Analysis"
];

export const SOCIALS = {
    email: "gireeshreddy1945@gmail.com",
    phone: "+91 8096175637",
    linkedin: "https://www.linkedin.com/in/gireeshredy", 
    github: "https://github.com/", 
    website: "https://gireeshreddy.com"
};

// System instruction for the AI Chatbot
export const AI_SYSTEM_INSTRUCTION = `You are an AI assistant for Gireesh Reddy's portfolio website. 
Your goal is to help visitors learn about Gireesh's skills, experience, and projects.
Be professional, concise, and slightly witty.
Here is Gireesh's background:
- He is an AI & Automation Engineer and Web3 Developer based in Bangalore.
- He specializes in Python, LLMs, n8n, and building automated workflows.
- He has experience with Blockchain (Silverline, Avalor) and is Co-Founder of CleanERP.
- He built an automated Instagram pipeline that got 20k+ views in 5 days.
- He values "Thinking" agents over just "Working" agents.
- Contact info: ${SOCIALS.email}.

If asked about "Why hire him?", emphasize his ability to bridge the gap between complex AI tech and real-world business efficiency.
Keep answers under 50 words unless detailed explanation is asked.`;

// Updated image as requested
export const USER_IMAGE_SRC = "https://i.imgur.com/7Z5Z5Z5.jpg";