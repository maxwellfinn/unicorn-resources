// Skills, Skill Categories, Front-End Prompts, Self-Improvement Prompts, Front-End Subcategories

// ============================================================
// 1. Claude Skills Data (15 skills)
// ============================================================

export const claudeSkillsData = [
  // --- Ad Creation ---
  {
    id: 'meta-image-ad-generator',
    name: 'Meta Image Ad Generator',
    description: 'Generate high-converting Meta ad image concepts with detailed prompts for AI image generators. Creates scroll-stopping visuals optimized for Facebook and Instagram.',
    category: 'ads',
    filename: 'meta-image-ad-generator.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/meta-image-ad-generator',
    icon: 'Image',
  },
  {
    id: 'meta-video-ads',
    name: 'Meta Video Ads',
    description: 'Create compelling video ad scripts and concepts for Meta platforms. Generates hooks, storylines, and CTAs optimized for short-form video.',
    category: 'ads',
    filename: 'meta-video-ads.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/meta-video-ads',
    icon: 'Video',
  },
  {
    id: 'unicorn-ad-creative-engine',
    name: 'Unicorn Ad Creative Engine',
    description: 'Full-stack ad creative system combining research, copy, and visual concepts into complete campaign packages. The master orchestrator for ad creation.',
    category: 'ads',
    filename: 'unicorn-ad-creative-engine.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/unicorn-ad-creative-engine',
    icon: 'Rocket',
    dependencies: ['meta-image-ad-generator', 'meta-video-ads', 'dr-market-research'],
    chainsWith: ['persona-architect', 'competitive-intelligence'],
  },

  // --- Copywriting ---
  {
    id: 'vsl-master-architect',
    name: 'VSL Master Architect',
    description: 'Build high-converting Video Sales Letter scripts using proven direct response frameworks. Creates complete VSL structures from hook to close.',
    category: 'copy',
    filename: 'vsl-master-architect.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/vsl-master-architect',
    icon: 'PlayCircle',
  },
  {
    id: 'legendary-sales-letter',
    name: 'Legendary Sales Letter',
    description: 'Craft long-form sales letters using time-tested direct response copywriting principles. Creates persuasive narratives that convert.',
    category: 'copy',
    filename: 'legendary-sales-letter.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/legendary-sales-letter',
    icon: 'FileText',
  },
  {
    id: 'conversion-copy-architect',
    name: 'Conversion Copy Architect',
    description: 'Design conversion-focused copy for landing pages, emails, and ads. Uses psychological triggers and persuasion frameworks.',
    category: 'copy',
    filename: 'conversion-copy-architect.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/conversion-copy-architect',
    icon: 'Target',
  },
  {
    id: 'unicorn-conversion-engine',
    name: 'Unicorn Conversion Engine',
    description: 'End-to-end conversion optimization system that audits, recommends, and implements improvements across entire funnels.',
    category: 'copy',
    filename: 'unicorn-conversion-engine.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/unicorn-conversion-engine',
    icon: 'Gauge',
    dependencies: ['conversion-copy-architect', 'legendary-sales-letter'],
    chainsWith: ['dr-market-research', 'persona-architect'],
  },

  // --- Research & Strategy ---
  {
    id: 'dr-market-research',
    name: 'DR Market Research',
    description: 'Conduct deep direct response market research. Analyzes target audiences, pain points, desires, and buying triggers.',
    category: 'research',
    filename: 'dr-market-research.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/dr-market-research',
    icon: 'Search',
  },
  {
    id: 'competitive-intelligence',
    name: 'Competitive Intelligence',
    description: 'Analyze competitor strategies, ads, funnels, and positioning. Identifies opportunities and threats.',
    category: 'research',
    filename: 'competitive-intelligence.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/competitive-intelligence',
    icon: 'Eye',
  },
  {
    id: 'ai-seo-intelligence',
    name: 'AI SEO Intelligence',
    description: 'Generate SEO-optimized content strategies and keyword research. Creates content briefs and optimization recommendations.',
    category: 'research',
    filename: 'ai-seo-intelligence.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/ai-seo-intelligence',
    icon: 'TrendingUp',
  },
  {
    id: 'persona-architect',
    name: 'Persona Architect',
    description: 'Build detailed customer personas and avatar profiles. Creates psychographic profiles informing messaging and targeting.',
    category: 'research',
    filename: 'persona-architect.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/persona-architect',
    icon: 'Users',
  },

  // --- Brand & Voice ---
  {
    id: 'brand-style-extractor',
    name: 'Brand Style Extractor',
    description: 'Extract and document brand voice, style, and guidelines from existing content. Creates comprehensive brand guides.',
    category: 'brand',
    filename: 'brand-style-extractor.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/brand-style-extractor',
    icon: 'Palette',
  },

  // --- Front-End / Landing Pages ---
  {
    id: 'listicle-architect',
    name: 'Listicle Architect',
    description: 'Build high-converting listicle-style review pages and comparison articles. Creates complete 3rd-party review site experiences.',
    category: 'frontend',
    filename: 'listicle-architect.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/listicle-architect',
    icon: 'ListOrdered',
    chainsWith: ['conversion-copy-architect', 'dr-market-research'],
  },
  {
    id: 'advertorial-architect',
    name: 'Advertorial Architect',
    description: 'Create premium native advertising content that reads like journalism. Builds complete advertorial landing pages with editorial design.',
    category: 'frontend',
    filename: 'advertorial-architect.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/advertorial-architect',
    icon: 'Newspaper',
    chainsWith: ['legendary-sales-letter', 'brand-style-extractor'],
  },
  {
    id: 'quiz-funnel-architect',
    name: 'Quiz Funnel Architect',
    description: 'Design interactive quiz funnels that segment audiences and deliver personalized recommendations. Complete quiz logic and result pages.',
    category: 'frontend',
    filename: 'quiz-funnel-architect.md',
    downloadUrl: 'https://drive.google.com/drive/folders/11IEWeSPmSg8p2W2ya9JiQjBbFE-ShvEu',
    instructions: '/quiz-funnel-architect',
    icon: 'HelpCircle',
    chainsWith: ['persona-architect', 'conversion-copy-architect'],
  },
];

