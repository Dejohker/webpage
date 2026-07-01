const CarouselImage = ({ src, text }) => {
  return (
    <img
      src={src}
      alt={text}
      style={{
        width: "50%",
        height: "auto",
        display: "block",
        objectFit: "cover",
        margin: "0 auto",
      }}
    />
  );
};

export default CarouselImage;
