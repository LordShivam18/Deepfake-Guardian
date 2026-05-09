## Deepfake Guardian - Web Interface
This repository contains the frontend application for Deepfake Guardian, an AI-powered system designed to detect facial manipulations in videos. This client provides a modern, intuitive dashboard for users to upload media and visualize detection results in real-time.

Tech Stack
Framework: React.js

Styling: Tailwind CSS

State Management: Zustand

Web Server: Nginx (for production builds)

Deployment: Docker

🛠️ Features
Drag-and-Drop Upload: Simple interface for submitting video files for analysis.

Real-time Visualization: Displays frame-by-frame detection confidence levels.

Responsive Design: Optimized for both desktop and mobile viewing.

Secure Communication: Interfaces with a FastAPI backend to provide secure and fast predictions.

 Getting Started
Prerequisites
Node.js (v18+)

npm or yarn

Local Development
Clone the repository:

Bash
git clone https://github.com/LordShivam18/Deepfake-Guardian.git
cd Deepfake-Guardian
Install dependencies:

Bash
npm install
Start the development server:

Bash
   npm run dev
🐳 Docker Deployment
This project is fully containerized using Docker and served via Nginx for high performance.

Build the Docker image:

Bash
docker build -t deepfake-guardian-frontend .
Run the container:

Bash
docker run -p 80:80 deepfake-guardian-frontend
🔗 Connection to Backend
By default, the frontend expects the Deepfake Guardian Backend API to be running at http://localhost:8000. You can update the API endpoint in your .env file:

Code snippet
VITE_API_URL=https://your-backend-api.com
🛡️ License
Distributed under the MIT License. See LICENSE for more information.
