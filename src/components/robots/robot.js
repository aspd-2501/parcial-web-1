import Robots from "./robots";
import Card from "react-bootstrap/Card";
import { useState, useEffect} from "react";

function Robot(props) {

  const [robot, setRobot] = useState([]);
  const URL = "http://localhost:3001/robots/"+props.id;

  console.log(props.id)
  console.log(URL)

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setRobot(data));
  }, []);

  console.log(robot)

  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={robot.imagen}
       alt={robot.nombre}
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
