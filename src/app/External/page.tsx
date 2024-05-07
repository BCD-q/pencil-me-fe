'use client';

import { useSearchParams } from 'next/navigation';

import AddInspiFooter from './components/AddInspiFooter';
import ExternalHeader from './components/ExternalHeader';

export default function ExternalPage() {
  const param = useSearchParams();

  const externalUrl = param.get('url');

  return (
    <div className="w-full h-[100vh]">
      <ExternalHeader />
      <iframe
        src={externalUrl}
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
      <AddInspiFooter />
    </div>
  );
}
