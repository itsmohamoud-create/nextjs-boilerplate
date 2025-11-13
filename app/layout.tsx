import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MA TRANSFORM LAB | Complete Transformation Ecosystem',
  description: 'Strategic ecosystem for emotional mastery, health optimization, and business growth. Transform Your Mind. Rebuild Your Body. Build Your Future.',
  keywords: 'business transformation, AI courses, emotional mastery, health optimization, MA Builders Lab',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
