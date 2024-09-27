import {IntlProvider} from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Mascota(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.mascota.foto}
       alt={props.mascota.descripcion}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/mascotas/" + props.mascota.id}>
           {props.mascota.nombre}
         </Link>
       </Card.Title>
       <Card.Text>{props.mascota.descripcion}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Mascota;