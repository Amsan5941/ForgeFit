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
            <li><strong>Amsan:</strong> Avid Gym Goer & Fitness Enthusiast</li>
            <li><strong>Risanth:</strong> Gym Rookie</li>
            <li><strong>Mithuusan:</strong> Avid Gym Goer & Fitness Enthusiast</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or want to join our community? Reach out to us!
          </p>
          <ul>
            <li><strong>Email:</strong> forgefitdev@gmail.com</li>
            <li><strong>Phone:</strong> (647) 781-8616</li>
            <li><strong>Location:</strong> 350 Victoria St, Toronto ON, Canada</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
