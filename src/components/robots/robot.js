import {IntlProvider} from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Robot(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
    <td>{props.offer.name}</td>
     {/* <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.robot.foto}
       alt={props.robot.descripcion}
     /> */}
     <Card.Body>
       <Card.Title>
         <Link to={"/robots/" + props.robot.id}>
         </Link>
       </Card.Title>
       <Card.Text>{props.robot.anio}</Card.Text>
       <Card.Text>{props.robot.processing}</Card.Text>
       <Card.Text>{props.robot.humor}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Robot;