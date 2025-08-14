import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import './ResultsComponent.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

function ResultsComponent({ result }) {
  const isFake = result.result === 'FAKE';
  const confidenceScore = result.confidence_score;
  const doughnutData = {
    datasets: [{ data: [confidenceScore, 100 - confidenceScore], backgroundColor: [isFake ? '#e91e63' : '#00bfa5', '#333'], borderWidth: 0, circumference: 180, rotation: 270 }],
  };
  const doughnutOptions = { plugins: { legend: { display: false }, tooltip: { enabled: false } }, cutout: '80%' };
  const barData = {
    labels: ['XceptionNet', 'EfficientNet', 'Audio Model', 'Multi-Modal'],
    datasets: [{ data: [85, 92, 88, 95], backgroundColor: ['#00bfa5', '#ff9800', '#e91e63', '#2196f3'] }],
  };
  const barOptions = { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100 } } };

  return (
    <div className="results-container">
      <h2>Detection Results</h2>
      <div className={`result-banner ${isFake ? 'fake' : 'real'}`}>{result.result}</div>
      <div className="results-summary">
        <div className="confidence-chart-container">
          <h3>Confidence Score</h3>
          <div className="doughnut-wrapper">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div className="confidence-text">{confidenceScore}%<span>Likely {isFake ? 'Fake' : 'Real'}</span></div>
          </div>
        </div>
        <div className="analysis-details">
          <h3>Analysis Details</h3>
          <ul>
            <li><strong>Model Used:</strong> EfficientNet-B7</li>
            <li><strong>Processing Time:</strong> {result.processing_time}s</li>
            <li><strong>File Size:</strong> {(result.file_size / 1024).toFixed(2)} KB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResultsComponent;