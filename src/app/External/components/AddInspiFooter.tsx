import { IoIosAddCircleOutline } from 'react-icons/io';

export default function AddInspiFooter() {
  return (
    <div className="flex flex-col sticky bottom-0 bg-accent h-12 rounded-t-xl">
      <button className="flex ml-auto mr-4 items-center text-white w-1/6 h-full">
        <IoIosAddCircleOutline className="w-6 h-6 mr-1" />
        추가
      </button>
    </div>
  );
}
