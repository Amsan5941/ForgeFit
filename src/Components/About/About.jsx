import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about-banner">
        <div className="banner-overlay">
          <h1 className="about-title">About Forge Fit</h1>
          <p className="about-subtitle">Empowering You to Push Beyond Limits</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At Forge Fit, our mission is to ignite confidence, resilience, and strength in every member.
            We don’t just build bodies — we build mindsets. Through expert guidance and a strong
            community, we help you transform into your best self both inside and outside the gym.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Expert Coaching:</strong> Our certified trainers don’t just show you how — they show you why. Each movement is backed by purpose and precision.</li>
            <li><strong>Custom Programs:</strong> We craft tailored workout and nutrition plans to match your goals, experience, and pace. No cookie-cutter plans here.</li>
            <li><strong>Supportive Community:</strong> Join a community of dedicated people who push each other forward. At Forge Fit, you're never training alone.</li>
          </ul>

          <h2>Our Facilities</h2>
          <p>
            From state-of-the-art machines and free weights to recovery lounges and flexible training areas,
            Forge Fit is equipped to support all training styles. Whether you prefer solo strength training,
            HIIT classes, or one-on-one coaching, you’ll find everything you need in one powerful space.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
