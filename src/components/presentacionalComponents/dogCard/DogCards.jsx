import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomModalDog from "../customModalDog/CustomModalDog";

import Button from "react-bootstrap/Button";

function DogCard({
  id,
  image,
  name,
  city,
  hostage_id,
  weight,
  height,
  life_span,
  personality,
  user,
}) {
  const userId = useSelector((state) => state.userLogged.id);

  const isCurrentUserOwner = userId === hostage_id;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="container-fluid p-0 border border-0" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center align-items-center ">
        <div

        >
          <Card.Img variant="top" className="card-img-top" src={image} style={{ width: "18rem", height:"16rem"}}/>
        </div>
      </div>
      <div className="p-3" style={{backgroundColor:"rgb(240, 250, 255)"}}>
        <Card.Title className="mb-0">{name}</Card.Title>
        <Card.Text className="mb-3">📍 {city}</Card.Text>
        <Card.Text className="mb-3">
          {isCurrentUserOwner ? (
            <Button variant="light" className="border-warning text-warning  border-1 col-12" onClick={handleShow}>
              EDITAR
            </Button>
          ) : (
            <Button variant="info" className="me-2 text-light  border-3 col-12" onClick={handleShow}>
              Info Dog
            </Button>
          )}
        </Card.Text>

        <CustomModalDog
        style={{width:"100vw" ,color:"red"}}
          show={show}
          handleClose={handleClose}
          dog={{
            id,
            image,
            name,
            city,
            hostage_id,
            weight,
            height,
            life_span,
            personality,
          }}
          editable={isCurrentUserOwner}
        />
      </div>
    </Card>
  );
}

export default DogCard;

DogCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  moreInfoLink: PropTypes.string,
  isUserLoggedIn: PropTypes.bool,
  hostage_id: PropTypes.number,
};


