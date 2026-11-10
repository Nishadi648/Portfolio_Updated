import { Link } from 'react-router-dom';
import { pathLabels } from '../data/projects.js';
import { IconArrow, IconCheck, IconExternal, IconGithub } from './Icons.jsx';

export default function ProjectCard({ project }) {
  const hasCase = Boolean(project.caseStudy);

  return (
    <article className={`project-card path-${project.path}`}>
      <div className="project-media">
        <img src={project.image} alt={`${project.title}: ${project.subtitle}`} loading="lazy" />
        <span className="path-badge">{pathLabels[project.path]}</span>
      </div>

      <div className="project-body">
        <p className="project-context">
          {project.context} <span aria-hidden="true">·</span> <strong>{project.role}</strong>
        </p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-summary">{project.summary}</p>

        <ul className="feature-list" aria-label="Key features">
          {project.features.map((f) => (
            <li key={f}>
              <IconCheck size={16} />
              {f}
            </li>
          ))}
        </ul>

        <ul className="chip-list" aria-label={hasCase ? 'Methods and tools' : 'Technologies'}>
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-actions">
          {hasCase && (
            <Link className="btn btn-primary btn-sm" to={`/projects/${project.slug}`}>
              Read case study <IconArrow size={16} />
            </Link>
          )}
          {project.github && (
            <a
              className={`btn btn-sm ${hasCase ? 'btn-ghost' : 'btn-primary'}`}
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub size={16} /> Repository
            </a>
          )}
          {project.relatedCase && (
            <Link className="btn btn-ghost btn-sm btn-ba" to={`/projects/${project.relatedCase}`}>
              BA case study <IconArrow size={15} />
            </Link>
          )}
          {project.live && (
            <a className="btn btn-ghost btn-sm" href={project.live} target="_blank" rel="noreferrer">
              Live demo <IconExternal size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
