import React from 'react';
import './LearnPage.css';

function LearnPage() {
  return (
    <div className="learn-page-container">
      <h1>Understanding Artificial Intelligence & Deepfakes</h1>
      <div className="learn-grid">
        <div className="learn-card">
          <h3>What are Deepfakes?</h3>
          <p>Deepfakes are synthetic media created using AI. A person in an existing image or video is replaced with someone else's likeness. This technology uses deep learning models to generate new, often highly realistic, content.</p>
        </div>
        <div className="learn-card">
          <h3>Detection Methods</h3>
          <p>Our platform uses multiple AI models for analysis. For faces, we use CNNs like <strong>XceptionNet</strong> and <strong>EfficientNet</strong>. For audio, we leverage models like <strong>Wav2Vec</strong> to identify synthetic speech.</p>
        </div>
        <div className="learn-card">
          <h3>Training Datasets</h3>
          <p>Our models are trained on comprehensive, large-scale public datasets to ensure high accuracy:</p>
          <ul><li>FaceForensics++</li><li>Deepfake Detection Challenge (DFDC)</li><li>Celeb-DF</li><li>DeepFake-TIMIT (Audio)</li></ul>
        </div>
        <div className="learn-card">
          <h3>Common Artifacts</h3>
          <p>Deepfakes often contain subtle flaws. Our models look for these artifacts:</p>
          <ul><li><strong>Blending Boundaries:</strong> Unnatural seams around the face.</li><li><strong>Lighting Inconsistency:</strong> Mismatched lighting.</li><li><strong>Unusual Blinking:</strong> Irregular eye blinking patterns.</li><li><strong>Temporal Inconsistency:</strong> Flickering between frames.</li></ul>
        </div>
      </div>
    </div>
  );
}

export default LearnPage;