// ============================================================
// 2. Skill Categories Data
// ============================================================

export const skillCategoriesData = [
  { id: 'ads', name: 'Ad Creation', color: 'from-pink-500 to-rose-500' },
  { id: 'copy', name: 'Copywriting', color: 'from-blue-500 to-indigo-500' },
  { id: 'research', name: 'Research & Strategy', color: 'from-green-500 to-emerald-500' },
  { id: 'brand', name: 'Brand & Voice', color: 'from-purple-500 to-violet-500' },
  { id: 'frontend', name: 'Front-End / Pages', color: 'from-orange-500 to-amber-500' },
];

// ============================================================
// 3. Front-End Idea Prompts (10 prompts)
// ============================================================

export const frontEndPrompts = [
  {
    id: 101,
    title: "Classic Advertorial",
    category: "front-end-ideas",
    subcategory: "editorial",
    description: "Premium native advertising content disguised as editorial journalism. The gold standard for warming up cold traffic.",
    strategicUseCase: "The #1 front-end format for cold traffic from Meta/Google ads. Advertorials warm up cold prospects through information before asking for the sale. Essential for any paid traffic strategy.",
    tags: ["advertorial", "editorial", "native", "content", "journalism"],
    prompts: {
      basic: "Write a ready-to-publish fully designed hyper-persuasive advertorial using the advertorial-architect skill for [BUSINESS URL]. Research the brand first, then create a complete native advertising article.",
      advanced: "Using the advertorial-architect skill, create a premium advertorial for [BUSINESS URL] targeting [AUDIENCE]. First run dr-market-research to understand the customer's pain points. Then craft a journalistic article that educates while persuading, includes expert quotes, data points, and natural product integration. Design should match a premium news publication.",
      expert: "Execute a full advertorial campaign using the advertorial-architect skill for [BUSINESS URL]. Start with dr-market-research and competitive-intelligence to understand the landscape. Extract brand voice with brand-style-extractor. Then build a sophisticated advertorial with: newsworthy angle, credible journalist byline, publication-quality design, SEO-optimized content, social proof integration, multi-CTA strategy, and mobile optimization. Include A/B testing variants for headlines and CTAs."
    },
    keyVariables: ["Business URL", "Target audience", "Publication style to mimic", "Primary offer/CTA"],
    proTip: "The best advertorials provide genuine value — readers should learn something useful even if they never click the CTA.",
    featured: true
  },
  {
    id: 102,
    title: "Direct Response Sales Letter",
    category: "front-end-ideas",
    subcategory: "long-form",
    description: "Long-form persuasion page using classic direct response copywriting principles. Text-heavy, story-driven, conversion-focused.",
    strategicUseCase: "The proven workhorse of direct response marketing. When you need to take someone from \"never heard of you\" to \"take my money\" in a single page, the long-form sales letter is the format.",
    tags: ["sales letter", "long-form", "persuasion", "classic", "direct response"],
    prompts: {
      basic: "Write a high-converting long-form sales letter using the legendary-sales-letter skill for [BUSINESS URL]. Include headline, story, offer, and CTA.",
      advanced: "Using the legendary-sales-letter skill, create a comprehensive direct response sales letter for [BUSINESS URL] targeting [AUDIENCE]. Structure: attention-grabbing headline, rapport-building story, problem agitation, solution reveal, proof stack, offer presentation with value stack, risk reversal, and urgency close. Design is intentionally simple — text-focused with strategic formatting.",
      expert: "Build a masterful direct response sales letter using the legendary-sales-letter skill for [BUSINESS URL]. Start with dr-market-research and persona-architect for deep audience understanding. Then craft: proven headline formula, personal narrative that builds trust, sophisticated problem-agitation-solution structure, layered credibility proof, irresistible offer mathematics, multi-level guarantee, and ethical urgency. Include conversion-copy-architect for CTA optimization. Test variants for headline, lead, and offer presentation."
    },
    keyVariables: ["Business URL", "Core offer/product", "Target audience pain points", "Price point and value stack"],
    proTip: "The sales letter should feel like a personal letter from someone who genuinely wants to help. The moment it feels \"corporate,\" you've lost.",
    featured: false
  },
  {
    id: 103,
    title: "Video Sales Letter (VSL) Script",
    category: "front-end-ideas",
    subcategory: "video",
    description: "Complete VSL script with landing page design. Controlled video experience optimized for high-ticket and info product offers.",
    strategicUseCase: "VSLs dominate in high-ticket and info product marketing because video builds trust faster than text. The controlled viewing experience keeps prospects engaged through the entire persuasion sequence.",
    tags: ["VSL", "video", "script", "presentation", "multimedia"],
    prompts: {
      basic: "Write a compelling VSL script using the vsl-master-architect skill for [BUSINESS URL]. Include hook, problem, solution, proof, offer, and close sections.",
      advanced: "Using the vsl-master-architect skill, create a complete VSL script and landing page for [BUSINESS URL] targeting [AUDIENCE]. Script structure: pattern interrupt hook (0-30s), problem identification (30s-3m), unique mechanism reveal (3-7m), proof stack (7-12m), offer presentation (12-15m), close with urgency (15-18m). Landing page design: video hero, timed CTA reveals, supporting elements below fold.",
      expert: "Execute a full VSL production package using the vsl-master-architect skill for [BUSINESS URL]. Begin with dr-market-research for audience intelligence. Script follows cinematic structure: cold open hook that stops scrolling, emotional story arc, \"aha moment\" mechanism reveal, overwhelming proof sequence, premium offer mathematics, multi-close strategy. Landing page includes: custom video thumbnail, progressive element reveals, testimonial integration, exit-intent transcript offer. Include slide-by-slide visual direction notes and A/B test variants."
    },
    keyVariables: ["Business URL", "Video length target", "Offer price point", "Key mechanism/unique angle"],
    proTip: "The first 5 seconds determine everything. Open with a bold, unexpected statement that makes NOT watching feel like a mistake.",
    featured: false
  },
  {
    id: 104,
    title: "Hybrid Landing Page",
    category: "front-end-ideas",
    subcategory: "video",
    description: "Modern multi-format page combining video, scroll content, and interactive elements. Serves every consumption preference.",
    strategicUseCase: "Modern consumers have different content preferences. The hybrid format serves everyone: video watchers get the video, readers get the scroll content, and skimmers get the highlights. Maximum conversion across all behavior types.",
    tags: ["hybrid", "modern", "video", "scroll", "multimedia"],
    prompts: {
      basic: "Create a modern hybrid landing page using the conversion-copy-architect skill for [BUSINESS URL]. Combine video content with scroll-based sections for maximum engagement.",
      advanced: "Using the conversion-copy-architect skill, build a hybrid landing page for [BUSINESS URL] that serves multiple consumption preferences. Include: hero with video + scroll option, benefit breakdowns with lifestyle imagery, video testimonials, feature demos, social proof aggregation, FAQ section, and sticky CTA. Design balances media with readability.",
      expert: "Build a sophisticated hybrid landing page using the conversion-copy-architect and unicorn-conversion-engine skills for [BUSINESS URL]. Start with persona-architect to understand consumption preferences. Create three content paths: video-first (embedded hero video), scroll-first (editorial-quality sections), and quick-scan (jump links to key sections). Include: animated scroll interactions, lazy-loaded video sections, mixed testimonial formats, interactive product demos, progressive disclosure. Mobile-optimized with thumb-friendly navigation. Include heatmap-ready analytics integration and A/B test variants."
    },
    keyVariables: ["Business URL", "Primary and secondary CTAs", "Video content available", "Target audience consumption preferences"],
    proTip: "Give users CHOICE in how they consume — \"Watch the 3-min video\" or \"Read the key points below.\" Respecting preferences increases conversion.",
    featured: false
  },
  {
    id: 105,
    title: "Interactive Quiz Funnel",
    category: "front-end-ideas",
    subcategory: "interactive",
    description: "Gamified quiz experience that segments audiences and delivers personalized product recommendations. Highest engagement format available.",
    strategicUseCase: "Quiz funnels generate the highest quality leads because people self-segment through their answers. The interactive format creates engagement that passive pages can't match, and personalized results drive higher conversion.",
    tags: ["quiz", "interactive", "personalization", "engagement", "funnel"],
    prompts: {
      basic: "Create an interactive quiz funnel using the quiz-funnel-architect skill for [BUSINESS URL]. Include engaging questions, progress tracking, and personalized results.",
      advanced: "Using the quiz-funnel-architect skill, design a complete quiz funnel for [BUSINESS URL] targeting [AUDIENCE]. Include: compelling pre-quiz landing page with social proof, 6-8 engaging visual questions, progress gamification, social proof cards between questions, personalized results based on answer combinations, product recommendations, and email capture for detailed results.",
      expert: "Execute a full quiz funnel experience using the quiz-funnel-architect and persona-architect skills for [BUSINESS URL]. Start with dr-market-research for question design intelligence. Build: stunning pre-quiz page with outcome promise, provocative questions that create emotional investment, fact/data cards between questions, logic branching based on key answers, dramatic results reveal with personalization tokens, specific product recommendations with reasoning, segmented email capture, and post-quiz nurture sequence design. Include answer analytics tracking and results page A/B test variants."
    },
    keyVariables: ["Business URL", "Quiz topic/outcome promise", "Number of result segments", "Product recommendations per segment"],
    proTip: "The quiz questions ARE the marketing. Each question should plant a seed about why they need your product — by the time they see results, they're pre-sold.",
    featured: true
  },
  {
    id: 106,
    title: "SMS Tip Sequence",
    category: "front-end-ideas",
    subcategory: "lead-magnet",
    description: "30-day SMS drip sequence with dedicated landing page. Leverages 98% open rates to build daily habit and relationship.",
    strategicUseCase: "SMS has 98% open rates vs. 20% for email. A daily tip sequence builds habit and relationship through the most personal channel available. Works for coaching, education, wellness, and habit-forming products.",
    tags: ["SMS", "tips", "lead magnet", "drip", "mobile"],
    prompts: {
      basic: "Create a landing page for a 30-day SMS tip sequence using the conversion-copy-architect skill for [TOPIC/PRODUCT]. Include phone capture, tip preview, and value proposition.",
      advanced: "Using the conversion-copy-architect skill, build an SMS tip sequence landing page for [TOPIC/PRODUCT]. Include: compelling headline about 30-day transformation, sample tip previews showing value quality, testimonials from past participants, phone capture with SMS consent, visual timeline showing progression. Write the first 7 tips as examples.",
      expert: "Build a complete SMS tip sequence system using the conversion-copy-architect and persona-architect skills for [TOPIC/PRODUCT]. Landing page includes: specific outcome promise, tip quality preview, social proof from completers, compliant phone capture. Write the complete 30-day tip sequence with: daily value delivery, strategic product mentions (starting day 7), milestone celebrations, engagement prompts, and conversion CTAs at days 10, 20, and 30. Include compliance language, opt-out handling, and analytics tracking. Mobile-first design since SMS audience is inherently mobile."
    },
    keyVariables: ["Topic/product", "Sequence length", "Tip format and tone", "Conversion points within sequence"],
    proTip: "Front-load the value — the first 3 tips should be SO good that people screenshot and share them. This creates organic growth of your SMS list.",
    featured: false
  },
  {
    id: 107,
    title: "Interactive Calculator",
    category: "front-end-ideas",
    subcategory: "interactive",
    description: "Custom calculator tool that provides personalized value through user inputs. Perfect for ROI, savings, and assessment tools.",
    strategicUseCase: "Calculators provide personalized value that generic content cannot. When someone inputs THEIR numbers and gets THEIR results, the output feels custom and trustworthy. Perfect for B2B, finance, health, and ROI-focused products.",
    tags: ["calculator", "tool", "interactive", "value", "lead gen"],
    prompts: {
      basic: "Create an interactive calculator landing page using the conversion-copy-architect skill that helps visitors calculate [RELEVANT METRIC] for [PRODUCT CONTEXT].",
      advanced: "Using the conversion-copy-architect skill, build a calculator landing page for [PRODUCT/BRAND]. Calculator: 3-5 input fields with smart defaults, real-time calculation with visual output, benchmark comparison, impact statement. Lead capture: email for detailed PDF report. Include methodology explanation for credibility.",
      expert: "Build a value-rich calculator system using the conversion-copy-architect and unicorn-conversion-engine skills for [PRODUCT/BRAND]. Calculator design: purpose-specific to [PAIN POINT], progressive disclosure inputs, real-time animated results, gauge/chart visualization, benchmark comparisons, dollar/time impact translation. Lead capture: basic results shown free, detailed report gated. Product integration: calculator results naturally lead to product recommendation. Include: methodology transparency, data source citations, segmented follow-up based on calculator results. Mobile-optimized with touch-friendly inputs."
    },
    keyVariables: ["Metric to calculate", "Input fields and defaults", "Benchmark data for comparison", "Product recommendation logic"],
    proTip: "The calculator should genuinely help — even if they never buy. When people get real value from a free tool, they remember who provided it.",
    featured: false
  },
  {
    id: 108,
    title: "Listicle / Review Page",
    category: "front-end-ideas",
    subcategory: "editorial",
    description: "3rd-party review site ranking page positioning your product as #1. Editorial credibility meets conversion optimization.",
    strategicUseCase: "Listicles dominate search and social because the format promises organized, scannable value. As a 3rd-party review format, they provide the social proof of editorial endorsement while maintaining control of the narrative.",
    tags: ["listicle", "content", "numbered", "scannable", "educational"],
    prompts: {
      basic: "Create a listicle review page using the listicle-architect skill featuring [PRODUCT] among top recommendations in [CATEGORY]. 3rd party review site perspective.",
      advanced: "Using the listicle-architect skill, build a complete review listicle for [PRODUCT] in [CATEGORY]. Create from 3rd party review site perspective (e.g., \"Men's Wellness Review\"). Include: SEO-optimized title, numbered items with genuine value, product integration in top position, comparison elements, editorial photography, and tasteful affiliate-style CTAs. Design matches legitimate review publications.",
      expert: "Execute a full listicle system using the listicle-architect and competitive-intelligence skills for [PRODUCT] in [CATEGORY]. Research competitors first. Build from authoritative 3rd party perspective: create publication brand (name, logo, editorial voice), SEO-optimized content with genuine comparative analysis, [PRODUCT] positioned as #1 with detailed reasoning, competitor reviews that are fair but highlight [PRODUCT] advantages, editorial photography, trust badges, methodology explanation. Include: table of contents, comparison table, individual detailed reviews, verdict section, FAQ, and multiple CTA placements. Mobile-optimized with sticky comparison bar."
    },
    keyVariables: ["Product category", "Review site name/brand", "Competitor products to include", "Ranking criteria that favor your product"],
    proTip: "The review site must feel REAL — include legitimate pros AND cons for your product (minor cons build credibility), and give fair treatment to competitors.",
    featured: false
  },
  {
    id: 109,
    title: "Lead Magnet Squeeze Page",
    category: "front-end-ideas",
    subcategory: "lead-magnet",
    description: "Focused single-purpose page designed to capture email addresses in exchange for a high-value free resource.",
    strategicUseCase: "The foundation of list building. A focused squeeze page with a compelling free offer consistently outperforms generic \"subscribe to our newsletter\" approaches. The quality of the lead magnet determines the quality of the list.",
    tags: ["lead magnet", "squeeze", "email", "freebie", "capture"],
    prompts: {
      basic: "Create a squeeze page using the conversion-copy-architect skill for [LEAD MAGNET] related to [PRODUCT]. Include headline, value description, email capture, and content preview.",
      advanced: "Using the conversion-copy-architect skill, build a squeeze page for [FREE RESOURCE] connected to [PRODUCT/BRAND]. Include: specific outcome headline, deliverable format mockup, 4-6 benefit bullets, simple email capture, privacy assurance, download count social proof. One goal only — email capture.",
      expert: "Build a high-converting squeeze page system using the conversion-copy-architect and persona-architect skills for [LEAD MAGNET]. Research target audience first. Page includes: curiosity-gap headline with specific outcome, professional deliverable mockup (PDF, video, checklist), benefit list written as transformations (not features), one surprising inclusion that elevates perceived value, minimal-friction form (email only), social proof (download count, testimonials), mobile-optimized design. Include: thank-you page with soft product introduction, welcome email sequence design, and lead magnet content outline. A/B test variants for headline and CTA button copy."
    },
    keyVariables: ["Lead magnet topic and format", "Connected product/offer", "Target audience", "Specific transformation promise"],
    proTip: "The lead magnet should solve one specific problem completely. \"7 Ways to Improve [X]\" is weak. \"[Exact Template] That Generated $50K in 30 Days\" is irresistible.",
    featured: false
  },
  {
    id: 110,
    title: "Webinar Registration Page",
    category: "front-end-ideas",
    subcategory: "event",
    description: "High-converting registration page for live or evergreen webinars. The critical gateway for high-ticket offer funnels.",
    strategicUseCase: "Webinars remain the highest-converting format for high-ticket offers because they allow extended persuasion time (45-90 min) in a value-first format. The registration page is the critical gateway.",
    tags: ["webinar", "registration", "event", "live", "training"],
    prompts: {
      basic: "Create a webinar registration page using the conversion-copy-architect skill for [WEBINAR TITLE] about [TOPIC]. Include date/time, presenter info, takeaways, and registration form.",
      advanced: "Using the conversion-copy-architect skill, build a webinar registration page for [PRODUCT/BRAND]'s webinar on [TOPIC]. Include: specific outcome-focused title, presenter bio with credibility markers, date/time with countdown, 4-6 specific takeaways, urgency elements (limited seats if genuine), registration form, calendar add option. Design for both live and replay positioning.",
      expert: "Execute a full webinar registration system using the conversion-copy-architect and persona-architect skills for [PRODUCT/BRAND]. Research audience first. Registration page includes: curiosity-driven title promising specific revelation, presenter credibility stack (bio, achievements, social proof), event details with timezone handling, specific takeaway promises including one \"sacred cow\" challenge, attendance social proof, registration with segmentation questions, calendar integration. Include: confirmation page with pre-event engagement, reminder email sequence (24hr, 1hr, starting now), replay strategy with deadline urgency, and post-webinar offer page design."
    },
    keyVariables: ["Webinar topic and title", "Presenter credentials", "Specific takeaway promises", "Live vs. replay strategy"],
    proTip: "Include one \"controversial\" takeaway in your bullet points — \"Why [common belief] is actually hurting your [results]\" — this creates irresistible curiosity that drives registration.",
    featured: false
  },
];

