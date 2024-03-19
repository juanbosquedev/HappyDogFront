
import Style from "./Banner.module.css";

function Banner() {
  return (
    <div id="home" className={`row ${Style.bannerMain} mt-5 pt-5 `}>
      <div  className={`${Style.esferaContainer} col-6 `}>

      <div >
        <div className={`${Style.esfera} col-7 ms-5 mt-5`}>
          <img
            
            src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710778779/happydog/maindoG_zdfhgp.png"
            alt="dogBannerImage"
          />
        </div>
      </div>
      </div>
      <div className= {`col   text-container ${Style.textContainer}`}>
        <div
          className="col  "
       
     
        >
          <p
          className="lh-2 "
            style={{
           
              fontFamily: "Volkhov",
              fontWeight: 700,
             
              fontSize: "50px",
              color: "#222222",
            }}
          >
            DONDE LOS PERROS CONSIGUEN HOGAR
            <span style={{ color: "rgb(129, 204, 176)" }}> HAPPY DOG!</span>
          </p>
          <p
            className={ `lh-1  ${Style.textContainerPdos}`}
            style={{
            
              fontFamily: "Poppins",
              fontWeight: 400,
            
              fontSize: "20px",
              color: "#666",
            }}
          >
            Somos una comunidad en la que solucionamos la
            búsqueda y adopction de nuestros perros; haciendo seguimiento de
            guarda responsable.
          </p>
          <button
            className="btn align-bottom mt-5"
            style={{
             
              fontSize: "18px",
              color: "rgb(129, 204, 176)",
              borderRadius: "5px",
              border: "1px solid rgb(129, 204, 176)",
              height: "60px",
              width: "178px",
              backgroundColor: "#ffffff",
            }}
          >
            ADOPTA
          </button>
        </div>
        <h1 className={Style.titulo}>
          <br />
        </h1>
        <h2 className={Style.subtitulo}></h2>
      </div>
    </div>
  );
}

export default Banner;
