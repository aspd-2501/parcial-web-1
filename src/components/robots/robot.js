import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { FormattedMessage} from "react-intl";


function Robot(props) {
  const [robot, setRobot] = useState([]);

  console.log(props.id);

  const URL = "http://localhost:3001/robots/" + props.id;

  console.log(URL);
  
  fetch(URL)
    .then((data) => data.json())
    .then((data) => setRobot(data));

  console.log(robot);

  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      <Card.Body>
        <Card.Title>{props.robot.nombre}</Card.Title>
        <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={robot.imagen}
        alt={robot.nombre}
      />
        <Card.Text><FormattedMessage id="añoFabricacion" /> {props.robot.añoFabricacion}</Card.Text>
        <Card.Text> <FormattedMessage id="capacidadProcesamiento" /> {props.robot.capacidadProcesamiento}</Card.Text>
        <Card.Text><FormattedMessage id="humor" /> {props.robot.humor}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Robot;
