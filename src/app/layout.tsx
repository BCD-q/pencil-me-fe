import type { Viewport } from 'next';
import { Inter } from 'next/font/google';

import clsx from 'clsx';

import Providers from '@/component/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={clsx(
          inter.className,
          'w-full m-auto h-screen flex flex-col bg-slate-50',
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
