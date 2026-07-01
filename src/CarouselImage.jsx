const CarouselImage = ({ src, text }) => {
  return (
    <img
      className="carousel-image"
      src={src}
      alt={text}
    />
  );
};

export default CarouselImage;
