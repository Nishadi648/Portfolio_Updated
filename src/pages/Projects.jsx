import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section aria-labelledby="projects-title">
      <div className="section-intro">
        <p className="eyebrow">Projects</p>
        <h1 id="projects-title">Selected work</h1>
      
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
