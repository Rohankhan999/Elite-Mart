// Server Component (no 'use client')
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from './ClientLayout';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chairify",
  description: "Generated by create next app",
  icons: {
    icon: '/carrrt.png',
  },
  metadataBase: new URL('https://your-site.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Elite Mart',
    description: 'Your ecommerce destination',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
