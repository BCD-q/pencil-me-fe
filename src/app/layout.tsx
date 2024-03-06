import { Inter } from 'next/font/google';

import clsx from 'clsx';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
        {children}
      </body>
    </html>
  );
}
