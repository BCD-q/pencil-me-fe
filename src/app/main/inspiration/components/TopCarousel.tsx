import Image from 'next/image';

import BubbleImage from '../../../../resources/images/common/BubbleImage.png';
import CarouselComponent from './TopComponent';

export default function TopCarousel() {
  return (
    <div className="carousel rounded-box h-full w-full ml-2">
      <CarouselComponent />
      <CarouselComponent />
      <CarouselComponent />
      <CarouselComponent />
      <CarouselComponent />
      <CarouselComponent />
      <CarouselComponent />
      <CarouselComponent />
    </div>
  );
}
