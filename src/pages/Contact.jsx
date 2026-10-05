import { useState } from 'react';
import { profile } from '../data/profile.js';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('Thank you. Your message has been prepared successfully. I will respond as soon as possible.');
    event.currentTarget.reset();
  }

  return (
    <section className="contact-grid" aria-labelledby="contact-title">
      <div className="section-intro">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-title">Let us connect</h1>
       
        <address className="contact-details">
          <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>Phone: {profile.phone}</p>
          <p>Location: {profile.location}</p>
          <p>GitHub: <a href={profile.github} target="_blank" rel="noreferrer">GitHub Profile</a></p>
          <p>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
        </address>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-help form-status">
        <p id="form-help" className="form-help">All fields are required.</p>

        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="name@example.com" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" placeholder="Write your message" required />

        <button className="button" type="submit">Send Message</button>
        <p id="form-status" className="success-message" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}
