// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dra7400', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of David R. Adams',
    description: 'Highly skilled Information Technology Professional with a broad range of experience over the past 30 years. From entry level support to executive management. Experienced in designing, implementing and maintaining complex systems. Also Proficient in both front-end and back-end development, expertise in multiple programming languages and frameworks, design, administration as well as troubleshooting. adept at working in a fast-paced environment and collaborating with cross-functional teams to deliver projects on time and within budget.',
    imageURL: '',
  },
  social: {
    linkedin: 'david-adams-8b22529',
    x: 'dra7400',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://dra7400.pythonanywhere.com/',
    phone: '',
    email: 'dra7400@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Imagination Guild, LLC',
      position: 'Consultant/Developer',
      from: '2023',
      to: 'Present',
      companyLink: 'http://www.imaginationguild.com/',
    },
    {
      company: 'Freelance',
      position: 'Full stack Developer / Consultant',
      from: '2010',
      to: 'Present',
    },
    {
      company: 'B.I.S.',
      position: 'Senior Information Systems Engineer',
      from: '2014',
      to: '2020',
    },
        {
      company: 'Gulf Distributing Holdings',
      position: 'Director of Information Technology',
      from: '2010',
      to: '2014',
    },
        {
      company: 'Callis Communications',
      position: 'Director of Sales Engineering / Technical Support',
      from: '2009',
      to: '2010',
    },
    {
      company: 'LCSI',
      position: 'Senior Systems Engineer/Developer',
      from: '2005',
      to: '2009',
    },
    {
      company: 'Alabama Marine Mammal Stranding Network',
      position: 'Director of Operations/Chief Scientist/Principal Investigator',
      from: '2005',
      to: '2008',
    },
        {
      company: 'Keystone Capital Management',
      position: 'IT Manager',
      from: '2004',
      to: '2005',
    },
        {
      company: 'Bay Tech, LLC',
      position: 'Senior Information Systems Engineer/Developer',
      from: '2001',
      to: '2004',
    },
        {
      company: 'Inchcape Shipping Services',
      position: 'Technical Project Manager/Disaster Recovery Specialist',
      from: '2000',
      to: '2001',
    },
    {
      company: 'United States Army Corps of Engineers',
      position: 'Network Administrator/Communications Engineer',
      from: '1999',
      to: '2000',
    },
        {
      company: 'Ameristar Casino',
      position: 'M.I.S. Communications, Electronics, IT Technician',
      from: '1995',
      to: '1999',
    },
  ],
  certifications: [
     {
      agency: 'London App Brewery',
      Cert: 'Web Development',
    },
       {
      agency: 'London App Brewery',
      Cert: '100 Days of Code Challenge - Python',
    },
       {
      agency: 'Noble Work Foundation',
      Cert: 'Python Zero to Hero',
    },
       {
      agency: 'Noble Work Foundation',
      Cert: 'Python for Ethical Hackers',
    },
       {
      agency: 'HackerRank',
      Cert: 'CSS',
    },
       {
      agency: 'HackerRank',
      Cert: 'JavaScript Intermediate',
    },
       {
      agency: 'HackerRank',
      Cert: 'JavaScript Basic',
    },
         {
      agency: 'HackerRank',
      Cert: 'Python',
    },
         {
      agency: 'Udemy',
      Cert: 'Python for Data Science and Machine',
    },
           {
      agency: 'Udemy',
      Cert: 'Ethical Hacking',
    },
           {
      agency: 'Citrix',
      Cert: 'Xenserver',
    },
             {
      agency: 'Microsoft',
      Cert: 'MCSE',
    },
            {
      agency: 'Microsoft',
      Cert: 'MCP',
    },
            {
      agency: 'SonicWALL',
      Cert: 'SNSA',
    },
            {
      agency: 'SonicWALL',
      Cert: 'SNSP',
    },
            {
      agency: 'CompTIA',
      Cert: 'Coverged Technology Professional',
    },
            {
      agency: 'CompTIA',
      Cert: 'Network +',
    },
            {
      agency: 'CompTIA',
      Cert: 'Security +',
    },
            {
      agency: 'CompTIA',
      Cert: 'A+',
    },
  ],
  educations: [
    {
      institution: 'Massachusets Institute of Technology',
      degree: 'Certificate - Computational Thinking and Data Science',
    },
     {
      institution: 'Massachusets Institute of Technology',
      degree: 'Certificate - Computational Thinking Using Python',
    },
     {
      institution: 'Massachusets Institute of Technology',
      degree: 'Certificate - Computer Science and Programming Using Python',
    },
    {
      institution: 'The University of Southern Mississippi',
      degree: 'BASc',
    },
     {
      institution: 'Hinds Community College',
      degree: 'AA',
    },
  ],
  military: [
    {
      branch: 'United States Navy - R',
      country: 'US',
      rank: 'Chief Petty Officer',
      rate: 'Information Technology',
      group: 'Navy Special Warefare Group 4',
      unit: 'Mobile Inshore Undersea Warfare Unit 212',
      unit: 'SBU 22',
      time: '1991 - 2009',
      },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/dra7400/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
