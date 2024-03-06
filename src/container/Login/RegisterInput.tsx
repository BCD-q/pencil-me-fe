import Link from 'next/link';

export default function RegisterInput(): JSX.Element {
  return (
    <>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="계정명"
          className="w-7/12 mx-auto mt-1 rounded-lg input input-bordered"
        />
        <button className="btn w-3/12 px-0 my-auto mx-auto bg-[#78be5e] text-white text-lg rounded-2xl">
          중복 확인
        </button>
      </div>
      <input
        type="password"
        placeholder="비밀번호"
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered "
      />
      <input
        type="password"
        placeholder="비밀번호 재입력"
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered "
      />
      <Link
        href="../main"
        className="btn bg-[#78be5e] mt-10 mb-6 text-white w-11/12 mx-auto text-lg"
      >
        <button>회원가입</button>
      </Link>
    </>
  );
}