// ============================================================
// 4. Self-Improvement Prompts (5 recursive enhancement prompts)
// ============================================================

export const selfImprovementPrompts = [
  {
    id: 201,
    title: "5 Hostile Reviewers",
    category: "self-improvement",
    description: "Stress-test your content with 5 hostile reviewers who attack from different angles.",
    whenToUse: "After generating any ad copy, landing page, or sales letter. Use this to find and fix weaknesses before your audience does.",
    tags: ["review", "critique", "improvement", "quality", "stress-test"],
    prompt: `You are simulating 5 hostile reviewers, each reviewing the content from a specific critical angle. Each reviewer should be genuinely tough — not nitpicky, but substantively critical in their area of expertise.

Reviewer 1 — The Skeptical Consumer: "Why should I believe any of this?" Attack claims, proof, and credibility. Flag anything that feels like BS, exaggeration, or unsubstantiated. What would make a smart, burned-before consumer roll their eyes?

Reviewer 2 — The Conversion Rate Optimizer: "Where are people dropping off?" Attack the conversion architecture. Flag weak CTAs, friction points, unclear value props, buried leads, and missed psychological triggers. Where does the persuasion sequence break?

Reviewer 3 — The Brand Strategist: "Does this actually build the brand?" Attack brand consistency, voice, positioning, and long-term implications. Flag anything that wins the click but damages the brand. Is the tone right? Does it attract the right customers?

Reviewer 4 — The Legal/Compliance Officer: "What could get us in trouble?" Attack claims that need substantiation, implied guarantees, testimonial issues, comparison claims, and regulatory risks. Flag FTC/platform policy concerns.

Reviewer 5 — The Target Customer: "Does this actually speak to me?" Attack relevance, relatability, and emotional resonance. Flag jargon, assumptions, and disconnects between the message and the actual customer experience. Does this feel like it was written BY someone who understands me?

For each reviewer, provide: 3-5 specific criticisms with exact quotes from the content, severity rating (Critical/Major/Minor), and a specific fix recommendation for each issue.

Then synthesize: What are the top 3 changes that would have the biggest impact across all reviewers?`,
    icon: "ShieldAlert"
  },
  {
    id: 202,
    title: "Processing Fluency Optimizer",
    category: "self-improvement",
    description: "Optimize content for cognitive ease, making it effortless to read and process.",
    whenToUse: "After any content generation to ensure maximum readability and comprehension. Especially important for landing pages and sales letters.",
    tags: ["readability", "cognitive", "optimization", "clarity", "psychology"],
    prompt: `Analyze the following content through the lens of processing fluency — the psychological principle that information which is easier to process is perceived as more truthful, more valuable, and more persuasive.

Evaluate and improve across these dimensions:

1. LEXICAL FLUENCY: Replace complex words with simpler alternatives. If a 5th grader wouldn't know the word, change it. Flag jargon, multi-syllable words where simple ones work, and any word that makes the reader pause.

2. SYNTACTIC FLUENCY: Simplify sentence structures. Break compound-complex sentences into simple ones. Ensure each sentence carries one idea. Flag sentences over 20 words, nested clauses, and passive voice.

3. VISUAL FLUENCY: Assess formatting for scannability. Flag walls of text, missing subheaders, inconsistent formatting, poor contrast between sections, and areas needing bullet points or white space.

4. CONCEPTUAL FLUENCY: Ensure ideas flow logically. Flag jumps in logic, unexplained concepts, missing transitions, and areas where the reader might think "wait, what?" Ensure each section naturally leads to the next.

5. EMOTIONAL FLUENCY: Check that emotional arc is smooth. Flag jarring tone shifts, emotional whiplash, and areas where the writing asks the reader to feel too many things at once. Ensure the emotional journey builds progressively.

For each dimension: Provide specific examples from the content, rate current fluency (1-10), and rewrite the worst offenders to demonstrate the improvement.

Final output: Rewrite the entire piece with all fluency optimizations applied, tracking what changed and why.`,
    icon: "Zap"
  },
  {
    id: 203,
    title: "Adversarial Persona Stress Test",
    category: "self-improvement",
    description: "Test content against 5 adversarial customer personas who each have reasons NOT to buy.",
    whenToUse: "Before finalizing any sales page, ad, or funnel. This ensures you're not just preaching to the converted — you're addressing the objections of the hardest-to-convince prospects.",
    tags: ["personas", "objections", "testing", "conversion", "audience"],
    prompt: `Create 5 adversarial customer personas — people who are in the target market but have specific reasons they WON'T buy. For each persona, simulate their experience reading/viewing this content.

Persona 1 — The Burned Before: Has tried similar products/services 3+ times and been disappointed. Their default is "this is probably the same garbage." What in this content would reinforce their skepticism? What could overcome it?

Persona 2 — The Analytical Buyer: Needs data, proof, and logical argument. Emotional appeals actually push them AWAY. They want specifics: numbers, methodology, comparisons, guarantees with teeth. Where does this content fail the analytical test?

Persona 3 — The Time-Poor Executive: Has 30 seconds max to determine relevance. Skims everything, reads nothing in detail. What do they see in their 30-second scan? Does the value proposition land in a glance? What's invisible to a skimmer?

Persona 4 — The Price-Sensitive Prospect: Wants the result but winces at the price. Every claim must justify the cost. Where does this content fail to build sufficient value? Where does it leave money objections unaddressed?

Persona 5 — The Spouse/Partner Skeptic: The buyer wants it, but needs to justify the purchase to their partner. What in this content could they show their partner to get buy-in? What creates more household friction?

For each persona: Walk through the content from their perspective, flag the exact moment they would leave or object, provide the specific change that would keep them engaged, and rate the content's current effectiveness for that persona (1-10).

Synthesis: Which persona type represents your biggest conversion opportunity? What 3 changes would improve conversion across ALL persona types?`,
    icon: "Users"
  },
  {
    id: 204,
    title: "Objection/Specificity/Authenticity Audit",
    category: "self-improvement",
    description: "Triple-audit content for unaddressed objections, vague claims, and authenticity gaps.",
    whenToUse: "Final review before publishing any conversion-focused content. This catches the three most common reasons content fails to convert.",
    tags: ["audit", "objections", "specificity", "authenticity", "conversion"],
    prompt: `Perform a triple audit on this content:

AUDIT 1 — OBJECTION MAPPING: List every possible objection a prospect could have while reading this content. For each objection: Where in the content does it arise? Is it addressed? If addressed, is the response convincing? If not addressed, where should it be, and what should it say? Rate: What percentage of likely objections are handled? Target: 90%+

AUDIT 2 — SPECIFICITY SCORE: Flag every vague or generic claim. For each vague claim: Quote the exact text. Explain why it's vague. Provide a specific, concrete alternative. Rate: How many claims are specific (with numbers, names, timeframes, details) vs. generic? Target: 80%+ specific.

Examples of vague → specific:
"Great results" → "27% average ROAS increase in first 90 days"
"Many customers love it" → "4.7/5 rating from 100+ verified reviews"
"Works fast" → "Most users see initial results within 14 days"
"Industry-leading" → "Ranked #1 by G2 in Q4 2025 with 847 reviews"

AUDIT 3 — AUTHENTICITY CHECK: Read the entire piece as a skeptical, intelligent human. Flag every moment that feels: Fake, corporate, or AI-generated. Overly polished or too perfect. Disconnected from real human experience. Like a template rather than original thought. Generic enough to apply to any product (not specific to THIS one).

For each authenticity flag: Quote the text. Explain what makes it feel inauthentic. Rewrite it to feel genuinely human and specific to this product/brand.

Final Score: Objection Coverage: X/100, Specificity Score: X/100, Authenticity Score: X/100. Overall Conversion Readiness: X/100.

Provide the complete rewritten version with all three audits applied.`,
    icon: "ClipboardCheck"
  },
  {
    id: 205,
    title: "Expert Review Panel",
    category: "self-improvement",
    description: "Simulate a panel of 5 industry experts reviewing your content from their specialized perspectives.",
    whenToUse: "For high-stakes content (product launches, major campaigns, rebrand messaging) where you need expert-level feedback across multiple disciplines.",
    tags: ["expert", "review", "panel", "feedback", "optimization"],
    prompt: `Convene a virtual expert review panel. 5 specialists review this content from their domain expertise:

Expert 1 — Direct Response Legend (Think: Gary Halbert, David Ogilvy): Reviews the persuasion architecture. Is the hook strong enough? Does the lead grab and not let go? Is the offer irresistible? Does the close create urgency without manipulation? Does the copy follow proven direct response principles? Grade the headline, lead, body, proof, offer, and close separately.

Expert 2 — Behavioral Psychologist (Think: Robert Cialdini, Daniel Kahneman): Reviews psychological triggers and cognitive biases. Which persuasion principles are present? Which are missing? Are there decision-making barriers the content doesn't address? Is the cognitive load appropriate? Are the right biases being leveraged (social proof, scarcity, authority, reciprocity, commitment)?

Expert 3 — UX/Conversion Designer (Think: Top Shopify/landing page designer): Reviews the content's structure, flow, and conversion architecture. Is the visual hierarchy correct? Does the eye naturally flow to key elements? Are there friction points in the user journey? Is the mobile experience considered? Where would scroll depth drop off? What elements are competing for attention?

Expert 4 — Brand Strategist (Think: Seth Godin): Reviews the bigger picture. Does this content build lasting brand equity or just chase short-term conversion? Is the positioning clear and defensible? Does it attract the right customers and repel the wrong ones? Is there a memorable idea at the core? Would people talk about this?

Expert 5 — The Customer's Advocate (Think: A consumer protection journalist): Reviews from the customer's perspective. Are promises being kept? Is the value real? Are there any "gotchas" or disappointments waiting post-purchase? Would a customer feel good about this purchase 6 months later? Is the relationship being started on an honest foundation?

For each expert: 3-5 specific recommendations with rationale, priority ranking, and the single most impactful change they would make.

Grand synthesis: The 5 changes that would make the biggest collective impact, in priority order.`,
    icon: "GraduationCap"
  },
];

// ============================================================
// 5. Front-End Subcategories
// ============================================================

export const frontEndSubcategories = [
  { id: 'editorial', name: 'Editorial / Content', description: 'Advertorials, listicles, and content-driven pages' },
  { id: 'long-form', name: 'Long-Form Sales', description: 'Sales letters and persuasion pages' },
  { id: 'video', name: 'Video-Based', description: 'VSL and hybrid video pages' },
  { id: 'interactive', name: 'Interactive', description: 'Quizzes, calculators, and tools' },
  { id: 'lead-magnet', name: 'Lead Magnets', description: 'Squeeze pages and list builders' },
  { id: 'event', name: 'Events', description: 'Webinar and event registration' },
];
