import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

function Forms() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [validationStates, setValidationStates] = useState({
    emailState: true,
    passwordState: true,
  });

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const clickSubmit = () => {
    console.log(formValues);
    validationStates.emailState && validationStates.passwordState
      ? alert("Formulario enviado")
      : alert("Error de autenticación. Revise sus credenciales");
  };

  const validateEmailState = () => {
    formValues.email.includes("@") &&
    formValues.email.includes(".") &&
    formValues.email.length > 0
      ? setValidationStates({ ...validationStates, emailState: true })
      : setValidationStates({ ...validationStates, emailState: false });
  };

  const validatePasswordState = () => {
    formValues.password.length >= 6 &&
    formValues.password.match(/[0-9]/) &&
    formValues.password.match(/[a-zA-Z]/)
      ? setValidationStates({ ...validationStates, passwordState: true })
      : setValidationStates({ ...validationStates, passwordState: false });
  };

  const clickErase = () => {
    setFormValues({ email: "", password: ""});
  };

  return (
    <div>
      <h1>Inicio de sesión</h1>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            isInvalid={!validationStates.emailState}
          />
          {!validationStates.emailState && (
            <Form.Text className="text-muted">
              {" "}
              Please enter a valid email
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
            isInvalid={!validationStates.passwordState}
          />
          {!validationStates.passwordState && (
            <Form.Text className="text-muted">
              {" "}
              Your password should be have numbers and letters and should be at
              least 6 characters long
            </Form.Text>
          )}
        </Form.Group>
        <Row>
          <Col>
            <Button variant="primary" onClick={clickSubmit}>
              Ingresar
            </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={clickErase}>
              Cancelar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Forms;
