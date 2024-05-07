import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdSummarize } from 'react-icons/md';

import Summarize from './Summarize';

export default function AddInspiFooter({ url }: { url: string }) {
  const [summarize, setSummarize] = useState<boolean>(false);
  return (
    <div className="flex flex-row sticky bottom-0 bg-accent h-16">
      {summarize && <Summarize url={url} />}
      <button
        className="btn relative w-1/4 text-white border-none my-auto text-xs sm:text-md"
        onClick={() => {
          setSummarize(!summarize);
          console.log(summarize);
        }}
      >
        <MdSummarize className="w-1/6" />
        요약하기
      </button>
      <button className="flex btn ml-auto mr-4 items-center my-auto w-1/4 bg-white text-accent text-xs sm:text-md">
        <FaPlus className="w-1/6" />
        추가
      </button>
    </div>
  );
}
