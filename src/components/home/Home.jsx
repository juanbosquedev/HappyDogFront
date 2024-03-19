// import About from "../aboutUs/About";
// import MyCarousel from "../carousel/CarouselImg";
import  Banner  from "../banner/Banner";
import Footer from "../footer/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useCallback, useState, useLayoutEffect } from "react";
// import { getDogs } from "../../redux/actions/actionCreator";
// import { hasChanged } from "./compareData";

function Home() {
  // const dispatch = useDispatch();
  // const dogs = useSelector((state) => state.allDogs);
  // const [storeDog, setStoreDog] = useState([]);

  // const dok = storeDog ? storeDog : dogs;
  // useEffect(() => {
  //   if (dogs.length !== 0) {
  //     window.localStorage.setItem("dogs", JSON.stringify(dogs));
  //   }
  // });

  // const pagina = dok?.slice(0, 3);

  // const fetchDogs = useCallback(() => {
  //   if (dogs.length === 0) {
  //     setStoreDog(JSON.parse(window.localStorage.getItem("dogs")));
  //     dispatch(getDogs());
  //   }
  // }, [dogs, dispatch]);

  // useLayoutEffect(() => {
  //   fetchDogs();
  // }, [fetchDogs]);
  // //si hay cambios
  // const res = hasChanged(dogs, storeDog);
  // res === true && window.localStorage.setItem("dogs", JSON.stringify(dogs));
  return (
    <div>
      <Banner />
      {/* <About />
      {pagina && <MyCarousel pagina={pagina} />}
    */}
    <Footer /> 
    </div>
  );
}

export default Home;
