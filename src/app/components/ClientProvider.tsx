'use client';

import dynamic from 'next/dynamic';
import { CartProvider } from "../context/CartContext";
import { Toaster } from 'react-hot-toast';

function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          duration: 2000,
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
            style: {
              background: '#1f2937',
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
            style: {
              background: '#1f2937',
            },
          },
        }}
      />
    </CartProvider>
  );
}

export const ClientProviderNoSSR = dynamic(
  () => Promise.resolve(ClientWrapper),
  { ssr: false }
);
