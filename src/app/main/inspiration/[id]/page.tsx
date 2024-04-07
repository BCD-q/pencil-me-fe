import Cartegory from '@/component/common/Cartegory';

export default function Detail() {
  return (
    <div className="w-full">
      <Cartegory>디테일</Cartegory>
      <main className="flex flex-col h-2/3 w-3/4 mx-auto">
        <div className="flex mx-auto box-border">detail Name</div>
        <div className="">
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
