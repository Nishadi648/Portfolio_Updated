// All projects in one list.
//   path: 'ba'  -> shows under "Business Analysis"
//   path: 'dev' -> shows under "Software Engineering"
// Projects with a `caseStudy` get their own page at /projects/<slug>.
//
// `relatedCase` on a software engineering project adds a link to its BA case study.
//
// NOTE: case-study tables (stakeholders, requirement IDs, user stories) were drafted
// from your CVs and GitHub descriptions. Check them against your real SRS / Jira
// backlog and adjust anything that does not match what you produced.

export const projects = [
  {
    slug: 'docroad-ba',
    path: 'ba',
    title: 'DocRoad',
    subtitle: 'Requirements & SRS for a Roadside Assistance Platform',
    context: 'Final Year Group Project',
    role: 'Business Analyst',
    image: '/screenshots/project-docroad.jpg',
    summary:
      'Requirements engineering for a multi-role platform that connects drivers with nearby mechanics during breakdowns and roadside emergencies.',
    features: [
      'Requirements gathering & stakeholder analysis',
      'Software Requirements Specification (SRS)',
      'Functional & non-functional requirements',
      'Designed around 3 user roles: Admin, Driver, Mechanic'
    ],
    tags: ['Requirements Engineering', 'SRS', 'Stakeholder Analysis', 'User Roles', 'UML'],
    github: 'https://github.com/DocRoad',
    caseStudy: {
      problem:
        'When a vehicle breaks down, drivers have no fast, reliable way to find a nearby mechanic or share where they are, mechanics miss jobs close to them, and nobody has an overview of requests in progress.',
      goal: 'Connect a stranded driver with a suitable nearby mechanic in a few taps, and give administrators one live view of drivers, mechanics and service requests.',
      stakeholders: [
        { name: 'Drivers', interest: 'High', influence: 'High', note: 'Primary users; need fast, safe help on the road.' },
        { name: 'Mechanics & garages', interest: 'High', influence: 'Medium', note: 'Service providers; want nearby, suitable jobs.' },
        { name: 'Platform administrators', interest: 'High', influence: 'High', note: 'Manage users and monitor live requests.' },
        { name: 'Project supervisors', interest: 'Medium', influence: 'High', note: 'Approve scope and evaluate the project.' }
      ],
      requirements: [
        { id: 'FR-01', text: 'Users sign in and see only the features for their role (Admin, Driver, Mechanic)', type: 'Functional', priority: 'Must' },
        { id: 'FR-02', text: 'Drivers send a service or emergency request with their live GPS location', type: 'Functional', priority: 'Must' },
        { id: 'FR-03', text: 'The system recommends suitable nearby mechanics', type: 'Functional', priority: 'Must' },
        { id: 'FR-04', text: 'Mechanics accept requests and update the job status', type: 'Functional', priority: 'Must' },
        { id: 'FR-05', text: 'Admins monitor drivers, mechanics and requests on a live map', type: 'Functional', priority: 'Should' },
        { id: 'FR-06', text: 'Admins view reports on service activity', type: 'Functional', priority: 'Should' },
        { id: 'FR-07', text: 'AI-assisted guidance on the likely vehicle fault', type: 'Functional', priority: 'Could' },
        { id: 'NFR-01', text: 'Token-based authentication with role-based access control', type: 'Non-functional', priority: 'Must' },
        { id: 'NFR-02', text: 'Location and status updates appear in near real time', type: 'Non-functional', priority: 'Should' }
      ],
      stories: [
        {
          as: 'a stranded driver',
          want: 'to request help and share my live location',
          so: 'a mechanic can reach me quickly',
          criteria: [
            'My GPS location is attached to the request',
            'I see nearby recommended mechanics',
            'I am notified when a mechanic accepts'
          ]
        },
        {
          as: 'a mechanic',
          want: 'to see nearby service requests with the problem described',
          so: 'I only accept jobs I can handle',
          criteria: ['Requests show distance and issue summary', 'Accepting a job updates its status for the driver']
        },
        {
          as: 'an administrator',
          want: 'one dashboard with a live map, users, requests and reports',
          so: 'I can monitor the service and act on problems',
          criteria: ['Only Admin accounts can open the dashboard', 'The map shows live jobs, mechanics and drivers']
        }
      ],
      asIs: [
        'Driver searches online or phones around',
        'Location described verbally',
        'Fault guessed over the phone',
        'No central view of who is helping whom'
      ],
      toBe: [
        'Driver requests help',
        'Location shared automatically',
        'Nearby mechanics recommended',
        'Mechanic accepts & travels',
        'Admin monitors on live map',
        'Job completed & reported'
      ],
      deliverables: [
        'Software Requirements Specification (SRS)',
        'Stakeholder analysis',
        'Functional & non-functional requirements',
        'User role definitions (Admin / Driver / Mechanic)',
        'User flows for each role'
      ],
      outcome:
        'The requirements and role model became the blueprint for the team’s build: a Flutter app for drivers and mechanics, a secured Node.js/Express API, and the React admin dashboard that I developed.'
    }
  },

  {
    slug: 'digital-clinic',
    path: 'ba',
    title: 'Digital Clinic',
    subtitle: 'Appointment & Queue Management System',
    context: 'BA Practice Project',
    role: 'Business Analyst',
    image: '/screenshots/project-digital-clinic.svg',
    summary:
      'An end-to-end system analysis and software design project that streamlines clinic appointment booking and patient flow.',
    features: [
      'Process analysis of appointment booking & queues',
      'Scope, objectives, functional & non-functional requirements',
      'User stories, acceptance criteria & business rules',
      'Epics & user stories backlog in Jira (Agile / Scrum)'
    ],
    tags: ['Jira', 'Agile / Scrum', 'User Stories', 'UML', 'BPMN'],
    github: 'https://github.com/Nishadi648/Digital-Clinic-BA-Project',
    caseStudy: {
      problem:
        'Patients queue at the clinic without knowing how long they will wait, appointments are booked by phone or in a paper register, and staff have no single view of the day’s patient flow.',
      goal: 'Let patients book a slot and track their place in the queue, while giving clinic staff one clear view of appointments and waiting patients.',
      stakeholders: [
        { name: 'Patients', interest: 'High', influence: 'Medium', note: 'Want short, predictable waiting times.' },
        { name: 'Receptionists', interest: 'High', influence: 'Medium', note: 'Manage bookings and the daily queue.' },
        { name: 'Doctors', interest: 'Medium', influence: 'High', note: 'Need an organised list of patients.' },
        { name: 'Clinic management', interest: 'Medium', influence: 'High', note: 'Own the budget and service quality.' }
      ],
      requirements: [
        { id: 'FR-01', text: 'Patients can book an available appointment slot online', type: 'Functional', priority: 'Must' },
        { id: 'FR-02', text: 'Each booked patient receives a queue number', type: 'Functional', priority: 'Must' },
        { id: 'FR-03', text: 'Patients can see their live queue position', type: 'Functional', priority: 'Must' },
        { id: 'FR-04', text: 'Receptionists can register walk-in patients into the queue', type: 'Functional', priority: 'Should' },
        { id: 'FR-05', text: 'Doctors can mark a consultation as complete', type: 'Functional', priority: 'Should' },
        { id: 'NFR-01', text: 'Queue updates appear for patients within a few seconds', type: 'Non-functional', priority: 'Should' }
      ],
      stories: [
        {
          as: 'a patient',
          want: 'to book an appointment slot online',
          so: 'I don’t have to call or wait at the counter',
          criteria: [
            'Only free slots can be selected',
            'I receive a confirmation with my queue number',
            'I can cancel my booking before the slot starts'
          ]
        },
        {
          as: 'a patient',
          want: 'to see my current place in the queue',
          so: 'I can arrive close to my turn',
          criteria: ['My position updates when the queue moves', 'I see the approximate waiting time']
        },
        {
          as: 'a receptionist',
          want: 'to add walk-in patients to the same queue',
          so: 'all patients are served in a fair order',
          criteria: ['Walk-ins receive a queue number', 'The doctor’s list includes walk-ins']
        }
      ],
      asIs: [
        'Patient phones or visits to book',
        'Booking written in a paper register',
        'Patients wait without knowing their turn',
        'Doctor calls names from the register'
      ],
      toBe: [
        'Patient books online',
        'Queue number issued',
        'Live queue position shown',
        'Doctor calls next patient',
        'Consultation marked complete'
      ],
      deliverables: [
        'Scope, objectives & requirements specification',
        'User stories, acceptance criteria & business rules',
        'Jira backlog structured into Epics & User Stories',
        'BPMN process models (as-is / to-be)',
        'UML use case diagram'
      ],
      outcome:
        'A complete, prioritised requirements baseline and process design that a development team could pick up and start building from.'
    }
  },

  {
    slug: 'foundit',
    path: 'ba',
    title: 'FoundIt',
    subtitle: 'Lost and Found Web Application',
    context: 'BA Problem-Solving Project',
    role: 'Business Analyst',
    image: '/screenshots/project-foundit.svg',
    summary:
      'A community-focused web solution designed to solve the everyday problem of reporting, searching for, and claiming lost or found items efficiently.',
    features: [
      'Scope, user classes & prioritised functional requirements',
      'User journeys for reporting, searching & claiming',
      'Claim verification workflow',
      'Item lifecycle mapped from open to closed'
    ],
    tags: ['Requirements Engineering', 'User Journeys', 'Process Flowcharts', 'Jira / Agile'],
    github: 'https://github.com/Nishadi648/FoundIt',
    caseStudy: {
      problem:
        'Lost and found items are reported on notice boards and chat groups, so reports are scattered, hard to search, and items are sometimes handed to the wrong person.',
      goal: 'Give the community one place to report, search for and safely claim items, with a clear status from “reported” to “returned”.',
      stakeholders: [
        { name: 'People who lost an item', interest: 'High', influence: 'Medium', note: 'Want to find their item fast.' },
        { name: 'People who found an item', interest: 'Medium', influence: 'Medium', note: 'Want a simple way to report it.' },
        { name: 'Administrators / moderators', interest: 'High', influence: 'High', note: 'Verify claims and keep data clean.' },
        { name: 'Organisation (campus / office)', interest: 'Medium', influence: 'High', note: 'Responsible for the service.' }
      ],
      requirements: [
        { id: 'FR-01', text: 'Users can report a lost or found item with category, location, date and photo', type: 'Functional', priority: 'Must' },
        { id: 'FR-02', text: 'Users can search items by keyword, category, location and date', type: 'Functional', priority: 'Must' },
        { id: 'FR-03', text: 'Claimants must answer verification questions before an item is released', type: 'Functional', priority: 'Must' },
        { id: 'FR-04', text: 'Each report follows a lifecycle from Open to Closed once the item is returned', type: 'Functional', priority: 'Should' },
        { id: 'FR-05', text: 'Users are notified when a possible match is found', type: 'Functional', priority: 'Could' },
        { id: 'NFR-01', text: 'Personal contact details are hidden until a claim is approved', type: 'Non-functional', priority: 'Must' }
      ],
      stories: [
        {
          as: 'someone who found an item',
          want: 'to report it with a photo and where I found it',
          so: 'the owner can recognise it',
          criteria: [
            'Category, location and date are required',
            'The report is visible in search after submission'
          ]
        },
        {
          as: 'someone who lost an item',
          want: 'to filter reports by category, place and date',
          so: 'I can find my item quickly',
          criteria: ['Filters can be combined', 'Results show the item’s current status']
        },
        {
          as: 'an administrator',
          want: 'to review ownership answers before releasing an item',
          so: 'items are returned to the right person',
          criteria: ['A claim cannot be approved without verification', 'The item status changes to Claimed on approval']
        }
      ],
      asIs: [
        'Item posted on a notice board or chat group',
        'Owner scrolls through many messages',
        'No proof of ownership is checked',
        'No record of whether the item was returned'
      ],
      toBe: [
        'Finder reports item',
        'Owner searches & filters',
        'Owner submits a claim',
        'Ownership verified',
        'Item returned & closed'
      ],
      deliverables: [
        'Problem statement, scope & user classes',
        'Prioritised functional requirements',
        'User journey maps & process flowcharts',
        'Verification workflow & item lifecycle model',
        'User stories in a Jira backlog'
      ],
      outcome:
        'A clear, verified workflow and requirements set that turns a scattered, informal process into a trackable one. I then built the React front end from it (see FoundIt under Software Engineering).'
    }
  },

  {
    slug: 'docroad',
    path: 'dev',
    title: 'DocRoad',
    subtitle: 'Smart Vehicle Repair & Roadside Assistance',
    context: 'Final Year Group Project',
    role: 'Full-Stack Developer',
    image: '/screenshots/project-docroad.jpg',
    summary:
      'A cross-platform roadside assistance platform that connects vehicle owners with nearby mechanics during emergencies.',
    features: [
      'Secure Node.js / Express REST API with Firebase token auth',
      'Role-based access for Admin, Driver and Mechanic',
      'Admin-only React dashboard with live map & reports',
      'PostgreSQL + MongoDB data layer, run with Docker Compose'
    ],
    tags: ['React.js', 'Vite', 'Flutter', 'Node.js', 'Express.js', 'Firebase Auth', 'PostgreSQL', 'MongoDB', 'Docker'],
    github: 'https://github.com/DocRoad',
    relatedCase: 'docroad-ba'
  },

  {
    slug: 'foundit-frontend',
    path: 'dev',
    title: 'FoundIt',
    subtitle: 'Lost & Found Web App (React Front End)',
    context: 'React Web Project',
    role: 'Front-end Developer',
    image: '/screenshots/project-foundit-frontend.jpg',
    summary:
      'The React front end for FoundIt: people sign in, report lost or found items, search and filter reports, contact the reporter and close the report once the item is returned.',
    features: [
      'Login / register with form validation',
      'Report flow with category, location, date & photo',
      'Search, category chips, Lost/Found & status filters',
      'Item lifecycle (open → resolved) and a “My Reports” page'
    ],
    tags: ['React 19', 'Vite', 'JavaScript', 'HTML5 / CSS3', 'Responsive UI'],
    github: 'https://github.com/Nishadi648/FoundIt',
    relatedCase: 'foundit'
  },

  {
    slug: 'hr-management-system',
    path: 'dev',
    title: 'HR Management System',
    subtitle: 'Human Resource Management Platform',
    context: 'Personal Project',
    role: 'Full-Stack Developer',
    image: '/screenshots/project-hrms.jpg',
    summary:
      'A containerised full-stack HR platform built to manage employee attendance, leave workflows and organisation structure.',
    features: [
      'REST APIs in Go (Gin) for attendance & leave',
      'Leave request approval workflow',
      'Responsive Vue.js dashboard connected to the APIs',
      'PostgreSQL database in a Dockerized setup'
    ],
    tags: ['Vue.js', 'Go (Golang)', 'Gin Framework', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Nishadi648/HRMS-'
  },

  {
    slug: 'student-task-manager',
    path: 'dev',
    title: 'Student Task Manager',
    subtitle: 'Productivity Web App',
    context: 'Personal Project',
    role: 'Frontend Developer',
    image: '/screenshots/project-task-manager.jpg',
    summary: 'A simple productivity app that helps students organise their tasks and deadlines in one place.',
    features: ['Add, edit and complete tasks', 'Tasks saved between visits (Local Storage)', 'Clean, distraction-free UI'],
    tags: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    github: 'https://github.com/Nishadi648/Student-Task-Manager',
    live: 'https://nishadi648.github.io/Student-Task-Manager/'
  },

  {
    slug: 'portfolio-ui',
    path: 'dev',
    title: 'Portfolio UI Prototype',
    subtitle: 'HCI-focused Portfolio Interface',
    context: 'HCI Module Project',
    role: 'Frontend Developer & Designer',
    image: '/screenshots/project-portfolio.jpg',
    summary:
      'A portfolio interface designed around HCI principles: clear navigation, accessibility and responsive layouts.',
    features: ['Keyboard accessible with visible focus', 'Responsive on mobile and desktop', 'Designed in Figma first'],
    tags: ['React', 'React Router', 'CSS', 'Figma'],
    github: 'https://github.com/Nishadi648/Sample-portfolio',
    live: 'https://nishadi648.github.io/Sample-portfolio/'
  }
];

export const pathLabels = {
  ba: 'Business Analysis',
  dev: 'Software Engineering'
};