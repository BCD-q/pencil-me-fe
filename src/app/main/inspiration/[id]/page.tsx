import Cartegory from '@/component/common/Cartegory';

export default function Detail() {
  return (
    <div className="w-full">
      <Cartegory>디테일</Cartegory>
      <main className="flex flex-col h-1/3">
        <div className="flex justify-center">detail Name</div>
        <div className="w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          nulla necessitatibus ad, ullam tempora nobis laborum qui reprehenderit
          iste aperiam, tenetur dignissimos eligendi rerum, possimus impedit
          quasi consectetur facere quia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium nulla necessitatibus ad, ullam tempora
          nobis laborum qui reprehenderit iste aperiam, tenetur dignissimos
          eligendi rerum, possimus impedit quasi consectetur facere quia.
        </div>
      </main>
    </div>
  );
}
