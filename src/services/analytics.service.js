import appConfig from '../config/app.config';

class AnalyticsService {
  constructor() {
    this.initialized = false;
    this.gaId = appConfig.analytics.googleAnalyticsId;
  }

  init() {
    if (this.initialized) return;

    // Initialize Google Analytics
    if (this.gaId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', this.gaId);
    }

    this.initialized = true;
  }

  // Track page views
  trackPageView(path) {
    if (!this.initialized) return;

    if (this.gaId) {
      window.gtag('event', 'page_view', {
        page_path: path,
      });
    }
  }

  // Track events
  trackEvent(category, action, label = null, value = null) {
    if (!this.initialized) return;

    if (this.gaId) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }

  // Track user interactions
  trackInteraction(elementId, interactionType) {
    this.trackEvent('User Interaction', interactionType, elementId);
  }

  // Track form submissions
  trackFormSubmission(formName, success = true) {
    this.trackEvent('Form', success ? 'Submission Success' : 'Submission Error', formName);
  }

  // Track errors
  trackError(error, source) {
    this.trackEvent('Error', error.message || 'Unknown Error', source);
  }

  // Track feature usage
  trackFeatureUsage(featureName) {
    this.trackEvent('Feature', 'Usage', featureName);
  }

  // Track performance metrics
  trackPerformance(metric, value) {
    this.trackEvent('Performance', metric, null, value);
  }
}

export default new AnalyticsService();