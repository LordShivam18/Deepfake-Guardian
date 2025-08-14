import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
});

export const analyzeMediaFile = async (file, mediaType) => {
  const formData = new FormData();
  formData.append('file', file);

  let endpoint = '';
  switch (mediaType) {
    case 'image':
      endpoint = '/analyze/image';
      break;
    case 'video':
      endpoint = '/analyze/video';
      break;
    case 'audio':
      endpoint = '/analyze/audio';
      break;
    default:
      throw new Error('Invalid media type specified.');
  }

  try {
    const response = await apiClient.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.detail || error.message;
    throw new Error(errorMessage);
  }
};