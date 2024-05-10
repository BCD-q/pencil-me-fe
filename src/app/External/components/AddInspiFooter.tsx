import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdSummarize } from 'react-icons/md';

import Summarize from './Summarize';

export default function AddInspiFooter({ url }: { url: string }) {
  const [summarize, setSummarize] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="flex bg-white flex-row sticky bottom-0 h-16">
      {summarize && <Summarize url={url} />}
      <button
        className={`btn relative text-accent w-1/4 border-none my-auto text-sm sm:text-md
        ${clicked ? '' : 'animate-pulse'}`}
        onClick={() => {
          setClicked(!clicked);
          setSummarize(!summarize);
          console.log(summarize);
        }}
      >
        요약하기
      </button>
      <button className="flex btn ml-auto text-white mr-4 items-center my-auto w-1/4 bg-accent text-xs sm:text-md">
        <FaPlus className="w-1/6 text-white" />
        추가
      </button>
    </div>
  );
}
