import { GiClick } from 'react-icons/gi';

import * as D from '../../resources/data';

export default function Interest() {
  return (
    <>
      <header className="w-full h-40 bg-white text-black text-2xl flex items-center justify-center">
        <GiClick className="w-14 h-14 mr-2" />
        관심사를 눌러보세요!
      </header>
      <div className="pt-8 grid grid-cols-3 grid-rows-4 h-screen bg-[#78be5e] shadow-2xl rounded-t-xl ml-1 mr-1">
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
        <div className="flex flex-col ml-2 mr-2">
          <img src={D.randomAvatar()} className="rounded-full" alt="" />
          <div className="mx-auto mt-2 text-white">{D.randomName()}</div>
        </div>
      </div>
    </>
  );
}
