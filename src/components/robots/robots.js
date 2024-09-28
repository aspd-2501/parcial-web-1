import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Col, Row } from "react-bootstrap";
import "./robots.css";
import Robot from "./robot.js"

const Robots = () => {
  const [robots, setRobots] = useState([]);
  const [robotId, setRobot] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/robots")
      .then((response) => response.json())
      .then((data) => setRobots(data));
  }, []);

  console.log(robots);

  const onCardClick = (cardId) => {
    setRobot(cardId);
    setVisible(true);
  };

  return (
    <>
        <Row className="robot-row">
          <Col md={4}>
            <table className="table" onCardClick={onCardClick}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">
                    <FormattedMessage id="Nombre" />
                  </th>
                  <th scope="col">
                    <FormattedMessage id="Modelo" />
                  </th>
                  <th scope="col">
                    <FormattedMessage id="EmpresaFabricante" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {robots.map((e) => (
                  <tr key={e.id} robot={e}>
                    <td>{e.id}</td>
                    <td>{e.nombre}</td>
                    <td>{e.modelo}</td>
                    <td>{e.empresaFabricante}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
          <Col md={8}>
            {/* Aquí puedes poner el contenido de la tarjeta o lo que necesites */}
            {visible && <Robot id={robotId} />}
          </Col>
        </Row>
    </>
  );
};

export default Robots;
