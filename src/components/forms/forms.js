import { useState, useEffect } from "react";
import { Col, Row, Form, Button, Alert } from "react-bootstrap";
import "./forms.css";

function Forms() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [validationStates, setValidationStates] = useState({
    emailState: true,
    passwordState: true,
  });
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const clickSubmit = () => {
    validateEmailState();
    validatePasswordState();

    if (validationStates.emailState && validationStates.passwordState) {
      alert("Formulario enviado");
      setShowError(false); // Hide the error if the form is valid
    } else {
      setShowError(true); // Show the error if the form is invalid
    }
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
    setFormValues({ email: "", password: "" });
  };

  return (
    <div className="form-container">
      <Col md={6} className="form-wrapper text-center">
        <h1 className="form-header mb-4">Inicio de sesión</h1>
        <Form>
        <Form.Group className="form-input" controlId="formBasicEmail">
            <Form.Label>Nombre de usuario</Form.Label>
            <br />
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              onChange={handleEmailChange}
              value={formValues.email}
              isInvalid={!validationStates.emailState}
            />
            {!validationStates.emailState && (
              <Form.Text className="text-danger">
                Ingrese un email válido
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="form-input" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <br />
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={handlePasswordChange}
              value={formValues.password}
              isInvalid={!validationStates.passwordState}
            />
            {!validationStates.passwordState && (
              <Form.Text className="text-danger">
                Su contraseña debe tener al menos 6 caracteres y contener
                números y letras.
              </Form.Text>
            )}
          </Form.Group>
          {showError && (
            <Alert variant="danger" className="mt-3">
              Error de autenticación. Revise sus credenciales
            </Alert>
          )}

          <div className="form-buttons mt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={clickSubmit}
            >
              Ingresar
            </Button>
            <Button
              variant="danger"
              size="lg"
              onClick={clickErase}
            >
              Cancelar
            </Button>
          </div>
        </Form>
      </Col>
    </div>
  );
}

export default Forms;
