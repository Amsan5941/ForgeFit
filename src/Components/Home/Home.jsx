import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <h1>Unleash Your Power at <span>Forge Fit</span></h1>
        <p>Train. Transform. Triumph.</p>
        
      </section>

      {/* About Section */}
      <section className="about">
        <h2>What is Forge Fit?</h2>
        <p>
          Forge Fit is the new generation of fitness tracking — empowering people to integrate AI into their fitness journey. From personalized workouts to intelligent progress tracking, we’re redefining how you train, recover, and grow.
        </p>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <h2>What We Offer</h2>
        <div className="program-cards">
          <div className="card">
            <h3>Fitness Tracking</h3>
            <p>Track unlimited workouts with ease. Log exercises, add custom rest timers, and jot down notes to monitor your progress and stay consistent every step of the way.</p>
          </div>
          <div className="card">
            <h3>Personal Workout Assistance</h3>
            <p>Our intelligent chatbot designs personalized workout plans tailored to your body type, fitness level, and goals — giving you expert guidance without the guesswork.</p>
          </div>
          <div className="card">
            <h3>Nutrition Coaching</h3>
            <p>Achieve better results with AI-powered nutrition support. Get customized meal plans and diet advice to fuel your training and transform your health.</p>
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
