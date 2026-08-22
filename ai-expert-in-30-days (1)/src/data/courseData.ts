import { CourseSpec, ModuleItem, LearningStep, CareerRole, StudentOutcome, FAQItem } from '../types';

export const PROGRAM_SPECS: CourseSpec[] = [
  {
    label: 'Course Duration',
    value: '30 Days',
    subtext: 'Intensive, structured step-by-step track',
    iconName: 'Calendar'
  },
  {
    label: 'Class Mode',
    value: 'WhatsApp + LMS + Live Sessions',
    subtext: 'Hybrid continuous learning model',
    iconName: 'Layers'
  },
  {
    label: 'Live Sessions',
    value: '2 Sessions / Week',
    subtext: 'Interactive live workshops with instructors',
    iconName: 'Video'
  },
  {
    label: 'Live Session Duration',
    value: '2.5 Hours / Session',
    subtext: 'Hands-on practical teardowns & live builds',
    iconName: 'Clock'
  },
  {
    label: 'Total Live Training',
    value: '10 Hours',
    subtext: 'High-density live guidance across 30 days',
    iconName: 'Sparkles'
  },
  {
    label: 'Recorded Learning',
    value: 'Structured LMS Resources',
    subtext: 'Curated tutorials & Academy instructional content',
    iconName: 'BookOpen'
  },
  {
    label: 'Mentoring',
    value: 'WhatsApp Mentoring & Doubt Clearance',
    subtext: 'Direct feedback, daily guidance & review',
    iconName: 'MessageSquare'
  },
  {
    label: 'Practical Learning',
    value: 'Assignments & Final Capstone Project',
    subtext: 'Build real digital assets and a launched business',
    iconName: 'Trophy'
  }
];

export const LEARNING_FLOW_STEPS: LearningStep[] = [
  {
    step: 1,
    action: 'WATCH',
    subtitle: 'Digest Structured Content',
    description: 'Access curated Academy lessons and deep-dive video masterclasses on the LMS portal at your own pace.',
    icon: 'PlayCircle'
  },
  {
    step: 2,
    action: 'LEARN',
    subtitle: 'Attend Live Teardowns',
    description: 'Participate in twice-weekly 2.5-hour live sessions for real-time breakdowns, advanced workflows, and live tool demos.',
    icon: 'Radio'
  },
  {
    step: 3,
    action: 'IMPLEMENT',
    subtitle: 'Create Real Assets',
    description: 'Put theory into action immediately by crafting graphics, prompt libraries, video reels, websites, and sales funnels.',
    icon: 'Cpu'
  },
  {
    step: 4,
    action: 'ASK',
    subtitle: 'Instant WhatsApp Group Access',
    description: 'Post questions, roadblocks, and drafts inside the private WhatsApp community whenever you get stuck.',
    icon: 'HelpCircle'
  },
  {
    step: 5,
    action: 'GET GUIDANCE',
    subtitle: 'Direct Mentor Reviews',
    description: 'Receive 1-on-1 critique and actionable advice from veteran instructors to polish your prompts and creatives.',
    icon: 'Compass'
  },
  {
    step: 6,
    action: 'IMPROVE',
    subtitle: 'Iterate & Refine Quality',
    description: 'Upgrade your work to commercial studio standards based on mentor feedback and live session reviews.',
    icon: 'TrendingUp'
  },
  {
    step: 7,
    action: 'BUILD',
    subtitle: 'Deploy Capstone Business',
    description: 'Combine all 12 modules into a fully launched, income-ready digital project, product, or freelance agency offer.',
    icon: 'Rocket'
  }
];

