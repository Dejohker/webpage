const CarouselImage = ({ src, text }) => {
  return (
    <img
      src={src}
      alt={text}
      style={{ width: "400px", height: "300px", objectFit: "cover" }}
    />
  );
};

export default CarouselImage;
