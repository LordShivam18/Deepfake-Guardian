import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page-container">
      <section className="hero-section">
        <h1 className="hero-title">Advanced Deepfake Detection Platform</h1>
        <p className="hero-subtitle">
          Powered by cutting-edge AI models to identify synthetic media with high accuracy.
        </p>
        <Link to="/detection" className="hero-cta-button">
          Start Detection
        </Link>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h4>🖼️ Image Analysis</h4>
          <p>Detect manipulated faces and synthetic images using XceptionNet and EfficientNet-B4 models.</p>
        </div>
        <div className="feature-card">
          <h4>🎬 Video Detection</h4>
          <p>Analyze temporal inconsistencies and frame-by-frame artifacts in video content.</p>
        </div>
        <div className="feature-card">
          <h4>🔊 Audio Analysis</h4>
          <p>Identify synthetic speech using advanced Wav2Vec audio detection models.</p>
        </div>
        <div className="feature-card">
          <h4>🤖 Multi-Model Fusion</h4>
          <p>Combine multiple AI models for enhanced accuracy and comprehensive analysis.</p>
        </div>
      </section>

      <section className="stats-section">
        <h2 className="section-title">Platform Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">94.2%</span>
            <span className="stat-label">Average Accuracy</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">4</span>
            <span className="stat-label">AI Models</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">50K+</span>
            <span className="stat-label">Files Analyzed</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">3</span>
            <span className="stat-label">Media Types</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;