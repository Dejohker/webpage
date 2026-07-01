import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import image1 from "../assets/react image.jpg"
import image2 from "../assets/newlegendsofmonkey_06.webp"

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselImage text="First slide" src={image1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage text="Second slide" src={image2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
