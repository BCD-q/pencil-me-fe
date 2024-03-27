import Link from 'next/link';

export default function LoginInput(): JSX.Element {
  return (
    <>
      <input
        type="text"
        placeholder="계정명"
        className="w-11/12 mx-auto mt-4 rounded-lg input input-bordered"
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-11/12 mx-auto mt-2 rounded-lg input input-bordered "
      />
      <Link
        href="../main"
        className="btn bg-[#78be5e] mt-10 mb-6 text-white w-11/12 mx-auto text-lg"
      >
        <button>로그인</button>
      </Link>
    </>
  );
}
