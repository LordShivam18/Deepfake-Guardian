import React, { useState, useCallback } from 'react';
import './UploadComponent.css';

function UploadComponent({ onAnalyze, isLoading }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [mediaType, setMediaType] = useState('image');

  const handleFileChange = (event) => { if (event.target.files?.[0]) { setSelectedFile(event.target.files[0]); } };
  const onDrop = useCallback((event) => { event.preventDefault(); if (event.dataTransfer.files?.[0]) { setSelectedFile(event.dataTransfer.files[0]); } }, []);
  const onDragOver = (event) => { event.preventDefault(); };
  const handleAnalyzeClick = () => { if (selectedFile) { onAnalyze(selectedFile, mediaType); } };
  const getAcceptedFileTypes = () => {
    switch (mediaType) {
      case 'image': return '.jpeg, .jpg, .png';
      case 'video': return '.mp4';
      case 'audio': return '.wav, .mp3';
      default: return '';
    }
  };

  return (
    <div className="upload-container">
      <div className="media-tabs">
        <button onClick={() => setMediaType('image')} className={mediaType === 'image' ? 'active' : ''}>Image</button>
        <button onClick={() => setMediaType('video')} className={mediaType === 'video' ? 'active' : ''}>Video</button>
        <button onClick={() => setMediaType('audio')} className={mediaType === 'audio' ? 'active' : ''}>Audio</button>
      </div>
      <div className="drop-zone" onDrop={onDrop} onDragOver={onDragOver}>
        {selectedFile ? <div className="file-preview"><p>{selectedFile.name}</p></div> : <p>Drop your file here, or click to browse</p>}
        <input type="file" onChange={handleFileChange} accept={getAcceptedFileTypes()} className="file-input" />
      </div>
      <button onClick={handleAnalyzeClick} className="analyze-button" disabled={isLoading || !selectedFile}>{isLoading ? 'Analyzing...' : 'Analyze Media'}</button>
    </div>
  );
}

export default UploadComponent;