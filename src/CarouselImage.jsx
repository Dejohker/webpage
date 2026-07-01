const CarouselImage = ({ src, text }) => {
  return <img src={src} alt={text}  style={ {Width: "100%", height:'400px', objectFit:"cover" } }/>
}

export default CarouselImage;
