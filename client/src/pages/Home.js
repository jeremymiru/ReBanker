import React, { useState, useEffect } from 'react';
import {
  FaLock,
  FaClock,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import './Home.css';

export default function Home() {
  
  const [animPlay, setAnimPlay] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimPlay(true), 50);
    return () => clearTimeout(t);
  }, []);

  const steps = [
    {
      id: 1,
      icon: '📋',
      title: 'List',
      text: 'Create a clear and compelling listing of your financial opportunity or need.',
    },
    {
      id: 2,
      icon: '🔗',
      title: 'Match',
      text: 'Connect with others and find the perfect match to address your financial goals.',
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Rebank',
      text: 'Transform your listing into real financial growth and success with our platform.',
    },
  ];

  return (
    <main className="home-page">
      
      <section id="hero" className={`hero${animPlay ? ' poped' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to the <span className="highlight">future.</span>
          </h1>
          <p className="hero-subtitle">
            Your gateway to peer-driven financial opportunities.
          </p>
        </div>
        <div className="hero-image-wrap">
          <img
            src="https://unblast.com/wp-content/uploads/2020/05/iOS-Wallet-App-Template-1024x768.jpg"
            alt="ReBanker app on mobile"
            className="hero-image"
          />
        </div>
      </section>

      
      <section
        id="how-it-works"
        className={`how-section${animPlay ? ' play' : ''}`}
      >
        <h2 className="section-heading">HOW IT WORKS</h2>
        <p className="how-intro">
          Experience a simple three-step journey to empower your financial
          success.
        </p>

        <div className="how-steps">
          {steps.map((step) => (
            <div key={step.id} className="how-card" data-step={step.id}>
              <h3>
                {step.icon} {step.title}
              </h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>


      </section>

      
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2 className="about-title">
              ABOUT <span className="highlight">REBANKER</span>
            </h2>
            <p className="about-subtitle">Simplified Payments</p>
            <p>
              Welcome to ReBanker where we are revolutionizing student spending
              in schools! With our cutting-edge product, we have streamlined
              the way students manage their expenses, providing a seamless,
              automated and secure experience in transacting money.
            </p>
            <p>
              ReBanker utilizes state-of-the-art technology to automate
              student spending, offering an all-inclusive platform that offers
              an intuitive interface where students can effortlessly track
              their expenses, set budgets, and make purchases with ease—
              promoting financial literacy.
            </p>
            <p>
              For parents and guardians, we include robust tracking features,
              spending limits, and real-time monitoring capabilities to
              effortlessly track their children’s spending across multiple
              schools simultaneously, ensuring transparency and peace of mind.
            </p>
          </div>
          <div className="about-icons">
            <div className="icon-card">
              <FaLock className="icon" />
              <span>SECURE</span>
            </div>
            <div className="icon-card">
              <FaClock className="icon" />
              <span>FAST</span>
            </div>
            <div className="icon-card">
              <FaHandsHelping className="icon" />
              <span>CONVENIENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Contact ————— */}
      <section id="contact" className="contact-section">
        <h2 className="section-heading">LET'S HEAR FROM YOU</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Address</h3>
            <p>Outering Way, Nairobi, Kenya</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>info@rebanker.com</p>
          </div>

          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>0712 345 678</p>
          </div>
        </div>
      </section>
    </main>
  );
}
