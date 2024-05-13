import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import clsx from 'clsx';

import Providers from '@/component/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#78be5e',
};

export const metadata: Metadata = {
  title: 'Pencil me',
  description:
    '사용자의 일상과 관심사를 중심으로 인공지능을 통해 개인의 생산성을 극대화하는 다양한 기능을 포함한 애플리케이션',
  manifest: '/manifest.json',
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
