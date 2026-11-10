import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { IconArrow, IconBack, IconCheck, IconGithub, IconExternal } from '../components/Icons.jsx';

function Block({ n, title, children }) {
  const id = `cs-${n}`;
  return (
    <section className="cs-block" aria-labelledby={id}>
      <h2 id={id}>
        <span className="cs-num">{String(n).padStart(2, '0')}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const caseProjects = projects.filter((p) => p.caseStudy);

export default function CaseStudy() {
  const { slug } = useParams();
  const index = caseProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/#ba-projects" replace />;

  const project = caseProjects[index];
  const cs = project.caseStudy;
  const next = caseProjects[(index + 1) % caseProjects.length];

  return (
    <article className="case">
      <header className="case-hero">
        <div className="container case-hero-inner">
          <div>
            <Link className="back-link" to="/#ba-projects">
              <IconBack size={16} /> All BA projects
            </Link>
            <p className="eyebrow eyebrow--light">
              Business Analysis Case Study · {project.context}
            </p>
            <h1>{project.title}</h1>
            <p className="case-subtitle">{project.subtitle}</p>
            <p className="case-summary">{project.summary}</p>
            <ul className="case-facts" aria-label="Project facts">
              <li>
                <strong>{project.role}</strong>Role
              </li>
              <li>
                <strong>{cs.stakeholders.length}</strong>Stakeholder groups
              </li>
              <li>
                <strong>{cs.requirements.length}</strong>Requirements
              </li>
              <li>
                <strong>{cs.stories.length}</strong>User stories
              </li>
            </ul>
            <div className="hero-actions">
              {project.github && (
                <a className="btn btn-light" href={project.github} target="_blank" rel="noreferrer">
                  <IconGithub size={18} /> View repository
                </a>
              )}
              {project.live && (
                <a className="btn btn-outline-light" href={project.live} target="_blank" rel="noreferrer">
                  Live demo <IconExternal size={16} />
                </a>
              )}
            </div>
          </div>
          <img className="case-image" src={project.image} alt={`${project.title} preview`} />
        </div>
      </header>

      <div className="container case-body">
        <Block n={1} title="Problem & goal">
          <div className="two-col">
            <div className="panel">
              <h3>Business problem</h3>
              <p>{cs.problem}</p>
            </div>
            <div className="panel panel--accent">
              <h3>Goal</h3>
              <p>{cs.goal}</p>
            </div>
          </div>
        </Block>

        <Block n={2} title="Stakeholder analysis">
          <div className="table-wrap">
            <table className="data-table">
              <caption className="visually-hidden">Stakeholders with interest and influence</caption>
              <thead>
                <tr>
                  <th scope="col">Stakeholder</th>
                  <th scope="col">Interest</th>
                  <th scope="col">Influence</th>
                  <th scope="col">Why they matter</th>
                </tr>
              </thead>
              <tbody>
                {cs.stakeholders.map((s) => (
                  <tr key={s.name}>
                    <th scope="row">{s.name}</th>
                    <td><span className={`badge badge--${s.interest.toLowerCase()}`}>{s.interest}</span></td>
                    <td><span className={`badge badge--${s.influence.toLowerCase()}`}>{s.influence}</span></td>
                    <td>{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        <Block n={3} title="Process: as-is vs to-be">
          <div className="two-col two-col--process">
            <div className="panel">
              <h3>As-is (today)</h3>
              <ul className="dash-list">
                {cs.asIs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="panel panel--accent">
              <h3>To-be (proposed)</h3>
              <ol className="flow">
                {cs.toBe.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          </div>
        </Block>

        <Block n={4} title="Requirements (MoSCoW)">
          <div className="table-wrap">
            <table className="data-table">
              <caption className="visually-hidden">Requirements with type and MoSCoW priority</caption>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Requirement</th>
                  <th scope="col">Type</th>
                  <th scope="col">Priority</th>
                </tr>
              </thead>
              <tbody>
                {cs.requirements.map((r) => (
                  <tr key={r.id}>
                    <th scope="row" className="mono">{r.id}</th>
                    <td>{r.text}</td>
                    <td className="muted">{r.type}</td>
                    <td><span className={`badge badge--${r.priority.toLowerCase()}`}>{r.priority}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        <Block n={5} title="User stories & acceptance criteria">
          <div className="story-grid">
            {cs.stories.map((s) => (
              <div className="story" key={s.want}>
                <p className="story-text">
                  As <strong>{s.as}</strong>, I want <strong>{s.want}</strong>, so that <strong>{s.so}</strong>.
                </p>
                <p className="story-label">Acceptance criteria</p>
                <ul className="check-list">
                  {s.criteria.map((c) => (
                    <li key={c}>
                      <IconCheck size={16} /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        <Block n={6} title="Deliverables & outcome">
          <div className="two-col">
            <div className="panel">
              <h3>BA deliverables</h3>
              <ul className="check-list">
                {cs.deliverables.map((d) => (
                  <li key={d}>
                    <IconCheck size={16} /> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel panel--accent">
              <h3>Outcome</h3>
              <p>{cs.outcome}</p>
              <ul className="chip-list">
                {project.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Block>

        <nav className="case-next" aria-label="Next case study">
          <span>Next case study</span>
          <Link to={`/projects/${next.slug}`}>
            {next.title} <IconArrow size={18} />
          </Link>
        </nav>
      </div>
    </article>
  );
}
