'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    if (error && error.message.includes('401')) {
      router.push('/login');
    }
  }, [error, router]);

  return (
    <html>
      <body>
        <h1>로그인 인증이 만료되었습니다!</h1>
        <h2>로그인 페이지로 이동합니다...</h2>
      </body>
    </html>
  );
}
