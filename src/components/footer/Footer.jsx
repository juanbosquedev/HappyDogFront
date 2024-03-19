import { Container, Row, Col } from "react-bootstrap";
import Style from "./Footer.module.css"
function Footer() {
  return (
    <footer className=" py-4">
      <Container className={Style.ooterContainer}>
        <Row className="justify-content-center position-relative">
          <Col md={3}>
            <h5>

              <img
              className="position-absolute rounded" 
                style={{ height: "25px", left:"-15px"}}
                src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710794343/happydog/logoColor_acvpra.png"
                alt="image-logo"
              ></img>
              Happy Dog
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none" style={{color:"rgb(153, 209, 160)"}}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none" style={{color:"rgb(153, 209, 160)"}}>
                  Adoptar
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none" style={{color:"rgb(153, 209, 160)"}}>
                  Quienes somos
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none" style={{color:"rgb(153, 209, 160)"}}>
                  Dar en Adopción
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>happyDog@hotmail.com</li>
              <li>Teléfono: 57-7119333</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Dirección</h5>
            <ul className="list-unstyled">
              <li>Av. Los Sauces 5678, Cali, Colombia</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Redes</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none" style={{color:"rgb(153, 209, 160)"}}>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none" style={{color:"rgb(153, 209, 160)"}}>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none" style={{color:"rgb(153, 209, 160)"}}>
                  X
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none" style={{color:"rgb(153, 209, 160)"}}>
                  Youtube
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr className="my-2 border-5" style={{ width: "90%", margin: "auto",color:"white"  }} />
      <p className="text-center mb-0" style={{  color:"aliceblue"}}>
        © Juan Bosque Todos los derechos reservados 2024
      </p>
    </footer>
  );
}

export default Footer;
