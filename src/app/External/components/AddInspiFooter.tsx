import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdSummarize } from 'react-icons/md';

import Summarize from './Summarize';

export default function AddInspiFooter({ url }: { url: string }) {
  const [summarize, setSummarize] = useState<boolean>(false);
  return (
    <div className="flex bg-white flex-row sticky bottom-0 h-16">
      {summarize && <Summarize url={url} />}
      <button
        className="btn relative text-accent w-1/4 border-none my-auto text-xs sm:text-md"
        onClick={() => {
          setSummarize(!summarize);
          console.log(summarize);
        }}
      >
        <MdSummarize className="w-1/6 text-accent" />
        요약하기
      </button>
      <button className="flex btn ml-auto text-white mr-4 items-center my-auto w-1/4 bg-accent text-xs sm:text-md">
        <FaPlus className="w-1/6 text-white" />
        추가
      </button>
    </div>
  );
}
