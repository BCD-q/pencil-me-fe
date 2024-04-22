import * as D from '../../../../resources/data';

export default function Avatar() {
  return (
    <>
      <div className="flex justify-center avatar">
        <div className="flex flex-col w-40 mt-4 rounded-full">
          <img src={D.randomAvatar()} alt="" />
        </div>
      </div>
      <div className="mx-auto my-2 text-xl text-black">{D.randomName()}</div>
    </>
  );
}
