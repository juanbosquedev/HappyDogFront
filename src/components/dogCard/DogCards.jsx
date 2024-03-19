import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DogCard({ image }) {
  return (
    <Card className=" container-fluid p-0" style={{ width: "18rem" }}>
      <Card.Img style={{height:"200px", width:"100%"}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the `&lsquo;` content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default DogCard;

DogCard.propTypes = {
  image: PropTypes.string,
};
