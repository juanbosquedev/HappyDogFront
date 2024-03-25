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
        {/* <div id="carouselExampleIndicators" className="carousel slide"> */}
  {/* <div className="carousel-indicators bg-primary">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  {/* <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev bg-secondary " style={{width:"32px"}}  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next bg-secondary" style={{width:"32px"}}  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
        <Carousel className="carousel-inner  ">
          {dogs ? (
            dogs?.map(
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
            )
          ) : (
            <p >
              <span>Cargando...</span>
            </p>
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default DogsCarousel;
