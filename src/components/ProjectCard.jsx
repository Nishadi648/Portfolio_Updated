import { getTechCategory } from '../utils/techCategory.js';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img
          className="project-image"
          src={project.screenshot}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`Technologies used for ${project.title}`}>
          {project.technologies.map((technology) => (
            <li key={technology} data-category={getTechCategory(technology)}>
              {technology}
            </li>
          ))}
        </ul>
        <div className="button-row">
          <a className="button" href={project.github} target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
          <a className="button button-secondary" href={project.live} target="_blank" rel="noreferrer">
            Live / Screenshot Link
          </a>
        </div>
      </div>
    </article>
  );
}