export const COURSE_MODULES: ModuleItem[] = [
  {
    id: 1,
    number: 1,
    title: 'AI Fundamentals & Prompt Engineering',
    category: 'Fundamentals',
    description: 'Master the foundational mechanics of Generative AI, context windows, and advanced prompt crafting formulas.',
    topics: [
      'Introduction to Artificial Intelligence and Generative AI',
      'Understanding how AI can be used in everyday work and business',
      'Introduction to practical AI tools ecosystem',
      'What is Prompt Engineering? Mechanics, syntax and role prompting',
      'Writing effective prompts for text, images, code, and videos',
      'Iterative refinement: Improving and debugging AI-generated results',
      'Using AI for high-velocity research, brainstorming and executive productivity'
    ],
    practicalProject: 'Create a personal, production-ready AI Prompt Library for work & business workflows.',
    keyTools: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'DeepSeek', 'Perplexity AI'],
    estimatedHours: 'Day 1 - 3'
  },
  {
    id: 2,
    number: 2,
    title: 'Professional Poster & Graphic Design Using AI',
    category: 'Creative Media',
    description: 'Generate commercial-grade graphic assets, social campaigns, advertising posters, and brand identities with zero traditional design friction.',
    topics: [
      'Creating professional posters and flyers using AI visual engines',
      'AI image generation, style references, aspect ratios, and creative design',
      'Social media creatives, banners, carousels, and promotional banners',
      'High-converting product advertisements and business flyers',
      'AI-assisted graphic design, upscaling, inpainting and image improvement',
      'Creating consistent visual content and brand palettes across multiple assets'
    ],
    practicalProject: 'Create a complete brand campaign suite: business poster, product advertisement, social media creative, and promotional flyer.',
    keyTools: ['Midjourney v6', 'Canva Magic Studio', 'Adobe Firefly', 'Magnific AI'],
    estimatedHours: 'Day 4 - 6'
  },
  {
    id: 3,
    number: 3,
    title: 'AI Video Creation',
    category: 'Creative Media',
    description: 'Produce dynamic commercial videos, viral short-form content, and product showcases generated purely with AI prompt-to-video engines.',
    topics: [
      'Introduction to state-of-the-art AI video generation models',
      'Turning raw ideas and business scripts into full video storyboards',
      'Creating cinematic AI-generated visuals and consistent scenes',
      'Short-form video creation for Instagram Reels, TikTok, and YouTube Shorts',
      'Product promotional videos and motion graphics',
      'AI-assisted video editing, automated captions, audio syncing and transitions'
    ],
    practicalProject: 'Create an end-to-end AI-generated promotional video for a business product or service.',
    keyTools: ['Kling AI / Runway Gen-3', 'Luma Dream Machine', 'CapCut AI', 'Pika'],
    estimatedHours: 'Day 7 - 9'
  },
  {
    id: 4,
    number: 4,
    title: 'AI Avatar & Video Presenter',
    category: 'Creative Media',
    description: 'Build realistic digital AI human presenters and spokesperson videos without ever needing a camera, studio, or microphone.',
    topics: [
      'Understanding modern photorealistic AI avatars and digital humans',
      'Creating custom AI avatars from photos or voice clones',
      'Presenter-style educational, onboarding, and promotional videos',
      'Avatar-based social media content creation for organic traffic',
      'Business and marketing applications: training videos, client pitches & ads'
    ],
    practicalProject: 'Create a professional AI Avatar presenter video for an educational masterclass or product commercial.',
    keyTools: ['HeyGen', 'D-ID', 'Synthesia', 'ElevenLabs Reader'],
    estimatedHours: 'Day 10 - 11'
  },
  {
    id: 5,
    number: 5,
    title: 'AI Voiceover & Audio Creation',
    category: 'Creative Media',
    description: 'Generate lifelike, emotionally resonant voiceovers in multiple languages and studio audio tracks for marketing videos.',
    topics: [
      'AI voice generation and high-fidelity text-to-speech (TTS) systems',
      'Selecting suitable voices, tone modulation, pacing, and emotional emphasis',
      'Studio voiceovers for digital advertisements, podcasts, and social media',
      'Multilingual voice content: translating and dubbing in 30+ languages',
      'Combining AI voiceovers, sound effects, and background music with AI videos'
    ],
    practicalProject: 'Create a complete synchronized multi-language video with custom AI-generated studio voiceover.',
    keyTools: ['ElevenLabs VoiceLab', 'Suno AI', 'Audacity / Descript AI'],
    estimatedHours: 'Day 12 - 13'
  },
  {
    id: 6,
    number: 6,
    title: 'Build a Fully Functional Website Using AI — No Code',
    category: 'Web & Tech',
    description: 'Design, write, build, and publish high-converting landing pages and business websites in minutes without writing traditional code.',
    topics: [
      'AI-assisted website planning, wireframing, and sitemap design',
      'Generating website structure, copy, and layout with AI prompts',
      'Creating landing pages and commercial business websites',
      'Adding high-converting images, contact forms, and call-to-action sections',
      'Responsive mobile-first website creation and testing',
      'Basic SEO optimization and meta tags using AI',
      'Publishing, custom domains, and updating an AI-built website'
    ],
    practicalProject: 'Build and publish a fully live, responsive business or portfolio website using AI without traditional coding.',
    keyTools: ['Framer AI', 'Relume AI', 'v0 by Vercel', 'Webflow AI'],
    estimatedHours: 'Day 14 - 16'
  },
  {
    id: 7,
    number: 7,
    title: 'AI Digital Marketing',
    category: 'Digital Business',
    description: 'Run data-driven digital marketing campaigns, automate social media calendars, and write persuasive ad copy that converts.',
    topics: [
      'Introduction to modern AI-driven digital marketing strategy',
      'AI-assisted content strategy and audience persona mapping',
      'Social media marketing automation and viral hooks using AI',
      'Content calendars, scheduling, and AI-assisted copywriting',
      'Audience and competitor market research with AI intelligence',
      'Creating high-performing advertisements and marketing creatives',
      'Basic marketing funnels: top of funnel awareness to bottom of funnel checkout'
    ],
    practicalProject: 'Create a complete, actionable 30-Day AI-Powered Digital Marketing Plan with copy, hooks, and schedule.',
    keyTools: ['Copy.ai', 'ChatGPT Pro', 'Meta Ads Library AI', 'Buffer AI'],
    estimatedHours: 'Day 17 - 19'
  },
  {
    id: 8,
    number: 8,
    title: 'Finding Winning Products Using AI',
    category: 'Digital Business',
    description: 'Discover untapped niche markets, trending e-commerce items, and commercially viable digital products using AI market research.',
    topics: [
      'Understanding what makes a product commercially attractive and profitable',
      'Product research using AI analysis and web intelligence',
      'Social media and trend research (TikTok trends, Amazon Movers & Shakers)',
      'Competitor analysis: pricing, customer reviews, and pain point extraction',
      'Evaluating market demand, profit margins, and product potential',
      'Identifying real-world customer problems that become profitable business opportunities'
    ],
    practicalProject: 'Research, evaluate, and shortlist 3 high-potential winning products with market demand validation dossiers.',
    keyTools: ['Perplexity Pro', 'Helium 10 AI', 'Google Trends AI', 'TikTok Creative Center'],
    estimatedHours: 'Day 20 - 21'
  },
  {
    id: 9,
    number: 9,
    title: 'Launch an Online Business Using AI',
    category: 'Digital Business',
    description: 'Develop a complete business blueprint: choose the optimal model, establish branding, build assets, and launch rapidly.',
    topics: [
      'Choosing the right online business model for your strengths',
      'Niche selection and deep market validation',
      'Product-based vs. service-based vs. digital asset businesses',
      'Reselling, dropshipping, agency retainers, and affiliate marketing',
      'Creating and packaging high-margin digital products (e-books, templates, kits)',
      'AI-powered branding, company naming, mission statement, and business planning',
      'Creating an authoritative online presence across web and social channels'
    ],
    practicalProject: 'Create an AI-powered Online Business Blueprint covering niche, offer, unit economics, and launch roadmap.',
    keyTools: ['Claude 3.5 Sonnet', 'Notion AI', 'Gumroad', 'Stripe'],
    estimatedHours: 'Day 22 - 24'
  },
  {
    id: 10,
    number: 10,
    title: 'Customer Acquisition Using AI',
    category: 'Digital Business',
    description: 'Attract qualified buyers systematically through organic lead generation, high-converting AI cold outreach, and automated follow-ups.',
    topics: [
      'Understanding modern customer acquisition mechanics and conversion economics',
      'Finding potential customers and laser-focused target audiences',
      'Creating precise buyer personas using AI psychological profiling',
      'Organic lead generation via LinkedIn, Instagram, and Twitter/X',
      'Social media customer acquisition strategies and DM outreach',
      'Creating irresistible offers, lead magnets, and sales messages using AI',
      'Follow-up strategies, automated customer journeys, and closing frameworks'
    ],
    practicalProject: 'Create a comprehensive Customer Profile, Acquisition Strategy, Sales Outreach Scripts, and Follow-Up Sequences.',
    keyTools: ['Apollo.io', 'ChatGPT Custom GPTs', 'Instantly AI', 'Hunter.io'],
    estimatedHours: 'Day 25 - 26'
  },
  {
    id: 11,
    number: 11,
    title: 'Business WhatsApp for Customer Management',
    category: 'Digital Business',
    description: 'Turn WhatsApp into a 24/7 lead nurturing, customer support, and sales conversion engine.',
    topics: [
      'Setting up a professional WhatsApp Business profile and presence',
      'Building an interactive product/service catalog with direct checkout links',
      'Setting up intelligent greeting messages and automated away messages',
      'Configuring quick replies, custom labels, and lead status tracking',
      'Organizing leads through custom CRM tag funnels',
      'Customer communication, objection handling, and personalized follow-ups',
      'Using WhatsApp Business as an active daily revenue and sales channel'
    ],
    practicalProject: 'Set up and configure a fully operational, automated professional WhatsApp Business CRM and sales system.',
    keyTools: ['WhatsApp Business App', 'Wati / ManyChat AI', 'Zapier AI'],
    estimatedHours: 'Day 27 - 28'
  },
  {
    id: 12,
    number: 12,
    title: 'Final Practical AI Business Project',
    category: 'Digital Business',
    isCapstone: true,
    description: 'Synthesize all 12 core competencies into one live, end-to-end commercial AI business or client-ready service offering.',
    topics: [
      'Select a focused business niche or commercial service offering',
      'Research target customers, competitor positioning, and market gap',
      'Create complete visual branding, logos, and style guidelines',
      'Create high-converting posters and marketing creative suites',
      'Produce AI video commercials, avatar presentations, and studio voiceovers',
      'Build and publish a live, functional website with lead capture forms',
      'Deploy a 30-day AI digital marketing calendar and ad campaigns',
      'Structure product offerings or monetize freelance services',
      'Develop customer acquisition outreach and conversion scripts',
      'Set up WhatsApp Business CRM for lead closing and payment handling'
    ],
    practicalProject: 'CapStone: Combine the skills learned throughout the 30-day program into one practical, launched AI-powered business or commercial project.',
    keyTools: ['Complete AI Suite Mastered Throughout the 30 Days'],
    estimatedHours: 'Day 29 - 30'
  }
];

