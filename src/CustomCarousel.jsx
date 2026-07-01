import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import reactImage from "./assets/react image.jpg";
import monkeyImage from "./assets/newlegendsofmonkey_06.webp";
import reactImage2 from "./react 2.jpg";

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselImage text="Tripitaka" src={reactImage} />
        <Carousel.Caption>
          <h3>Tripitaka</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage text="The New Legends of Monkey" src={monkeyImage} />
        <Carousel.Caption>
          <h3>The New Legends of Monkey</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Monkey 2" src={reactImage2} />
        <Carousel.Caption>
          <h3>Monkey 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
