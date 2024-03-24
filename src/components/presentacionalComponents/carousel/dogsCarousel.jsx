import { Carousel } from "react-bootstrap";

import DogCard from "../dogCard/DogCards";
import { getDogs } from "../../../redux/actions/actionCreator";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Style from "./carousel.module.css";

function DogsCarousel() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    if (dogs.length === 0) {
      dispatch(getDogs());
    }
  }, [dogs, dispatch]);

  return (
    <div id="adopt" className={`${Style.carouselMain} ps-5 pt-5 mt-5 `}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide  pt-5 mt-5"
        style={{ height: "80vh" }}
      >
    
        <Carousel className="carousel-inner  ">
        
          {dogs &&
            dogs.map(
              (dog, index) =>
                index % 3 === 0 && (
                  <Carousel.Item key={index}>
                    <div className="d-flex">
                      <DogCard {...dog?.dataValues} />
                      {index + 1 < dogs.length && (
                        <DogCard {...dogs[index + 1]?.dataValues} />
                      )}
                      {index + 2 < dogs.length && (
                        <DogCard {...dogs[index + 2]?.dataValues} />
                      )}
                    </div>
                  </Carousel.Item>
                )
            )}
   
        </Carousel>
        
      </div>
    </div>
  );
}

export default DogsCarousel;
