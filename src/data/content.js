// Shared content layer. Recruiter / Design-Product / Explore modes, and every
// page, read from this single source — no per-mode content duplication.

import verivoxPostSignupTeaser from '../assets/images/verivox-post-signup-teaser.jpg'
import verivoxMicrocopyBanner from '../assets/images/verivox-microcopy-banner.jpg'
import dilityRebuildImage from '../assets/images/dility-rebuild-magic-patterns.jpg'
import dilityWixImage from '../assets/images/dility-wix-early-landing.jpg'
import dilityGrowthImage from '../assets/images/dility-growth-projection.png'

export const evidence = [
  {
    number: '15%',
    label: 'Completion',
    desc: 'Increase in completed submissions following a trust-focused UX experiment (Verivox).',
    href: '/product-stories/verivox#form-submissions-15',
  },
  {
    number: '60→10',
    label: 'Preparation',
    desc: 'Reduction in prep time enabled by systems built for repeatable, scalable decisions.',
    href: '/product-stories/dility#prep-time-60-10',
  },
  {
    number: '30+',
    label: 'Validation',
    desc: 'Rounds of user testing and validation run across product and process work.',
    href: '/product-stories/dility#research-sessions-30',
  },
  {
    number: '0→1',
    label: 'Ownership',
    desc: 'Full-scope product ownership, from first concept to shipped platform (dility).',
    href: '/product-stories/dility#true-0-to-1',
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
    companyBlurb:
      'A leading German comparison platform for energy, telecom, insurance, loans, and financial products, supporting digital comparison and switching experiences for 8M+ customers across high-trust consumer decision journeys.',
    companyUrl: 'https://www.verivox.de/',
    companyNote: null,
    // Two separate case studies, each with its own outcome. The 15% belongs
    // only to the trust microcopy one; the post sign-up process has no number.
    evidence: null,
    caseStudies: [
      {
        key: 'post-signup',
        title: 'Post Sign Up Process',
        storyHash: '#post-signup-process',
        outcome: { text: 'Less backend work', label: 'Backend maintenance effort' },
        image: verivoxPostSignupTeaser,
        alt: 'Before and after comparison of the Verivox post sign-up flow on mobile — the redesigned version consolidates loan details, next steps, and actions into a clearer, less cluttered screen.',
      },
      {
        key: 'microcopy',
        title: 'Building Trust Through UX Microcopy',
        storyHash: '#trust-microcopy',
        outcome: { text: '+15%', label: 'Form submissions' },
        image: verivoxMicrocopyBanner,
        alt: "Two mobile screens of the Verivox credit sign-up form. The left screen shows a short reassurance line in the contact details area. The right screen shows a green security banner at the top of the form, above the step indicator.",
        caption: "The credit sign-up form on Verivox's live site today, showing the two trust elements: a short reassurance line next to the contact fields (left) and a security banner at the top of the form (right). The wording shown is the current live version and may differ from what we first shipped. No 'before' screen is shown, because before the change these elements simply weren't there. Result of the original change: +15% form submissions.",
      },
    ],
  },
  {
    slug: 'dility',
    number: '02',
    name: 'dility',
    dates: '2022–2024',
    category: 'SaaS / Product, 0→1',
    shortDesc: 'Building clarity into a remote workshop platform.',
    recruiterDesc: 'Building clarity into a remote workshop platform.',
    companyBlurb:
      'Early-stage B2B SaaS platform designed to simplify remote workshop preparation, collaboration, participant onboarding, and post-workshop validation.',
    companyUrl: null,
    companyNote: '(site no longer live — project concluded)',
    evidence: { number: '0→1', label: 'Ownership' },
    teaserImage: dilityRebuildImage,
    teaserImageAlt: 'Screenshot of the partially rebuilt dility dashboard.',
    teaserCaption: 'Dility app, partially rebuilt in Magic Patterns. Work in progress.',
  },
  {
    slug: 'teamworx-security',
    number: '03',
    name: 'TeamWorx Security',
    dates: '2025',
    category: 'Cybersecurity SaaS, 3-month engagement',
    shortDesc: 'Bringing audit rigor and 0-to-1 systems to a fast-moving security platform.',
    recruiterDesc: 'Bringing audit rigor and 0-to-1 systems to a fast-moving security platform.',
    companyBlurb:
      'Cybersecurity and observability dashboard project focused on risk monitoring, alert prioritization, technical workflows, and decision support for security teams.',
    companyUrl: 'https://www.teamworxsecurity.com/',
    companyNote: null,
    evidence: null,
    teaserPlaceholder:
      'COMING SOON: image of the UX audit scoring framework — Impact Score grading system (A–D) and example scoring breakdown, illustrated with sample data.',
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
        anchorId: 'post-signup-process',
        label: 'Section A — Post Sign Up Process',
        problem:
          'As more banks with different sign-up requirements were added to the database over time, the existing workflow and backend became too complex to keep up — an overwhelming, outdated flow with no clear step process or recognized customer service.',
        role: 'UX/IxD/UI/IA across the redesign.',
        change:
          'Optimized the workflow within backend constraints; updated the layout with adaptable components; created internal wording and data structure (in Jira) so new banks could be added more easily going forward; improved visibility of the step process and customer service.',
        why: 'Reduced complexity for users navigating varied bank requirements, and reduced backend maintenance effort as a secondary benefit.',
        evidenceNote:
          'Tested iteratively with users through to design freeze; conversion monitored post-launch. There is no single headline number for this piece specifically — this is process-based evidence, not a metric.',
        image: verivoxPostSignupTeaser,
        imageAlt: 'Before and after comparison of the Verivox post sign-up flow on mobile — the redesigned version consolidates loan details, next steps, and actions into a clearer, less cluttered screen.',
      },
      {
        anchorId: 'trust-microcopy',
        label: 'Section B — Building Trust Through UX Microcopy',
        problem:
          'Users were hesitant to complete the credit sign-up form due to missing data security messaging.',
        role: 'Led the microcopy strategy and testing; collaborated directly with legal/compliance and product on wording.',
        change:
          'Added "Your data is safe and encrypted" near the input fields, testing placement (above vs. below), tone, and color.',
        why: 'A small copy change addressing trust in a privacy-sensitive flow — reduced friction and signaled transparency about data handling.',
        evidenceNote: [
          { text: '15% increase in form submissions.', id: 'form-submissions-15' },
          {
            text: 'No secondary metrics or qualitative feedback are available beyond this figure — user testing during development was run by a different department.',
          },
          { text: 'That is a scope boundary, not a gap.' },
        ],
        figure: {
          image: verivoxMicrocopyBanner,
          alt: "Two mobile screens of the Verivox credit sign-up form. The left screen shows a short reassurance line in the contact details area. The right screen shows a green security banner at the top of the form, above the step indicator.",
          caption: "The credit sign-up form on Verivox's live site today, showing the two trust elements: a short reassurance line next to the contact fields (left) and a security banner at the top of the form (right). The wording shown is the current live version and may differ from what we first shipped. No 'before' screen is shown, because before the change these elements simply weren't there. Result of the original change: +15% form submissions.",
        },
        evidenceHeadline: { number: '15%', label: 'Form submissions' },
      },
    ],
  },
  dility: {
    name: 'dility',
    meta: 'Co-Founder & Head of UX Strategy — May 2022 – Dec 2024, Remote, Worldwide',
    role: [
      {
        text: 'Co-Founder & Head of UX Strategy — full ownership across product design, user research, team leadership/agile operations, fundraising/investor engagement, and external partnerships.',
      },
      { text: 'True 0-to-1, both product and company-building.', id: 'true-0-to-1' },
    ],
    sections: [
      {
        label: null,
        problem:
          'An early-stage SaaS platform needed to translate complex, human-facilitated workshop and collaboration workflows into intuitive, scalable digital experiences.',
        change:
          'Ran continuous user research and usability testing loops to refine workflows; introduced agile working practices; shaped and communicated the product vision and value proposition to investors; represented the company externally, negotiating strategic partnerships.',
        whyAnchorId: 'why-it-mattered',
        why: 'After an early pivot (the original concept was too narrow) and a year-long delay before that pivot, the team confronted a defining question during their last accelerator — "Are we solving the one problem that causes enough pain for people to pay for it?" They realized they\'d been solving too many problems instead of the one that mattered.',
        evidenceNote: [
          { text: '20% increase in user satisfaction.' },
          { text: '6 letters of intent validated early market demand.' },
          {
            text: 'Reduced workshop setup time from roughly 60 minutes to 10 by simplifying fragmented preparation workflows and creating reusable product patterns.',
            id: 'prep-time-60-10',
          },
          { text: '25% increase in positive stakeholder feedback during fundraising.' },
          { text: '30+ user research sessions, totaling 1,200+ hours of validation.', id: 'research-sessions-30' },
          {
            text: 'The company did not secure the funding needed to scale further, and did not reach the outcome the team had hoped for.',
          },
        ],
        evidenceStats: [
          { number: '20%', label: 'User satisfaction' },
          { number: '6', label: 'Letters of Intent' },
          { number: '60→10', label: 'Prep time (minutes)' },
          { number: '25%', label: 'Stakeholder feedback' },
          { number: '30+', label: 'Research sessions' },
        ],
        closingLine: 'Recurring users are the real proof of value — not just for investors, but for yourself.',
      },
    ],
    // The journey block (source: dility-journey-draft-v6.md, sections B, D, E,
    // F, G). Text in **double asterisks** renders bold. The v6 draft has no
    // inline [CONFIRM] markers; open points are listed in the hand-off notes.
    journey: {
      title: 'The journey: from round table to code',
      roleLabel: 'Co-Founder & Head of UX Strategy',
      steps: [
        {
          label: 'The gap',
          heading: 'A round table, and a tool nobody had.',
          paragraphs: [
            'In November 2020 I facilitated a UX round table on human-centered design. One thing became clear fast: no single tool combined the functions creators in every field needed, from user research and UX to project management, HR and customer support.',
            'Afterwards, a participant approached me with the idea of creating dility. That started the whole journey.',
          ],
        },
        {
          label: 'Proving there was something there',
          heading: 'Proof of market first, product second.',
          paragraphs: [
            'I joined as an advisor on the user experience side, and the first team formed around a startup advisor and me. The startup advisor also helped us establish our OKRs, which guided the work from the start.',
            'Before building anything, we ran two leap-of-faith tests.',
          ],
          tests: [
            {
              label: 'Test 1',
              title: 'Do competing products exist?',
              rows: [
                {
                  label: 'Assumption',
                  text: 'At least five competing products exist, including in-house tools at larger companies.',
                },
                {
                  label: 'How we checked',
                  text: 'Market research on existing programs, plus asking larger companies directly whether they use internal programs that cover all these areas.',
                },
                {
                  label: 'Goal',
                  text: 'Get an overview of the market and decide whether our idea could stand up to it. The test counted as passed if we found five competing products within 2 hours of online research and 3 hours of company inquiries.',
                },
                {
                  label: 'Result',
                  text: '**Passed.** We found eight. In-house approaches and frameworks at IBM (Design Thinking framework and toolkit), IDEO (Field Guide to Human-Centered Design), Designaffairs (a set of tools and programs) and HubSpot (an internal tool for automated validation of results). External products: Procontext, Maze, Optimizely and SAP Build.',
                },
              ],
            },
            {
              label: 'Test 2',
              title: 'Is there interest from users?',
              rows: [
                {
                  label: 'Hypothesis',
                  text: '60% of visitors would spend 1–2 minutes on the site, 5% would try to register, and 5% would use the feedback option.',
                },
                {
                  label: 'How we checked',
                  text: 'A LinkedIn ad campaign ran from **19 to 28 January 2021**.',
                },
                {
                  label: 'Result',
                  figures: [
                    {
                      source: 'LinkedIn campaign data',
                      items: [
                        '4,500 impressions',
                        '26 clicks',
                        'Click-through rate of 0.57% (average: 0.44%)',
                        '84 website visits',
                        'About 50 of them (60%) stayed longer than a minute',
                      ],
                    },
                    {
                      source: 'Site analytics',
                      items: ['52 visitors', 'Average stay of 48 seconds, under our 1–2 minute target'],
                    },
                  ],
                  paragraphs: [
                    'We read this as a mixed signal. People were curious enough to click, but once on the site they stayed less than we had hoped. That was a first hint of what our user tests confirmed later: the topic was too narrow.',
                    "We also knew that an ad campaign with limited resources, and therefore limited time, is not strong proof. But when you don't have other options, you take what you get.",
                  ],
                },
              ],
            },
          ],
          afterParagraphs: [
            'Over the following months we worked on a digital design thinking platform, meant to make design thinking easy to access, time-saving and understandable for everyone. My co-founder and I still had full-time jobs, so progress was slow but steady, and the time was as much about learning how a startup works as about building the solution.',
            'In April 2021, my experience in two different worlds (agency and e-commerce) helped me shape the first rough structure for the first wireframes. We took them to one of our experts for feedback.',
          ],
        },
        {
          label: 'What the first tests changed',
          heading: 'Two signals, one conclusion.',
          paragraphs: [
            "Finding the right users was hard: the topic was specific, and testers had to meet certain criteria. Cold messages on LinkedIn failed. By January 2022 we had one user, an organizational designer from a founder's network.",
            'After that first round of user testing, together with the results of the LinkedIn campaign, we learned something valuable. The campaign showed interest, but the testing showed what people actually needed, and focusing only on design thinking might not be the right topic.',
            'At the beginning of 2022 we shifted to a more specific, and ultimately more scalable, focus: helping facilitators and moderators **save time preparing, running and analyzing digital workshops**. Later user tests pointed to the two parts that stood out most: **participant onboarding** and **agenda preparation**.',
          ],
          subHeading: 'How we tested.',
          subParagraphs: [
            'Over the whole journey we ran **30+ user research sessions** and spent **1,200+ hours on validation**, **60 of them in user testing with a prototype**. We followed the well-known rule of five: about five testers surface roughly 80–85% of usability issues. That is why we never went for large test groups. As a team of three, we wouldn\'t even have had the time to act on the results.',
          ],
          quotes: {
            label: 'What testers said',
            items: [
              { quote: 'The stakeholder onboarding is AMAZING!', role: 'Agency owner' },
              {
                quote: 'Very different from what I am used to, but dility is WAY more complete!',
                role: 'UX design consultant',
              },
              { quote: 'I love the toolbox! I loved it from the start and I still love it!', role: 'User researcher' },
            ],
          },
        },
        {
          label: 'Talking to people we already knew',
          heading: 'The obvious idea I almost missed.',
          paragraphs: [
            'I was still looking for users when I asked myself: why not talk to people I already know? It was so obvious that I hadn\'t thought of it. I reached out to a former colleague from Verivox who works as a user researcher, and later to another former colleague, a service designer and agency co-founder. He joined our "user alliance", and the idea came up to test dility in his live environment. A steady flow of feedback and implementation followed.',
          ],
        },
        {
          heading: 'Structure and a deadline',
          paragraphs: [
            'From June to August 2022 I took the Y Combinator Startup School course to go deeper into the startup world. In August 2022 we built a rough roadmap next to the monthly OKRs. The goal was a **coded MVP by October**. That turned out to be challenging, but we went ahead and attended both **Slush 2022** and **Wolves Summit (online)** as dility.',
          ],
          plan: {
            intro: 'We prepared Slush like a project. Our plan:',
            items: [
              {
                lead: 'Meetings:',
                text: '7 scheduled with investors, sellers and solution providers, with the whole itinerary planned.',
              },
              {
                lead: 'Product demo:',
                text: 'show a semi-live version of the web app and run real-time product demos for marketing and investor events during Slush.',
              },
              {
                lead: 'Cloud credits:',
                text: 'secure free cloud credits to replace our expired Linode free tier.',
              },
            ],
          },
          afterParagraphs: [
            'At Wolves Summit, online, the goal was to gather feedback, find collaborations and meet potential clients.',
          ],
        },
        {
          label: '2023: Tickets paid, app not launched',
          heading: 'Reality check in Helsinki.',
          paragraphs: [
            "We attended **Slush again in 2023**, with the goal of having a live app in November 2023. Problems launching the website meant we couldn't launch the application in time. The tickets were already paid for, so we went anyway to look for funding. That's where reality hit: **letters of intent don't count for investors**. What counted was active, recurring users and money coming in, and in 2023 we had neither yet.",
            // [CONFIRM] v6 (3): "That year we also joined Wolves Summit online again." is only added if
            // Wolves Summit was attended again in 2023. Left out until confirmed.
            'Alongside the product we were building **servicedesign.today**, a free community and knowledge hub for service designers (more in the [Lab](/lab)).',
          ],
        },
        {
          label: '2024: The last attempt',
          heading: 'One more try, and an honest stop.',
          paragraphs: [
            'In 2024 we worked with **i3P, the Innovative Companies Incubator of Politecnico di Torino**, which led to a 49-page business plan, and made a last attempt by joining the **Red Brick accelerator**. It made clear that, with the limited resources we had, we could not bootstrap the project. We discontinued dility at the end of 2024.',
          ],
          figure: {
            label: 'The growth projection',
            image: dilityGrowthImage,
            alt: 'Slide from the 2024 pitch showing projected users and revenue over four years.',
            caption: 'Projection from our 2024 pitch, prepared with i3P. Never realized.',
          },
          afterParagraphs: [
            'The accelerator is also where we asked the question that defines the Product Story: "Are we solving the one problem that causes enough pain for people to pay for it?"',
          ],
          pivotLink: true,
        },
      ],
      lessons: {
        label: 'What we took with us',
        items: [
          'Letters of intent and warm feedback are not the same as recurring use.',
          'Speed matters: a year before the pivot was too long.',
          'Recurring users are the real proof of value, not just for investors, but for yourself.',
        ],
      },
      reflection: {
        text: 'Read the full reflection: "A Candid Chronicle of Three Extraordinary Years" (LinkedIn)',
        url: 'https://www.linkedin.com/pulse/candid-chronicle-three-extraordinary-years-laura-olivarez-jysef/',
      },
      early: {
        image: dilityWixImage,
        alt: 'Screenshot of the early dility landing page headed "Digital Collaboration Platform".',
        caption: 'The early dility landing page: how we first described the product.',
      },
      evolution: {
        title: 'Prototype evolution',
        steps: [
          { text: 'Pain-point mapping and evaluation' },
          { text: 'User journeys' },
          { text: 'Paper drawings' },
          { text: 'Miro: low-fidelity wireframes' },
          { text: 'First website (Wix): the early landing page', image: 'early' },
          { text: 'Figma click-dummies, higher fidelity, for user testing', toBeAdded: 'To be added' },
          { text: 'Coded MVP: Next.js and React, Supabase, Google Cloud', note: 'The code no longer exists.' },
          { text: 'Rebuild in Magic Patterns: the partially rebuilt app', image: 'rebuild' },
        ],
      },
      rebuild: {
        heading: 'A bite-sized taste of the rebuild',
        paragraphs: [
          "dility was coded, but the code no longer exists, which is why the product isn't live anymore. To show what we built and thought through, I'm rebuilding it in Magic Patterns, starting from the Figma prototype we used for testing.",
          "What you can open is a **rebuilt and updated dashboard**. It doesn't show everything yet. Think of it as a small taste, and I'll improve it step by step.",
        ],
        linkLabel: 'Open the rebuild in Magic Patterns',
        linkUrl: 'https://www.magicpatterns.com/c/6c24etzq4xk6lbjrqahoyy/preview',
        status: 'WORK IN PROGRESS · A TASTE, NOT THE FULL PRODUCT',
        image: dilityRebuildImage,
        alt: 'Screenshot of the partially rebuilt dility dashboard.',
        caption: 'Dility app, partially rebuilt in Magic Patterns from the Figma prototype. Work in progress.',
      },
      ecosystem: {
        title: 'Who we talked to, events, support',
        rows: [
          { label: 'Events', text: 'Slush (Helsinki, 2022 and 2023), Wolves Summit (online), SaaStock (Austin)' },
          {
            label: 'Programs',
            text: 'Y Combinator (Startup School, 2022; co-founder matching); i3P, the Innovative Companies Incubator of Politecnico di Torino (market data and a 49-page business plan, 2024); Red Brick accelerator (2024)',
          },
          {
            label: 'Advisors',
            text: 'Four in total, across startups, service design, user experience and, toward the end, AI integration. Not all stayed for the whole journey.',
          },
          {
            label: 'Early supporters',
            text: 'A user alliance of practicing designers; an expert who gave feedback on the first wireframes',
          },
          { label: 'Agencies (talked to)', text: 'Six agencies in Poland, Austria, the UK, Spain and Finland' },
        ],
      },
    },
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
  {
    title: 'servicedesign.today',
    // Label from the draft (section J), shown in the same tag slot as the other entries' status.
    status: 'Community and knowledge hub',
    since: null,
    desc: 'A free, global knowledge hub for service designers, built alongside dility and still live and maintained. It collects templates and guides for methods like journey maps, service blueprints, stakeholder maps and personas, curated guidelines and books, a small library of articles, and a form for contributing resources. By Q4 2026 the community around it counted 533 people. We built it as a team; my part was knowledge gathering and outreach.',
    stats: '533 people in the community (Q4 2026)',
    tools: null,
    links: [
      { label: 'Visit servicedesign.today', url: 'https://servicedesign.today/' },
      { label: 'Follow on LinkedIn', url: 'https://www.linkedin.com/company/service-design-today' },
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
    desc: 'Personal experiments outside client work: an AI-generated relaxation channel, an affirmation-driven music project, a first dive into data analytics, and a community and knowledge hub for service designers.',
  },
  { key: 'about', label: 'About', path: '/about', desc: 'Who I am and how I got here.' },
  {
    key: 'product-stories',
    label: 'Product Stories',
    path: '/product-stories',
    desc: 'The full depth behind each case study: problem, role, what changed, why it mattered.',
  },
]

export const colophon = `This site was designed and built in collaboration with Claude, using Claude Code, and hosted on Vercel — because a portfolio about turning complexity into clarity should be honest about its own process, tools included.

Typeset in Newsreader and Geist. Built with more care than deadline pressure usually allows.

If something here still feels like it's finding its shape — so am I. This site changes as I do.`

export const linkedInUrl = 'https://www.linkedin.com/in/lauraolivarez/'
export const resumeUrl = '/Laura-Olivarez-Resume.pdf'
