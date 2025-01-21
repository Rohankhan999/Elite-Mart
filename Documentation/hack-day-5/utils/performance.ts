export const performanceMetrics = {
  measurePageLoad: () => {
    const navigation = performance.getEntriesByType('navigation')[0];
    return {
      loadTime: (navigation as PerformanceNavigationTiming).loadEventEnd - (navigation as PerformanceNavigationTiming).startTime,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0],
      largestContentfulPaint: performance.getEntriesByName('largest-contentful-paint')[0]
    };
  }
};
