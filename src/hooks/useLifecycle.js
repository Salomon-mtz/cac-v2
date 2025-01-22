import { useEffect, useRef } from 'react';
import analyticsService from '../services/analytics.service';

const useLifecycle = (componentName) => {
  const mountTime = useRef(Date.now());
  const renderCount = useRef(0);

  // Track component mount
  useEffect(() => {
    const mountDuration = Date.now() - mountTime.current;
    analyticsService.trackPerformance(`${componentName}_mount`, mountDuration);

    return () => {
      const unmountTime = Date.now();
      const lifetimeDuration = unmountTime - mountTime.current;
      analyticsService.trackPerformance(`${componentName}_lifetime`, lifetimeDuration);
    };
  }, [componentName]);

  // Track renders
  useEffect(() => {
    renderCount.current += 1;
    if (renderCount.current > 1) {
      analyticsService.trackEvent(
        'Performance',
        'Re-render',
        componentName,
        renderCount.current
      );
    }
  });

  // Track performance metrics
  useEffect(() => {
    if (window.performance && window.performance.getEntriesByType) {
      const navigationTiming = performance.getEntriesByType('navigation')[0];
      if (navigationTiming) {
        analyticsService.trackPerformance(
          'page_load_time',
          navigationTiming.loadEventEnd - navigationTiming.startTime
        );
      }
    }
  }, []);

  return {
    mountTime: mountTime.current,
    renderCount: renderCount.current,
  };
};

export default useLifecycle;