import axios from 'axios';
import appConfig from '../config/app.config';

const api = axios.create({
  baseURL: appConfig.api.baseURL,
  timeout: appConfig.api.timeout,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add headers or do transformations here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle specific error cases
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server error
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export const contactService = {
  sendMessage: (data) => {
    return api.post(appConfig.forms.endpoints.contact, data);
  },
};

export const inscriptionService = {
  submit: (data) => {
    return api.post(appConfig.forms.endpoints.inscription, data);
  },
  getAvailableGrades: () => {
    return api.get('/api/grades/available');
  },
};

export const newsletterService = {
  subscribe: (email) => {
    return api.post('/api/newsletter/subscribe', { email });
  },
  unsubscribe: (email) => {
    return api.post('/api/newsletter/unsubscribe', { email });
  },
};

export const analyticsService = {
  trackEvent: (eventName, eventData) => {
    return api.post('/api/analytics/event', { name: eventName, data: eventData });
  },
};

export default api;