import DogCard from "../dogCard/DogCards";
import { getDogs } from "../../../redux/actions/actionCreator";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Style from "./fakeCarousel.module.css";
export const FakeCarousel = () => {
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
        id="carouselExample"
        className="carousel slide  pt-5 mt-5"
        style={{ height: "80vh" }}
      >
        <div className="carousel-inner">
          {dogs ? (
            dogs?.map(
              (dog, index) =>
                index % 3 === 0 && (
                  <div className="carousel-item active" key={index}>
                    <div className="d-flex">
                      <DogCard {...dog?.dataValues} />
                      {index + 1 < dogs.length && (
                        <DogCard {...dogs[index + 1]?.dataValues} />
                      )}
                      {index + 2 < dogs.length && (
                        <DogCard {...dogs[index + 2]?.dataValues} />
                      )}
                    </div>
                  </div>
                )
            )
          ) : (
            <p>
              <span>Cargando...</span>
            </p>
          )}

          <button
            className="carousel-control-prev bg-secondary rounded"
            style={{
              width: "40px",
              height: "50px",
              margin: "auto",
              marginLeft: "78px",
            }}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-secondary rounded"
            style={{
              width: "40px",
              height: "50px",
              margin: "auto",
              marginRight: "78px",
              zIndex: "-10",
            }}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
