import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DogCard from "../dogCard/DogCards";
import { getDogs } from "../../../redux/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Style from "./FackeCarousel.module.css";

export const FakeCarousel = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    if (dogs.length === 0) {
      dispatch(getDogs());
    }
  }, [dogs, dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="adopt" className={`${Style.carouselMain} ps-5 pt-5 mt-5 `}>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {dogs ? (
          dogs.map((dog, index) => (
            <div key={index}>
              <DogCard {...dog.dataValues} />
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </Carousel>
    </div>
  );
};
