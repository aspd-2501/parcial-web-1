import { useParams } from "react-router-dom";
import Robots from "./robots";
import Card from "react-bootstrap/Card";

function Robot(props) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      {/* <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.robot.foto}
       alt={props.robot.descripcion}
     /> */}
      <Card.Body>
        <Card.Title>{props.robot.nombre}</Card.Title>
        <Card.Text>{props.robot.anio}</Card.Text>
        <Card.Text>{props.robot.processing}</Card.Text>
        <Card.Text>{props.robot.humor}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Robot;
