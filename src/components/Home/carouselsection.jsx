import ImageCarousel from "./carousel";

export default function CarouselSection({ images }) {
  return (
    <div className="carousel_section">
      <ImageCarousel images={images} />
    </div>
  );
}
