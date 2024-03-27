import Cartegory from '../../../component/common/Cartegory';

export type MyDetails = {
  cartegory?: string;
};

const details: Array<MyDetails> = [
  { cartegory: '그룹' },
  { cartegory: '장소' },
  { cartegory: '종료일' },
  { cartegory: '종료시간' },
];

export default function Detail(): JSX.Element {
  return (
    <div className="relative h-full">
      <Cartegory>수정</Cartegory>
      <div className="flex items-center h-16 gap-2 p-2 bg-white border-t border-gray-200">
        <button className="w-4 h-4 border-2 border-gray-400 rounded-full" />
        <div className="flex flex-col">
          <div className="text-gray-700">캡스톤 디자인 과제 끝내기</div>
        </div>
      </div>
      <div className="mx-2 my-2 text-xs text-gray-400">세부사항</div>
      <div className="flex flex-col w-5/6 mx-auto bg-white rounded-xl h-1/4">
        {details.map((detail, index) => {
          const isLast = index === details.length - 1;

          return (
            <div
              key={index}
              className={`flex items-center h-1/4 gap-2 p-2 ${
                isLast ? '' : 'border-b border-gray-200'
              }`}
            >
              <div className="flex flex-col">
                <div className="text-gray-700">{detail.cartegory}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-2 my-2 text-xs text-gray-400">정보</div>
      <textarea
        className="flex flex-col w-5/6 px-2 py-2 mx-auto bg-white resize-none h-1/3 rounded-xl"
        placeholder="내용을 입력해주세요"
      ></textarea>
    </div>
  );
}
