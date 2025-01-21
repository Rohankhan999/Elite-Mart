import React from 'react';

interface ErrorFallbackProps {
  error: {
    message?: string;
  };
}

export const ErrorFallback = ({ error }: ErrorFallbackProps) => (
  <div className="error-container">
    <h2>Something went wrong</h2>
    <p>{error.message || 'Please try again later'}</p>
    <button onClick={() => window.location.reload()}>
      Refresh Page
    </button>
  </div>
);
