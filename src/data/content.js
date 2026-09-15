// Shared content layer. Recruiter / Design-Product / Explore modes, and every
// page, read from this single source — no per-mode content duplication.

export const evidence = [
  {
    number: '15%',
    label: 'Completion',
    desc: 'Increase in completed submissions following a trust-focused UX experiment (Verivox).',
  },
  {
    number: '60→10',
    label: 'Preparation',
    desc: 'Reduction in prep time enabled by systems built for repeatable, scalable decisions.',
  },
  {
    number: '30+',
    label: 'Validation',
    desc: 'Rounds of user testing and validation run across product and process work.',
  },
  {
    number: '0→1',
    label: 'Ownership',
    desc: 'Full-scope product ownership, from first concept to shipped platform (dility).',
  },
]

export const projects = [
  {
    slug: 'verivox',
    number: '01',
    name: 'Verivox',
    dates: '2020–2022',
    category: 'Banking, Germany',
    shortDesc: 'Making complex financial decisions easier to trust.',
    recruiterDesc: 'Making complex financial decisions easier to trust.',
    evidence: { number: '15%', label: 'Completion' },
    teaserPlaceholder:
      'TEASER IMAGE — Verivox: interface fragment or flow from the sign-up process or trust-microcopy work (e.g. a redacted screen, a flow diagram, or a UI detail). Avoid stock photography — should read as a real design artifact.',
  },
  {
    slug: 'dility',
    number: '02',
    name: 'dility',
    dates: '2022–2024',
    category: 'SaaS / Product, 0→1',
    shortDesc: 'Building clarity into a remote workshop platform.',
    recruiterDesc: 'Building clarity into a remote workshop platform.',
    evidence: { number: '0→1', label: 'Ownership' },
    teaserPlaceholder:
      'TEASER IMAGE — dility: workshop canvas, product architecture, or prototype fragment from the platform. Should read as a real design artifact, not stock photography.',
  },
  {
    slug: 'teamworx-security',
    number: '03',
    name: 'TeamWorx Security',
    dates: '2025',
    category: 'Cybersecurity SaaS, 3-month engagement',
    shortDesc: 'Bringing audit rigor and 0-to-1 systems to a fast-moving security platform.',
    recruiterDesc: 'Bringing audit rigor and 0-to-1 systems to a fast-moving security platform.',
    evidence: null,
    teaserPlaceholder:
      'TEASER IMAGE — TeamWorx Security: a UX audit scoring artifact, a component from the design system built 0-to-1, or a workflow/system structure visual. Should read as a real design artifact, not stock photography.',
  },
]

