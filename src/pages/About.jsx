import { profile } from '../data/profile.js';
import { getTechCategory } from '../utils/techCategory.js';

function CardTitle({ icon, children }) {
  return (
    <h2 className="card-title">
      <span className="card-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </span>
      {children}
    </h2>
  );
}

const icons = {
  education: (
    <>
      <path d="M22 10 12 5 2 10l10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
      <path d="M22 10v6" />
    </>
  ),
  skills: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  aspirations: (
    <>
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </>
  )
};

export default function About() {
  return (
    <section className="content-grid" aria-labelledby="about-title">
      <div className="section-intro">
        <p className="eyebrow">About Me</p>
        <h1 id="about-title">Education, skills, and career direction</h1>
        
      </div>

      <article className="info-card info-card--education">
        <CardTitle icon={icons.education}>Educational Background</CardTitle>
        <ul>
          {profile.education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="info-card info-card--skills">
        <CardTitle icon={icons.skills}>Technical Skills</CardTitle>
        <ul className="tag-list">
          {profile.skills.map((skill) => (
            <li key={skill} data-category={getTechCategory(skill)}>
              {skill}
            </li>
          ))}
        </ul>
      </article>

      <article className="info-card info-card--aspirations full-width-card">
        <CardTitle icon={icons.aspirations}>Career Aspirations</CardTitle>
        <p>{profile.aspirations}</p>
      </article>
    </section>
  );
}
