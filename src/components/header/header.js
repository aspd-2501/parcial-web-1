import { Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Robots from './robots.png';

function Header() {
  return (
    <Row responsive="true">
      <Col>
        <div className="page-title">
          <h1 className="text-title">Adopta un Robot con Robot Lovers!</h1>
        </div>
        <hr className="custom-hr"></hr>
        <Image src={Robots} fluid alt="robots" responsive="true"/>
        <hr className="custom-hr"></hr>
      </Col>
    </Row>
  );
}

export default Header;