'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import AddInspiFooter from './components/AddInspiFooter';
import ExternalHeader from './components/ExternalHeader';

export default function ExternalPage() {
  const param = useSearchParams();
  const externalUrl: any = param.get('url');
  const title: string | null = param.get('title');

  useEffect(() => {
    console.log(title);
  }, [externalUrl, title]);

  return (
    <div className="w-full h-[100vh]">
      <ExternalHeader title={title} />
      <iframe
        src={externalUrl}
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
      <AddInspiFooter url={externalUrl} />
    </div>
  );
}
