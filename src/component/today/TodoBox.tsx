import {FaRegStar, FaStar} from 'react-icons/fa' // reg는 빈별
import {todoList} from '../../container/today/workBox'

export default function TodoBox(props: {item: todoList}) {
  const {id, title, date, isImportant} = props.item
  return (
    <>
      <li
        key={id}
        className="flex items-center h-16 gap-2 p-2 bg-white border-t border-gray-200">
        <button className="w-4 h-4 border-2 border-gray-400 rounded-full" />
        <div className="flex flex-col">
          <div className="text-gray-700">{title}</div>
          <div className="text-sm text-gray-400">{date}</div>
        </div>
        <button className="w-4 h-4 ml-auto">
          {isImportant ? <FaStar className="text-[#78be5e]" /> : <FaRegStar />}
        </button>
      </li>
    </>
  )
}
