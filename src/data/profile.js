// Personal details. Every section of the site reads from this file,
// so this is the first place to edit when something changes.
export const profile = {
  name: 'Nishadi Rajasekara',
  firstName: 'Nishadi',
  headline: 'IT Undergraduate · University of Moratuwa',
  tagline:
    'I bridge the gap between business needs and technical solutions: from the first stakeholder conversation and user story to clean, working software.',
  photo: '/profile.jpg',

  // CV downloads (PDFs live in /public/cv). Shown in the hero menu and the CV section.
  cvs: [
    {
      id: 'ba',
      label: 'Business Analyst CV',
      note: 'Requirements, user stories, Jira & process analysis',
      file: '/cv/Nishadi_Rajasekara_CV_Business_Analyst.pdf'
    },
    {
      id: 'se',
      label: 'Software Engineer CV',
      note: 'Full-stack: React, Node.js, Go, PostgreSQL & Docker',
      file: '/cv/Nishadi_Rajasekara_CV_Software_Engineer.pdf'
    }
  ],

  email: 'nishadirajasekara648@gmail.com',
  phone: '+94 75 776 0565',
  location: 'Gampaha, Sri Lanka',
  github: 'https://github.com/Nishadi648',
  linkedin: 'https://www.linkedin.com/in/nishadi-rajasekara/',
  openTo: 'Business Analyst & Software Engineering internships',

  about: [
    'I’m an IT undergraduate at the Institute of Technology, University of Moratuwa. I enjoy understanding how work really happens, finding where it breaks, and shaping requirements that both stakeholders and developers can rely on.',
    'Because I also build software end to end, I can follow an idea all the way through: elicit and document the requirement, model the process, write the user stories, and then design and build the API, database and interface that deliver it.'
  ],

  quickFacts: [
    { label: 'Studying', value: 'NDT in Information Technology' },
    { label: 'Current GPA', value: '3.67' },
    { label: 'Path 01', value: 'Business Analysis' },
    { label: 'Path 02', value: 'Software Engineering' }
  ],

  // The two career paths shown on the home page.
  paths: [
    {
      id: 'ba',
      title: 'Business Analyst',
      intro:
        'Turning business needs into clear requirements, process models and user stories that teams can build from.',
      points: [
        'Requirements gathering & elicitation',
        'User stories with acceptance criteria',
        'Process modelling with BPMN & UML',
        'Backlog management in Jira (Agile / Scrum)'
      ],
      cta: 'View BA projects'
    },
    {
      id: 'dev',
      title: 'Software Engineer',
      intro:
        'Building full-stack applications end to end: front ends, REST APIs, databases and the setup that runs them.',
      points: [
        'Full-stack web apps with React & Vue.js',
        'REST APIs with Node.js / Express & Go',
        'Data layers on PostgreSQL, MongoDB & MySQL',
        'Docker, Git / GitHub & Agile delivery'
      ],
      cta: 'View software engineering projects'
    }
  ],

  skillGroups: [
    {
      path: 'ba',
      title: 'Business Analysis',
      skills: [
        'Requirements Engineering',
        'Stakeholder Analysis',
        'User Stories & Acceptance Criteria',
        'Process Improvement',
        'BPMN',
        'UML Diagrams',
        'Agile / Scrum',
        'Jira'
      ]
    },
    {
      path: 'dev',
      title: 'Software Engineering',
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'Go (Golang)',
        'SQL',
        'React.js',
        'Vue.js',
        'HTML5 / CSS3',
        'Node.js',
        'Express.js',
        'Spring Boot',
        'REST APIs',
        'Firebase Auth',
        'PostgreSQL',
        'MongoDB',
        'MySQL'
      ]
    },
    {
      path: 'tools',
      title: 'Tools',
      skills: ['Jira', 'Postman', 'Git & GitHub', 'Docker', 'GitHub Actions', 'Figma']
    }
  ],

  education: [
    {
      title: 'National Diploma in Information Technology',
      place: 'Institute of Technology, University of Moratuwa',
      period: '2025 – Present',
      note: 'Current GPA: 3.67'
    },
    {
      title: 'G.C.E. Advanced Level (Physical Science)',
      place: 'Bandaranayake Central College, Veyangoda',
      period: '2019 – 2021',
      note: ''
    },
    {
      title: 'NVQ Level III & IV in Information & Communication Technology',
      place: 'National Vocational Qualification',
      period: '2023',
      note: ''
    }
  ],

  experience: [
    {
      title: 'Bank Trainee',
      place: 'People’s Bank, Nittambuwa',
      period: 'Feb 2024 – Oct 2024',
      note: 'Handled customer operations and supported digital service tools, building strong communication and user-empathy skills.'
    },
    {
      title: 'ICT Technician',
      place: 'Global Leasing Limited, Colombo 10',
      period: 'Mar 2023 – Sep 2023',
      note: 'Supported internal system users and learned first-hand where software confuses or slows people down.'
    }
  ],

  certifications: [
    { name: 'Introduction to CBAP', issuer: 'Simplilearn', year: '2026', path: 'ba' },
    { name: 'Get started quickly with Jira', issuer: 'Atlassian University', year: '2026', path: 'ba' },
    { name: 'Personalize how you work in Jira', issuer: 'Atlassian University', year: '2026', path: 'ba' },
    { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Skill Builder', year: '2026', path: 'dev' },
    { name: 'Python Essentials 1 & Linux Essentials', issuer: 'Cisco Networking Academy', year: '2026', path: 'dev' },
    { name: 'AI for Beginners', issuer: 'HP LIFE', year: '2026', path: 'dev' }
  ]
};