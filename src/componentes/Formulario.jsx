import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfir, setPasswordConfir] = useState("");

  return (
    <>
      <h1>Formularios con Hooks</h1>

      <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre
          </label>
          <input
            onChange={(evento) => setNombre(evento.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            onChange={(evento) => setApellido(evento.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(evento) => setEmail(evento.target.value)}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(evento) => setPassword(evento.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar Password</label>
          <input
            onChange={(evento) => setPasswordConfir(evento.target.value)}
            type="password"
            className="form-control"
          />
        </div>
      </form>
      <div>
        <h2>Contenido del Formulario</h2>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Pasword: {passwordConfir}</p>
      </div>
    </>
  );
};

export default Formulario;
