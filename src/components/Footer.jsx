import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React and HCI principles.
      </p>
    </footer>
  );
}