export const STUDENT_OUTCOMES: StudentOutcome[] = [
  { id: 1, title: 'Prompt Engineering Mastery', category: 'Core Skill', tag: 'Text & Media AI' },
  { id: 2, title: 'AI Content Creation', category: 'Creative', tag: 'Copy & Content' },
  { id: 3, title: 'AI Graphic & Poster Design', category: 'Design', tag: 'Visual Assets' },
  { id: 4, title: 'AI Video Creation', category: 'Video', tag: 'Reels & Ads' },
  { id: 5, title: 'AI Avatar Videos', category: 'Video', tag: 'Digital Presenters' },
  { id: 6, title: 'Studio AI Voiceovers', category: 'Audio', tag: 'Multilingual TTS' },
  { id: 7, title: 'AI Website Building', category: 'Tech', tag: 'Landing Pages' },
  { id: 8, title: 'No-Code Website Development', category: 'Tech', tag: 'Live Portfolios' },
  { id: 9, title: 'AI Digital Marketing', category: 'Marketing', tag: 'Growth & Ads' },
  { id: 10, title: 'AI Product Research', category: 'Business', tag: 'Market Intelligence' },
  { id: 11, title: 'Winning Product Research', category: 'Business', tag: 'E-commerce Trends' },
  { id: 12, title: 'Online Business Launch', category: 'Business', tag: 'Venture Blueprint' },
  { id: 13, title: 'Customer Acquisition', category: 'Sales', tag: 'Lead Funnels' },
  { id: 14, title: 'WhatsApp Business CRM', category: 'Operations', tag: 'Sales Automation' },
  { id: 15, title: 'AI-Powered Business Operations', category: 'Operations', tag: 'Full Automation' }
];

