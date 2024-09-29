import Card from "react-bootstrap/Card";
import { useState } from "react";
import { FormattedMessage} from "react-intl";


function Robot(props) {
  const [robot, setRobot] = useState([]);
  const URL = "http://localhost:3001/robots/" + props.id;
  const imageURL = "https://github.com/isis3710-uniandes/202420_S1_Parcial1_Back/blob/master/images/robot"+ props.id + ".png";
  
  fetch(URL)
    .then((data) => data.json())
    .then((data) => setRobot(data));

  console.log(imageURL);

  return (
    <Card style={{ width: "25rem", height: "24rem" }}>
      <Card.Body>
        <Card.Title>{robot.nombre}</Card.Title>
        <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={imageURL}
        alt={robot.nombre}
      />
        <Card.Text><FormattedMessage id="añoFabricacion" /> {robot.añoFabricacion}</Card.Text>
        <Card.Text> <FormattedMessage id="capacidadProcesamiento" /> {robot.capacidadProcesamiento}</Card.Text>
        <Card.Text><FormattedMessage id="humor" /> {robot.humor}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Robot;
