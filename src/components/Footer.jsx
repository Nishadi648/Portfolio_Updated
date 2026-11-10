import { profile } from '../data/profile.js';
import { IconGithub, IconLinkedin, IconMail } from './Icons.jsx';

export function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`} aria-label="Social profiles">
      <li>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <IconLinkedin />
        </a>
      </li>
      <li>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <IconGithub />
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
          <IconMail />
        </a>
      </li>
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          {profile.firstName}
          <span className="brand-dot">.</span>
        </p>
        <p className="footer-text">
          Business Analyst &amp; Frontend Developer · © {new Date().getFullYear()} {profile.name}
        </p>
        <SocialLinks className="social-links--footer" />
      </div>
    </footer>
  );
}