export const CAREER_OPPORTUNITIES: CareerRole[] = [
  {
    title: 'AI Content Creator',
    category: 'Content & Media',
    description: 'Produce high-converting blogs, social threads, newsletters, and lead magnets for brands and creators.',
    averageRate: '$30 - $70 / hour',
    demandLevel: 'Very High',
    coreSkills: ['Prompt Engineering', 'AI Copywriting', 'Content Calendars'],
    deliverable: 'Monthly 30-post content packages for brands'
  },
  {
    title: 'AI Graphic Designer',
    category: 'Design & Visuals',
    description: 'Create brand visual identity packs, social banners, product packaging, and ad posters at 10x speed.',
    averageRate: '$40 - $80 / hour',
    demandLevel: 'High',
    coreSkills: ['Midjourney', 'Canva AI', 'Brand Systems'],
    deliverable: 'Complete ad & promotional asset suites'
  },
  {
    title: 'AI Video Creator',
    category: 'Video Production',
    description: 'Generate commercial promo videos, viral shorts, motion ads, and visual storytelling for businesses.',
    averageRate: '$50 - $120 / hour',
    demandLevel: 'Explosive',
    coreSkills: ['AI Video Engines', 'CapCut AI', 'Scriptwriting'],
    deliverable: '15-30 short-form video reels per client'
  },
  {
    title: 'AI Social Media Manager',
    category: 'Marketing',
    description: 'Automate content schedules, write viral hooks, analyze analytics, and scale brand engagement.',
    averageRate: '$1,000 - $2,500 / mo retainer',
    demandLevel: 'Very High',
    coreSkills: ['AI Marketing', 'Customer Personas', 'Analytics'],
    deliverable: 'Full social channel management & growth'
  },
  {
    title: 'AI Digital Marketing Freelancer',
    category: 'Marketing & Ads',
    description: 'Build end-to-end paid ad funnels, write compelling sales copy, and optimize conversion rates.',
    averageRate: '$1,500 - $3,500 / project',
    demandLevel: 'Explosive',
    coreSkills: ['Ad Creative Generation', 'Funnel Design', 'A/B Testing'],
    deliverable: 'Complete customer acquisition campaigns'
  },
  {
    title: 'AI Website Creator',
    category: 'Web & No-Code',
    description: 'Build fast, responsive, and SEO-optimized business websites and landing pages with zero code.',
    averageRate: '$500 - $2,000 / site',
    demandLevel: 'High',
    coreSkills: ['Framer AI', 'Landing Page Copy', 'SEO Strategy'],
    deliverable: 'Launched 5-page business websites'
  },
  {
    title: 'AI Marketing Assistant',
    category: 'Support & Ops',
    description: 'Provide executive-level support for marketing teams, doing competitor research, drafts, and data analysis.',
    averageRate: '$25 - $50 / hour',
    demandLevel: 'High',
    coreSkills: ['Perplexity Research', 'Email Drafts', 'Workflow Automations'],
    deliverable: 'Weekly marketing intelligence briefings'
  },
  {
    title: 'AI Business Support Specialist',
    category: 'Operations',
    description: 'Set up WhatsApp Business automated funnels, client onboarding CRM pipelines, and customer support bots.',
    averageRate: '$500 - $1,500 / setup',
    demandLevel: 'High',
    coreSkills: ['WhatsApp Business', 'CRM Tagging', 'Lead Routing'],
    deliverable: 'Automated 24/7 lead closing systems'
  },
  {
    title: 'Online Business Owner',
    category: 'Entrepreneurship',
    description: 'Launch your own digital products, dropshipping store, niche e-commerce, or online consultancy.',
    averageRate: 'Unlimited Earning Potential',
    demandLevel: 'Explosive',
    coreSkills: ['Product Research', 'Digital Assets', 'Conversion Funnels'],
    deliverable: 'Self-owned automated digital business'
  },
  {
    title: 'Freelance AI Service Provider',
    category: 'Freelancing Agency',
    description: 'Offer bundled AI solutions (video + copy + web + WhatsApp) to local businesses and international clients.',
    averageRate: '$2,000 - $5,000 / client',
    demandLevel: 'Explosive',
    coreSkills: ['All 12 Modules', 'Client Pitching', 'Full Stack AI'],
    deliverable: 'Full turnkey AI transformation packages'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do I need any prior coding or design experience?',
    answer: 'No prior experience in programming, coding, or graphic design is required! The entire curriculum is built from the ground up for beginners, career changers, marketers, and entrepreneurs. You will learn to build websites, graphics, videos, and systems using intuitive AI and no-code tools.',
    category: 'Requirements'
  },
  {
    question: 'How do the Live Sessions and LMS recordings work?',
    answer: 'You get 2 interactive live sessions per week (2.5 hours each, totaling 10 hours of live instruction) where instructors break down workflows live and review student projects. If you miss any session, full HD recordings and step-by-step LMS learning resources are available 24/7 for you to review anytime.',
    category: 'Program Format'
  },
  {
    question: 'How does the WhatsApp Mentoring & Doubt Clearance work?',
    answer: 'Immediately upon enrolling, you will be invited to a private WhatsApp cohort group. Instructors and mentors are active daily to answer questions, review your prompts, debug outputs, critique your project assignments, and give you personalized feedback so you never stay stuck.',
    category: 'Support & Mentoring'
  },
  {
    question: 'What is the Final Practical AI Business Project?',
    answer: 'In Module 12, you synthesize all your knowledge from the previous 11 modules into one complete, practical capstone project. You will choose a niche, create visual branding, generate promotional videos and AI avatars, build a live website, set up WhatsApp Business, and prepare a real customer acquisition plan.',
    category: 'Career & Business'
  },
  {
    question: 'Will I need to pay for paid AI tool subscriptions?',
    answer: 'The program teaches both powerful free tiers and top-tier premium tools. You can complete all core assignments and projects using free accounts or trial credits. We also provide recommendations on which tools are worth investing in as you start acquiring paying clients.',
    category: 'Requirements'
  },
  {
    question: 'Is income guaranteed after completing the program?',
    answer: 'As stated in our transparent positioning note: The program develops practical skills and real business capabilities. Income is not guaranteed; results depend on your implementation, skill refinement, market demand, and your ability to acquire clients or launch your offers. However, we equip you with real portfolio deliverables and client acquisition strategies.',
    category: 'Career & Business'
  },
  {
    question: 'What is your refund policy?',
    answer: 'This is a digital recorded course with instant access. Once access to the course is provided, refunds cannot be issued. If you have any questions before enrolling, please contact us on WhatsApp.',
    category: 'Requirements'
  }
];
