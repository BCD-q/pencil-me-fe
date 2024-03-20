export default function Check() {
  return (
    <div>
      <div className="flex flex-col items-center flex-grow mt-2 bg-gray-200 border-8 border-slate-200 ">
        <button className=" pl-4 pt-3 flex justify-start w-11/12 h-12 mt-2 text-lg bg-white rounded-t-lg border-b-[1px]  border-gray-200">
          오늘
        </button>
        <button className="flex justify-start w-11/12 h-12 pt-2 pl-4 text-lg bg-white rounded-b-lg">
          주요 목표
        </button>
      </div>
    </div>
  );
}
