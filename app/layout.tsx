import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jyoti Suthar | Software Engineer Portfolio',
  description:
    'A modern developer portfolio for Jyoti Suthar featuring React, Next.js, AI/ML interests, and full stack projects.',
  keywords: [
    'Jyoti Suthar',
    'Software Engineer',
    'React Developer',
    'Next.js Portfolio',
    'AI ML Portfolio',
  ],
  openGraph: {
    title: 'Jyoti Suthar | Software Engineer Portfolio',
    description:
      'Modern portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.',
    type: 'website',
  },
  metadataBase: new URL('https://jyoti-portfolio.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
