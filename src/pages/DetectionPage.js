import React, { useState } from 'react';
import UploadComponent from '../components/UploadComponent';
import ResultsComponent from '../components/ResultsComponent';
import { analyzeMediaFile } from '../api/api';

function DetectionPage() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalysis = async (file, mediaType) => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);
    try {
      const result = await analyzeMediaFile(file, mediaType);
      setAnalysisResult(result);
    } catch (err) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setAnalysisResult(null);
    setError(null);
  }
  
  const showUploader = !isLoading && !analysisResult && !error;

  return (
    <div className="detection-page">
      <div className="main-analysis-section">
        {showUploader && <UploadComponent onAnalyze={handleAnalysis} isLoading={isLoading} />}
        {isLoading && <div className="loader">Analyzing, please wait...</div>}
        {error && <div className="error-message"><p>Error: {error}</p><button onClick={handleReset}>Try Again</button></div>}
        {analysisResult && (
          <div>
            <ResultsComponent result={analysisResult} /> 
            <button onClick={handleReset} className="analyze-another-button">Analyze Another File</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetectionPage;