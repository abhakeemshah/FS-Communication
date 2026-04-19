import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'FS Communication',
  description: 'Minimal finance and sales workflow dashboard.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          id="tailwind-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind = window.tailwind || {};
              window.tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      'surface-container-highest': '#dae2fd',
                      'on-tertiary-container': '#fe9562',
                      'on-error': '#ffffff',
                      'on-secondary-fixed-variant': '#38485d',
                      surface: '#faf8ff',
                      'on-primary': '#ffffff',
                      'on-background': '#131b2e',
                      'on-tertiary': '#ffffff',
                      'primary-fixed': '#e2dfff',
                      'secondary-fixed': '#d3e4fe',
                      background: '#faf8ff',
                      error: '#ba1a1a',
                      'primary-fixed-dim': '#c3c0ff',
                      'primary-container': '#3730a3',
                      'on-secondary-fixed': '#0b1c30',
                      'on-primary-container': '#a9a7ff',
                      'surface-container': '#eaedff',
                      'surface-variant': '#dae2fd',
                      'surface-tint': '#544fc0',
                      'on-error-container': '#93000a',
                      tertiary: '#511c00',
                      'on-primary-fixed-variant': '#3b35a7',
                      'on-surface': '#131b2e',
                      'on-primary-fixed': '#0f0069',
                      'secondary-fixed-dim': '#b7c8e1',
                      'inverse-primary': '#c3c0ff',
                      'tertiary-fixed': '#ffdbcc',
                      'on-tertiary-fixed': '#351000',
                      'inverse-surface': '#283044',
                      'secondary-container': '#d0e1fb',
                      'tertiary-fixed-dim': '#ffb694',
                      'outline-variant': '#c8c4d5',
                      'on-surface-variant': '#464553',
                      'surface-container-high': '#e2e7ff',
                      'error-container': '#ffdad6',
                      'surface-container-lowest': '#ffffff',
                      primary: '#1f108e',
                      outline: '#777584',
                      'surface-container-low': '#f2f3ff',
                      'surface-bright': '#faf8ff',
                      'on-secondary': '#ffffff',
                      'surface-dim': '#d2d9f4'
                    },
                    borderRadius: {
                      DEFAULT: '0.125rem',
                      lg: '0.25rem',
                      xl: '0.5rem',
                      full: '0.75rem'
                    },
                    fontFamily: {
                      headline: ['Manrope'],
                      body: ['Inter'],
                      label: ['Inter']
                    }
                  }
                }
              };
            `,
          }}
        />
        <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
