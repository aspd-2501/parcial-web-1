import React, { useEffect, useState } from "react";
import Robot from "./robot";
import { FormattedMessage, useIntl } from "react-intl";

const Robots = () => {
//   const intl = useIntl();
//   const backgroundColor = intl.formatMessage({ id: "BackgroundColor" });
//   const textColor = intl.formatMessage({ id: "Words" });

  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/robots")
      .then((response) => response.json())
      .then((data) => setRobots(data));
  }, []);

  return (
    <div>
      <table className="table">
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
              <FormattedMessage id="empresaFabricante" />
            </th>
          </tr>
        </thead>
        <tbody>
          {robots.map((e, i) => (
            <Robot key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Robots;
