'use client';
import { Auth0Provider } from '@auth0/auth0-react';

export function Auth0ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Auth0Provider
      domain="dev-izvhwekqmawhub10.us.auth0.com"
      clientId="mjc6WwBVWhAgAgfu7PaqBkw83QF4oEdt"
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : ''
      }}
    >
      {children}
    </Auth0Provider>
  );
}
