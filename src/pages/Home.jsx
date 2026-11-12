import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import { SocialLinks } from '../components/Footer.jsx';
import {
  IconArrow,
  IconAward,
  IconCap,
  IconChart,
  IconCheck,
  IconCode,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconPin,
  IconTools,
  IconBriefcase,
  IconFile,
  IconMic,
  IconExpand,
  IconClose
} from '../components/Icons.jsx';

function SectionHead({ eyebrow, title, intro, id, light }) {
  return (
    <div className="section-head">
      <p className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

const pathIcon = { ba: IconChart, dev: IconCode, tools: IconTools, se: IconCode };

/* "Download CV" button that opens a small menu with the CV versions */
function CvMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="cv-menu" ref={ref}>
      <button
        type="button"
        className="btn btn-outline-light"
        aria-expanded={open}
        aria-controls="cv-menu-list"
        onClick={() => setOpen((v) => !v)}
      >
        <IconDownload size={18} /> Download CV <span className={`cv-caret${open ? ' is-open' : ''}`} aria-hidden="true">▾</span>
      </button>
      {open && (
        <ul id="cv-menu-list" className="cv-menu-list">
          {profile.cvs.map((cv) => {
            const Icon = pathIcon[cv.id];
            return (
              <li key={cv.id}>
                <a className={`cv-option cv-${cv.id}`} href={cv.file} download onClick={() => setOpen(false)}>
                  <span className="cv-option-icon">
                    <Icon size={18} />
                  </span>
                  <span>
                    <strong>{cv.label}</strong>
                    <small>PDF · {cv.note}</small>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* Full-size photo viewer for the events section (click a photo to open, Esc or click outside to close) */
function Lightbox({ photo, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!photo) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [photo, onClose]);

  if (!photo) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.alt} onClick={onClose}>
      <button ref={closeRef} type="button" className="lightbox-close" aria-label="Close photo" onClick={onClose}>
        <IconClose />
      </button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        {photo.caption && <figcaption>{photo.caption}</figcaption>}
      </figure>
    </div>
  );
}

const pathSection = { ba: 'ba-projects', dev: 'dev-projects' };

const baProjects = projects.filter((p) => p.path === 'ba');
const devProjects = projects.filter((p) => p.path === 'dev');
const baCerts = profile.certifications.filter((c) => c.path === 'ba');
const devCerts = profile.certifications.filter((c) => c.path !== 'ba');

function CertGroup({ title, path, items }) {
  const Icon = pathIcon[path];
  return (
    <div className={`cert-group path-${path}`}>
      <h3 className="cert-group-title">
        <span className="skill-icon">
          <Icon size={18} />
        </span>
        {title}
      </h3>
      <ul className="cert-list">
        {items.map((c) => (
          <li className={`cert path-${path}`} key={c.name}>
            <span className="cert-icon" aria-hidden="true">
              <IconAward size={18} />
            </span>
            <div>
              <p className="cert-name">{c.name}</p>
              <p className="cert-meta">
                {c.issuer} · {c.year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [photo, setPhoto] = useState(null);

  /* contact form opens the visitor's email app with the message filled in */
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-hello">Hello, I’m</p>
            <h1 id="hero-title" className="hero-name">
              {profile.name}
            </h1>
            <p className="hero-title">
              <span className="nowrap">Business Analyst</span> <span className="hero-amp">&amp;</span>{' '}
              <span className="nowrap">Software Engineer</span>
            </p>

            <ul className="hero-roles" aria-label="My two paths">
              <li className="hero-role hero-role--ba">
                <IconChart size={18} />
                <strong>Business Analysis</strong>
              </li>
              <li className="hero-role hero-role--dev">
                <IconCode size={18} />
                <strong>Software Engineering</strong>
              </li>
            </ul>

            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-actions">
              <a className="btn btn-light" href="#ba-projects">
                <IconChart size={18} /> BA Projects
              </a>
              <a className="btn btn-outline-light" href="#dev-projects">
                <IconCode size={18} /> SE Projects
              </a>
              <CvMenu />
            </div>

            <SocialLinks className="social-links--hero" />
          </div>

          <div className="hero-visual">
            <div className="hero-dots" aria-hidden="true" />
            <div className="hero-arch">
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
            </div>
            <div className="hero-badge hero-badge--ba">
              <IconChart size={18} /> Business Analyst
            </div>
            <div className="hero-badge hero-badge--dev">
              <IconCode size={18} /> Software Engineer
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container about-grid">
          <div>
            <SectionHead eyebrow="About Me" title="Bridging business needs & technical solutions" id="about-title" />
            {profile.about.map((p) => (
              <p className="lead" key={p.slice(0, 20)}>
                {p}
              </p>
            ))}
            <p className="open-to">
              <span className="pulse" aria-hidden="true" />
              <span>
                Open to <strong>{profile.openTo}</strong>
              </span>
            </p>
          </div>
          <dl className="fact-grid">
            {profile.quickFacts.map((f) => (
              <div className="fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= TWO PATHS ================= */}
      <section id="paths" className="section section--tint" aria-labelledby="paths-title">
        <div className="container">
          <SectionHead
            eyebrow="My Two Paths"
            title="Business Analysis + Software Engineering"
            intro="I work on both sides of a project: understanding and defining the problem as a Business Analyst, and building the solution end to end as a Software Engineer."
            id="paths-title"
          />
          <div className="path-grid">
            {profile.paths.map((p) => {
              const Icon = pathIcon[p.id];
              const n = projects.filter((x) => x.path === p.id).length;
              return (
                <article className={`path-card path-${p.id}`} key={p.id}>
                  <span className="path-icon">
                    <Icon size={26} />
                  </span>
                  <p className="path-label">Path {p.id === 'ba' ? '01' : '02'}</p>
                  <h3>{p.title}</h3>
                  <p>{p.intro}</p>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>
                        <IconCheck size={16} /> {pt}
                      </li>
                    ))}
                  </ul>
                  <a className="path-link" href={`#${pathSection[p.id]}`}>
                    {p.cta} ({n}) <IconArrow size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BA PROJECTS ================= */}
      <section id="ba-projects" className="section project-section path-ba" aria-labelledby="ba-title">
        <div className="container">
          <div className="project-section-head">
            <span className="project-section-icon">
              <IconChart size={28} />
            </span>
            <SectionHead
              eyebrow="Path 01 · Business Analysis"
              title="Business Analysis Projects"
              intro="Requirements engineering, stakeholder analysis, process modelling and user stories. Open a case study to see the full analysis."
              id="ba-title"
            />
          </div>
          <div className="project-grid">
            {baProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOFTWARE ENGINEERING PROJECTS ================= */}
      <section id="dev-projects" className="section project-section section--teal path-dev" aria-labelledby="dev-title">
        <div className="container">
          <div className="project-section-head">
            <span className="project-section-icon">
              <IconCode size={28} />
            </span>
            <SectionHead
              eyebrow="Path 02 · Software Engineering"
              title="Software Engineering Projects"
              intro="Full-stack applications built end to end: React and Vue.js front ends, REST APIs in Node.js and Go, PostgreSQL and MongoDB data layers, and Docker."
              id="dev-title"
            />
          </div>
          <div className="project-grid">
            {devProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section section--tint" aria-labelledby="skills-title">
        <div className="container">
          <SectionHead
            eyebrow="Skills"
            title="Business Analysis & Software Engineering skills"
            id="skills-title"
          />
          <div className="skill-grid">
            {profile.skillGroups.map((g) => {
              const Icon = pathIcon[g.path];
              return (
                <article className={`skill-card path-${g.path}`} key={g.title}>
                  <h3>
                    <span className="skill-icon">
                      <Icon size={20} />
                    </span>
                    {g.title}
                  </h3>
                  <ul className="chip-list">
                    {g.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EVENTS: HOSTING & COMPERING ================= */}
      <section id="events" className="section" aria-labelledby="events-title">
        <div className="container">
          <SectionHead
            eyebrow="Beyond the Desk · Leadership & Communication"
            title="Event Hosting & Compering"
            intro="Hosting live events has sharpened the skills I use every day as an analyst: speaking clearly, keeping a room engaged and keeping a programme running on time."
            id="events-title"
          />
          <div className="event-list">
            {profile.events.map((ev) => {
              const meta = [ev.organiser, ev.venue, ev.year].filter(Boolean).join(' · ');
              return (
                <article className={`event-card${ev.photos.length > 1 ? ' event-card--gallery' : ''}`} key={ev.id}>
                  <div className={`event-photos event-photos--${ev.photos.length}`}>
                    {ev.photos.map((ph) => (
                      <button
                        type="button"
                        className="event-photo"
                        key={ph.src}
                        onClick={() => setPhoto({ ...ph, caption: `${ev.title}${meta ? ` · ${meta}` : ''}` })}
                        aria-label={`Enlarge photo: ${ph.alt}`}
                      >
                        <img src={ph.src} alt={ph.alt} loading="lazy" />
                        <span className="event-photo-zoom" aria-hidden="true">
                          <IconExpand size={16} />
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="event-body">
                    <span className="event-role">
                      <IconMic size={16} /> {ev.role}
                    </span>
                    <h3>{ev.title}</h3>
                    <p className="event-meta">{meta}</p>
                    <p className="event-desc">{ev.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <Lightbox photo={photo} onClose={() => setPhoto(null)} />
      </section>

      {/* ================= EDUCATION & CERTS ================= */}
      <section id="education" className="section" aria-labelledby="edu-title">
        <div className="container edu-grid">
          <div>
            <SectionHead eyebrow="Education & Experience" title="Learning path" id="edu-title" />
            <ol className="timeline">
              {profile.education.map((e) => (
                <li key={e.title}>
                  <span className="timeline-dot" aria-hidden="true">
                    <IconCap size={16} />
                  </span>
                  <div>
                    {e.period && <p className="timeline-period">{e.period}</p>}
                    <h3>{e.title}</h3>
                    <p className="timeline-place">{e.place}</p>
                    {e.note && <p className="timeline-note">{e.note}</p>}
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="sub-heading">
              <IconBriefcase size={20} /> Work experience
            </h3>
            <ol className="timeline timeline--work">
              {profile.experience.map((e) => (
                <li key={e.title}>
                  <span className="timeline-dot" aria-hidden="true">
                    <IconBriefcase size={16} />
                  </span>
                  <div>
                    <p className="timeline-period">{e.period}</p>
                    <h3>{e.title}</h3>
                    <p className="timeline-place">{e.place}</p>
                    <p className="timeline-desc">{e.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHead eyebrow="Certifications" title="Courses & certificates" id="cert-title" />
            <CertGroup title="Business Analysis" path="ba" items={baCerts} />
            <CertGroup title="Software Engineering & Cloud" path="dev" items={devCerts} />
          </div>
        </div>
      </section>

      {/* ================= CV DOWNLOADS ================= */}
      <section id="cv" className="section section--tint" aria-labelledby="cv-title">
        <div className="container">
          <SectionHead
            eyebrow="Download CV"
            title="Pick the CV for your role"
            intro="I keep a tailored CV for each path. Both are one-page PDFs."
            id="cv-title"
          />
          <div className="cv-grid">
            {profile.cvs.map((cv) => {
              const Icon = pathIcon[cv.id];
              return (
                <article className={`cv-card cv-${cv.id}`} key={cv.id}>
                  <span className="cv-card-icon">
                    <Icon size={24} />
                  </span>
                  <h3>{cv.label}</h3>
                  <p>{cv.note}</p>
                  <div className="cv-card-actions">
                    <a className="btn btn-primary btn-sm" href={cv.file} download>
                      <IconDownload size={16} /> Download PDF
                    </a>
                    <a className="btn btn-ghost btn-sm" href={cv.file} target="_blank" rel="noreferrer">
                      <IconFile size={16} /> View
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section section--plum" aria-labelledby="contact-title">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow eyebrow--light">Contact</p>
            <h2 id="contact-title">Let’s work together</h2>
            <p className="contact-intro">
              I’m open to <strong>Business Analyst</strong> and <strong>Software Engineering</strong> internships.
              Send a message and I’ll get back to you.
            </p>
            <ul className="contact-list">
              <li>
                <IconMail /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <IconPhone /> <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <IconPin /> {profile.location}
              </li>
              <li>
                <IconLinkedin /> <a href={profile.linkedin} target="_blank" rel="noreferrer">in/nishadi-rajasekara</a>
              </li>
              <li>
                <IconGithub /> <a href={profile.github} target="_blank" rel="noreferrer">github.com/Nishadi648</a>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" type="text" autoComplete="name" required />
            <label htmlFor="c-email">Your email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required />
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" rows="5" required />
            <button className="btn btn-primary" type="submit">
              Send message <IconArrow size={18} />
            </button>
            <p className="form-help">This opens your email app with the message ready to send.</p>
          </form>
        </div>
      </section>
    </>
  );
}