export const productStories = {
  verivox: {
    name: 'Verivox',
    meta: 'Germany, 2020–2022',
    role: 'UX Designer, IxD Designer, UI Designer, Information Architect',
    tools: 'Sketch, Miro, InVision, Confluence & Jira',
    sections: [
      {
        label: 'Section A — Post Sign Up Process',
        problem:
          'As more banks with different sign-up requirements were added to the database over time, the existing workflow and backend became too complex to keep up — an overwhelming, outdated flow with no clear step process or recognized customer service.',
        role: 'UX/IxD/UI/IA across the redesign.',
        change:
          'Optimized the workflow within backend constraints; updated the layout with adaptable components; created internal wording and data structure (in Jira) so new banks could be added more easily going forward; improved visibility of the step process and customer service.',
        why: 'Reduced complexity for users navigating varied bank requirements, and reduced backend maintenance effort as a secondary benefit.',
        evidenceNote:
          'Tested iteratively with users through to design freeze; conversion monitored post-launch. There is no single headline number for this piece specifically — this is process-based evidence, not a metric.',
      },
      {
        label: 'Section B — Building Trust Through UX Microcopy',
        problem:
          'Users were hesitant to complete the credit sign-up form due to missing data security messaging.',
        role: 'Led the microcopy strategy and testing; collaborated directly with legal/compliance and product on wording.',
        change:
          'Added "Your data is safe and encrypted" near the input fields, testing placement (above vs. below), tone, and color.',
        why: 'A small copy change addressing trust in a privacy-sensitive flow — reduced friction and signaled transparency about data handling.',
        evidenceNote:
          '15% increase in form submissions. No secondary metrics or qualitative feedback are available beyond this figure — user testing during development was run by a different department. That is a scope boundary, not a gap.',
        evidenceHeadline: { number: '15%', label: 'Form submissions' },
      },
    ],
  },
  dility: {
    name: 'dility',
    meta: 'Co-Founder & Head of UX Strategy — May 2022 – Dec 2024, Remote, Worldwide',
    role: 'Co-Founder & Head of UX Strategy — full ownership across product design, user research, team leadership/agile operations, fundraising/investor engagement, and external partnerships. True 0-to-1, both product and company-building.',
    sections: [
      {
        label: null,
        problem:
          'An early-stage SaaS platform needed to translate complex, human-facilitated workshop and collaboration workflows into intuitive, scalable digital experiences.',
        change:
          'Ran continuous user research and usability testing loops to refine workflows; introduced agile working practices; shaped and communicated the product vision and value proposition to investors; represented the company externally, negotiating strategic partnerships.',
        why: 'After an early pivot (the original concept was too narrow) and a year-long delay before that pivot, the team confronted a defining question during their last accelerator — "Are we solving the one problem that causes enough pain for people to pay for it?" They realized they\'d been solving too many problems instead of the one that mattered.',
        evidenceNote:
          '20% increase in user satisfaction; 5 Letters of Intent (LOIs) validating early market demand; 20% reduction in project timelines from agile process changes; 25% increase in positive stakeholder feedback during fundraising. The company did not secure the funding needed to scale further, and did not reach the outcome the team had hoped for.',
        evidenceStats: [
          { number: '20%', label: 'User satisfaction' },
          { number: '5', label: 'Letters of Intent' },
          { number: '20%', label: 'Timeline reduction' },
          { number: '25%', label: 'Stakeholder feedback' },
        ],
        closingLine: 'Recurring users are the real proof of value — not just for investors, but for yourself.',
      },
    ],
  },
  'teamworx-security': {
    name: 'TeamWorx Security',
    meta: 'UX/UI Designer — May–Jul 2025, Columbia, Maryland, Remote',
    confidentialNote:
      'This engagement included work on a future map/roadmap feature that is confidential and excluded from both sections below.',
    sections: [
      {
        label: 'Section A — UX Audit & Accessibility Prioritization',
        problem: 'No existing audit rigor or prioritization framework for UX issues on the platform.',
        role: 'Built a weighted UX audit scoring framework from scratch.',
        change:
          'Criteria scored -1 to 1, cross-referenced against User Pain and Business Pain (1–5 scale), producing an Impact Score (%) per category, graded A–D (Excellent Experience → UX at Risk). Covered heuristics (Clarity, Consistency, Feedback, Fitts\'s / Hick\'s / Jakob\'s / Miller\'s Laws, Gestalt) and WCAG POUR pillars. Prioritized recommendations at the intersection of "UX at Risk" scores and elevated business pain, run through a feasibility pass with engineering rather than handed off as a mandate. Accessibility — color contrast, font size, positioning, grouping — was the headline focus.',
        why: 'Focused limited engineering time on what was both broken and costly to the business, not just what was broken.',
        evidenceNote:
          'Color contrast and font size changes were greenlit; other changes (e.g. input field formatting) were blocked by code constraints — an honest, partial outcome. New components built following UX laws and principles received positive feedback from user testers.',
      },
      {
        label: 'Section B — 0-to-1 Systems Building',
        problem: 'No design system, no single source of truth for UX decisions, no documented feature request process.',
        role: 'Built these systems from the ground up during the engagement.',
        change:
          'Design system built from scratch (first set of reusable components, greenfield); UX Hub established as single source of truth; feature request process created; "UX in Action" summaries introduced to communicate design rationale, decisions, and expected outcomes across teams.',
        why: 'Gave a fast-moving cybersecurity SaaS team foundational infrastructure for consistent, communicable design decisions where none existed before.',
        evidenceNote:
          'Systems and processes were stood up and adopted within a 3-month engagement — a scope and speed indicator rather than a metric.',
      },
    ],
  },
}

export const philosophy = [
  {
    title: 'My Design Philosophy',
    lhs: 'Experience Design',
    parts: [
      'Fast & iterative approach',
      'Co-Creation',
      'Data-driven insights',
      'Harmony between business goals, user needs & stakeholder expectations',
    ],
  },
  {
    title: 'My Leadership Style',
    lhs: 'Leadership',
    parts: [
      'Empathy',
      'Collaboration',
      'Clear guidance',
      'A culture that embraces failure',
      'Encouragement of individual growth',
    ],
  },
]

export const essays = [
  {
    title: 'How to Work With Me (Including Template)',
    date: 'Sept 30, 2025',
    dek: 'A personal working-style guide — how I work best, what doesn\'t work, and what others can expect from me, framed as a reusable template.',
    url: 'https://www.linkedin.com/pulse/how-work-me-you-including-template-laura-olivarez-9ptzf/',
  },
  {
    title: 'Can You Design a Space You Don\'t Understand?',
    date: 'April 2026',
    dek: 'A solo design experiment on observability dashboards (SignalFlow) — reframing alert fatigue and fragmented tools through a research-driven prototyping process, and reflecting on the limits of fast prototyping without replacing real user understanding.',
    url: 'https://www.linkedin.com/pulse/can-you-design-space-dont-understand-laura-olivarez-dqg0c/',
  },
  {
    title: 'The STAR Framework Can Change How You Manage (And Communicate in Life)',
    date: 'Aug 19, 2025',
    dek: 'On the Stop-Think-Ask-Result method for resisting the instinct to jump straight to solutions.',
    url: 'https://www.linkedin.com/pulse/star-framework-can-change-how-you-manage-communicate-life-olivarez-bavyf/',
  },
  {
    title: 'UX Designer is Learning Python (And Here\'s Why It\'s Not Crazy)',
    date: 'Aug 13, 2025',
    dek: 'On becoming a "UX designer who speaks fluent data."',
    url: 'https://www.linkedin.com/pulse/ux-designer-learning-python-laura-olivarez-cjknf/',
  },
]

