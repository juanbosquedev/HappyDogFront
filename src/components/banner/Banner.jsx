import Style from "./Banner.module.css";
import CustomButton from "../customButton/CustomButton";

function Banner() {
  return (
   

    <div id="home" className={`row  ${Style.bannerMain} `}>
      <div className="col-6 imageC">
        <div className={Style.esfera}>
          <img
            className={Style.esferaImg}
            src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710778779/happydog/maindoG_zdfhgp.png"
            alt=""
          />
        </div>
      </div>

      <div className="col-6 text-container">
        <h1 className={Style.titulo}>

          AYUDANOS A AYUDAR!
          EN HAPPY DOGS DONDE NUESTROS PERROS CONSIGUEN HOGAR
          SUMATE!
          <button>adoptar button</button>
          DONDE <br /> NUESTROS PERROS
        </h1>
        <h2 className={Style.subtitulo}>CONSIGUEN HOGAR</h2>

        <CustomButton color="rgb(129, 204, 176) " size={26} content="Hola" />
      </div>
    </div>
  );
}

export default Banner;
