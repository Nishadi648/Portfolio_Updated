# Nishadi Rajasekara · Portfolio

Personal portfolio for two career paths: **Business Analyst** and **Frontend Developer**.
Built with React, React Router and Vite. One scrolling page plus a full case-study page for each BA project.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # output in /dist
```

Deploys as-is to Netlify (`netlify.toml`) or Vercel (`vercel.json`). Both are set up for client-side routes such as `/projects/digital-clinic`.

## Where to edit

| What | File |
| --- | --- |
| Name, titles, about text, contact, skills, education, certifications | `src/data/profile.js` |
| Projects (BA + development) and BA case studies | `src/data/projects.js` |
| Profile photo | `public/profile.jpg` |
| Project images | `public/screenshots/` |
| CV PDFs | `public/cv/` |
| Colours, fonts, layout | `src/styles/global.css` (tokens at the top) |

### Adding a project

Add an object to `src/data/projects.js`:

- `path: 'ba'` shows it under **Business Analysis**, `path: 'dev'` under **Development**.
- Add a `caseStudy` object (see Digital Clinic) to get a "Read case study" page automatically.
- Put the image in `public/screenshots/` and set `image: '/screenshots/your-file.jpg'`.

### CV downloads

The three CVs live in `public/cv/` (Business Analyst, Frontend Developer, Software Engineer).
They are listed in `cvs` in `src/data/profile.js` and appear in the hero "Download CV" menu
and the CV section. To update one, export the new version to PDF and replace the file with
the same name.

## Structure

```
src/
  App.jsx              routes: "/" and "/projects/:slug"
  pages/Home.jsx       hero, about, two paths, projects (filterable), skills, education, contact
  pages/CaseStudy.jsx  BA case study: problem, stakeholders, as-is/to-be, MoSCoW, user stories
  components/          Navbar, Footer, ProjectCard, Layout, Icons
  data/                profile.js, projects.js
  styles/global.css
```
