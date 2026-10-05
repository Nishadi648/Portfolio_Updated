import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';

export default function Home() {
  return (
    <section className="hero" aria-labelledby="home-title">
      <div className="hero-text">
       
        <h1 id="home-title">Hello, I am <span className="gradient-text">{profile.name}</span></h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-message">{profile.welcome}</p>
        <div className="button-row">
          <Link className="button" to="/projects">
            View Projects
          </Link>
          <Link className="button button-secondary" to="/contact">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="hero-photo-card" aria-label="Profile photo area">
        <img className="profile-photo" src="/profile.jpeg" alt={`Portrait of ${profile.name}`} />
      </div>
    </section>
  );
}
