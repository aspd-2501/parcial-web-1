import { useParams } from "react-router-dom";
import Robots from "./robots";
import Card from "react-bootstrap/Card";

function Robot(props) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.robot.imagen}
       alt={props.robot.nombre}
     />
      <Card.Body>
        <Card.Title>{props.robot.nombre}</Card.Title>
        <Card.Text>{props.robot.añoFabricacion}</Card.Text>
        <Card.Text>{props.robot.capacidadProcesamiento}</Card.Text>
        <Card.Text>{props.robot.humor}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Robot;
