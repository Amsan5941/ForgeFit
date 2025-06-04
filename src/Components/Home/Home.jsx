import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <h1>Unleash Your Power at <span>Forge Fit</span></h1>
        <p>Train. Transform. Triumph.</p>
        <button className="cta-button">Join Now</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>What is Forge Fit?</h2>
        <p>
          Forge Fit is more than just a gym — it’s a movement. We help you build strength, endurance, and confidence through expert coaching and a supportive community.
        </p>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program-cards">
          <div className="card">
            <h3>Strength Training</h3>
            <p>Build lean muscle with personalized resistance programs.</p>
          </div>
          <div className="card">
            <h3>HIIT & Conditioning</h3>
            <p>Burn fat fast with high-intensity interval training.</p>
          </div>
          <div className="card">
            <h3>Nutrition Coaching</h3>
            <p>Fuel your body right with meal plans tailored to your goals.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Are You Ready to Forge Your Best Self?</h2>
        <button className="cta-button dark">Start Free Trial</button>
      </section>

    </div>
  );
};

export default Home;
