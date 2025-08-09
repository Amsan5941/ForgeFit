import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="about-wrapper">
      <section className="about-banner">
        <div className="banner-overlay">
          <h1 className="about-title">Contact Forge Fit</h1>
          <p className="about-subtitle">Meet Our Team & Get In Touch</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Team</h2>
          <p>
            We are recent university graduates with a passion for fitness, health, and helping others achieve their goals. Our diverse backgrounds in exercise science, nutrition, and coaching allow us to provide expert guidance and support for every member.
          </p>
          <ul>
            <li><strong>Alex:</strong> Certified Personal Trainer & Nutrition Coach</li>
            <li><strong>Jordan:</strong> Group Fitness Instructor & Wellness Advocate</li>
            <li><strong>Taylor:</strong> Strength & Conditioning Specialist</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or want to join our community? Reach out to us!
          </p>
          <ul>
            <li><strong>Email:</strong> contact@forgefit.com</li>
            <li><strong>Phone:</strong> (555) 123-4567</li>
            <li><strong>Location:</strong> 123 Forge St, Fitness City, USA</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
