'use client';

import { useSearchParams } from 'next/navigation';

import AddInspiFooter from './components/AddInspiFooter';
import ExternalHeader from './components/ExternalHeader';

export default function ExternalPage() {
  const param = useSearchParams();
  const externalUrl: any = param.get('url');

  return (
    <div className="w-full h-[100vh]">
      <ExternalHeader />
      <iframe
        src={externalUrl}
        frameBorder="0"
        width="100%"
        height="90%"
      ></iframe>
      <AddInspiFooter url={externalUrl} />
    </div>
  );
}
