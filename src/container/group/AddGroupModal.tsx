import {useState, useRef} from 'react'
import useGroupStore from '../../modules/groupStore'

export type categoryProps = {
  categoryName: string
}

export default function AddGroupModal(): JSX.Element {
  const {groupModalOpen, setGroupModalClose} = useGroupStore()
  const [groupName, setGroupName] = useState<categoryProps>()
  const modalBackground = useRef<HTMLDivElement>(null)

  return (
    <div
      className="absolute z-10 flex flex-col w-4/5 max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white shadow-md min-h-48 h-1/5 top-1/2 left-1/2 rounded-xl"
      ref={modalBackground}>
      <div className="flex justify-center my-4">그룹명</div>
      <input
        type="text"
        placeholder="그룹명을 입력해주세요"
        className="flex w-10/12 mx-auto mt-2 text-center rounded-lg just-center input input-bordered"
      />
      <button
        className="flex items-end justify-center flex-1 my-2 "
        onClick={setGroupModalClose}>
        닫기
      </button>
    </div>
  )
}
