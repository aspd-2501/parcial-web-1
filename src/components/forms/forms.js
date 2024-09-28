import { useState } from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import "./forms.css";
import { useNavigate } from "react-router-dom";
import { useIntl, FormattedMessage } from "react-intl";

function Forms() {
  const intl = useIntl();
  const navegate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleLogin = () => {
    navegate("/robots");
  };

  const clickErase = () => {
    setFormValues({ email: "", password: "" });
  };

  const clickSubmit = () => {
    const loginData = {
      login: formValues.email,
      password: formValues.password,
    };

    // Realizar la solicitud POST
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((loginData) => {
        console.log(loginData);

        if (loginData.status === "success") {
          setShowSuccess(true); // Mostrar mensaje de éxito
          setShowError(false); // Ocultar mensaje de error
          handleLogin();
        } else {
          setErrorMessage(intl.formatMessage({ id: "mensajeError" }));
          setShowError(true); // Mostrar mensaje de error
          setShowSuccess(false); // Ocultar mensaje de éxito
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="form-container">
      <Col md={6} className="form-wrapper">
        <h1 className="form-header mb-4">
          <FormattedMessage id="login" />
        </h1>
        <Form className="form-component">
          <Form.Group className="form-input">
            <Form.Label className="text">
              <FormattedMessage id="usuario" />
            </Form.Label>
            <br />
            <Form.Control
              type="email"
              onChange={handleEmailChange}
              value={formValues.email}
              className="form-control"
              isInvalid={showError}
              style={{ backgroundColor: "#D9D9D9", borderRadius: "0%" }}
            />
          </Form.Group>
          <Form.Group className="form-input">
            <Form.Label className="text">
              <FormattedMessage id="password" />
            </Form.Label>
            <br />
            <Form.Control
              type="password"
              onChange={handlePasswordChange}
              value={formValues.password}
              className="form-control"
              isInvalid={showError}
              style={{ backgroundColor: "#D9D9D9"}}
            />
          </Form.Group>
          <div className="form-buttons">
            <Button variant="primary" size="lg" onClick={clickSubmit}>
              <FormattedMessage id="ingresar" />
            </Button>
            <Button variant="danger" size="lg" onClick={clickErase}>
              <FormattedMessage id="cancelar" />
            </Button>
          </div>
          {showError && (
            <Alert variant="danger" className="mt-3">
              <p className="error">
                <FormattedMessage id="mensajeError" />
              </p>
            </Alert>
          )}
        </Form>
      </Col>
    </div>
  );
}

export default Forms;