export const labItems = [
  {
    title: 'Relaxing Creatures Dreamscape (RCD)',
    status: 'Active',
    since: 'Live since January 2025',
    desc: 'A YouTube content brand producing AI-generated fantasy-creature companion videos for relaxation, across Sleep, Study, and Meditation pillars. Long-form looped ambient videos (15–60 min) plus daily animated "Guardian Shorts," cross-posted to Instagram and Facebook as "Fantasy Dreamscape."',
    stats: '146+ long-form videos · 149+ Shorts · ~171 subscribers (early Sept 2026)',
    tools: 'Epidemic Sound, DaVinci Resolve, Claude, ChatGPT, Flow / Veo, Suno',
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/@RelaxingCreaturesDreamscape' },
      { label: 'Site', url: 'https://relaxingcreaturesdreamscape.com' },
      { label: 'Instagram', url: 'https://www.instagram.com/relaxingcreaturesdreamscape' },
      { label: 'Facebook', url: 'https://www.facebook.com/relaxingcreaturesdreamscape' },
    ],
  },
  {
    title: 'Where Joy Lives',
    status: 'Active',
    since: 'Started Feb 2026',
    desc: 'A music project on Suno exploring how affirmations become music — turning emotional healing, self-trust, calm, and empowerment into something tangible. Intentionally collaborative.',
    stats: '22 songs · 47 followers · 2,000+ plays (Sept 2026)',
    tools: null,
    links: [{ label: 'Suno', url: 'https://suno.com/@relaxingcreaturesdreamscape' }],
  },
  {
    title: 'Data Analytics Capstone — Safer Times in Atlanta',
    status: 'Published v0.4',
    since: 'First published April 27, 2026',
    desc: 'Google Data Analytics Certificate capstone: a Tableau dashboard exploring reported incident patterns in Atlanta to support informed, confidence-based decisions about independent city exploration — framed around awareness and decision support, not labeling places "safe" or "unsafe." Roadmap for v2: a larger time range, Python for datasets beyond spreadsheet limits, and refined dashboard UX.',
    stats: null,
    tools: null,
    links: [
      {
        label: 'Tableau dashboard',
        url: 'https://public.tableau.com/app/profile/laura.olivarez/viz/SaferTimesinAtlanta/Version0_4',
      },
      {
        label: 'Presentation',
        url: 'https://docs.google.com/presentation/d/14z8sDuvNoeVqZ-5_2DYuvCroZrb3b-NsH9QI4N73IsM/edit',
      },
    ],
  },
]

export const timeline = [
  { year: '2017', label: 'Design Agency, Austria' },
  { year: '2020', label: 'Verivox, Germany' },
  { year: '2022', label: 'Move to US' },
  { year: '2022', label: 'dility.io' },
  { year: '2025 – Present', label: 'UX / Product Design Consultant' },
  { year: '2025', label: 'TeamWorx Security (3-month engagement)' },
]

export const rooms = [
  { key: 'work', label: 'Work', path: '/work', desc: 'Case studies from real projects: Verivox, dility, TeamWorx Security.' },
  { key: 'thinking', label: 'Thinking', path: '/thinking', desc: 'Essays and reflections on UX, design philosophy, and leadership.' },
  {
    key: 'lab',
    label: 'Lab',
    path: '/lab',
    desc: 'Personal experiments outside client work: an AI-generated relaxation channel, an affirmation-driven music project, and a first dive into data analytics.',
  },
  { key: 'about', label: 'About', path: '/about', desc: 'Who I am and how I got here.' },
  {
    key: 'product-stories',
    label: 'Product Stories',
    path: '/product-stories',
    desc: 'The full depth behind each case study: problem, role, what changed, why it mattered.',
  },
]

export const colophon = `This site was designed and built in collaboration with Claude, using Claude Code, and hosted on Hostinger — because a portfolio about turning complexity into clarity should be honest about its own process, tools included.

Typeset in Newsreader and Geist. Built with more care than deadline pressure usually allows.

If something here still feels like it's finding its shape — so am I. This site changes as I do.`

export const linkedInUrl = 'https://www.linkedin.com/in/lauraolivarez/'
export const resumeUrl = '/Laura-Olivarez-Resume.pdf'
