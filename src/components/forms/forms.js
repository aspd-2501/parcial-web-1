import { useState } from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import "./forms.css";
import { useNavigate } from "react-router-dom";

function Forms() {
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
  }

  const clickSubmit = () => {
    // Crear objeto con credenciales
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
      .then((response) => {
        if (response.status === 200) {
          return response.json(); // Retorna los datos en formato JSON si es éxito
        } else if (response.status === 401) {
          throw new Error("Credenciales incorrectas");
        } else {
          throw new Error("Ocurrió un error inesperado");
        }
      })
      .then((data) => {
        if (data.status === "success") {
          setShowSuccess(true); // Mostrar mensaje de éxito
          setShowError(false);  // Ocultar mensaje de error
          handleLogin();
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setShowError(true);     // Mostrar mensaje de error
        setShowSuccess(false);  // Ocultar mensaje de éxito
      });
  };

  const clickErase = () => {
    setFormValues({ email: "", password: "" });
  };

  return (
    <div className="form-container">
      <Col md={6} className="form-wrapper">
        <h1 className="form-header mb-4">Inicio de sesión</h1>
        <Form>
        <Form.Group className="form-input">
            <Form.Label className="text">Nombre de usuario</Form.Label>
            <br />
            <Form.Control
              type="email"
              onChange={handleEmailChange}
              value={formValues.email}
            />
          </Form.Group>

          <Form.Group className="form-input">
            <Form.Label className="text">Contraseña</Form.Label>
            <br />
            <Form.Control
              type="password"
              onChange={handlePasswordChange}
              value={formValues.password}
            />
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
