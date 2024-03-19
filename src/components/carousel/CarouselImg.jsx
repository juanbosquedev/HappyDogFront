
import { Carousel } from 'react-bootstrap';
import images from "../../assets/react.svg"
import img1 from "../../assets/peackuImg.png";
import img2 from "../../assets/final.png"

function MyCarousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <Carousel className="carousel-inner">
        <Carousel.Item className="carousel-item active">
          <img src={images} className="d-block w-20" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img src={img1} className="d-block w-20" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img src={img2} className="d-block w-20" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MyCarousel;
