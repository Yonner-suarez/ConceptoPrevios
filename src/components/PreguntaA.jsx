import { useState } from "react";
import clientServer from "../assets/client-server.jpg";
import clientServer2 from "../assets/cliente-server2.jpg";
import "../styles/preguntaA.css";
const PreguntaA = function () {
  const [mostrarTexto, setMostrarTexto] = useState(false);
  const [mostrarTexto1, setMostrarTexto1] = useState(false);
  const handleClick = (NoT) => {
    switch (NoT) {
      case 1:
        setMostrarTexto(!mostrarTexto);
        break;
      case 2:
        setMostrarTexto1(!mostrarTexto1);
    }
  };
  return (
    <>
      <h2>¿Qué es la arquitectura Cliente/Servidor en desarrollos web?</h2>
      <div className="container">
        <div
          className={`imagenPreguntaA ${mostrarTexto ? "flip" : ""}`}
          onClick={() => handleClick(1)}
        >
          <img src={clientServer} alt="Parte delantera" />
          <div className="backside">
            <p className="parrafo">
              La arquitectura Cliente/Servidor es un modelo de diseño
              fundamental en los desarrollos web y otros sistemas distribuidos.
              Este modelo divide una aplicación en dos partes principales: el
              cliente y el servidor. Cada uno de estos componentes tiene roles y
              responsabilidades específicos para proporcionar una experiencia de
              usuario fluida y eficiente.
            </p>
          </div>
        </div>
        <div
          className={`imagenPreguntaA ${mostrarTexto1 ? "flip" : ""}`}
          onClick={() => handleClick(2)}
        >
          <img src={clientServer2} alt="Parte delantera" />
          <div className="backside">
            <p className="parrafo">
              Cliente: El cliente inicia las peticiones de servicios hacia el
              servidor mediante la red. En la mayoría de los casos, el cliente
              es el navegador web que utilizamos para acceder a las
              aplicaciones. También puede ser una aplicación de escritorio o de
              consola.
            </p>
            <br />
            <p className="parrafo">
              Servidor: El servidor proporciona los servicios a los clientes.
              Puede consistir en diversos componentes de software instalados en
              un hardware. Espera las solicitudes de los clientes, las procesa y
              entrega las respuestas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PreguntaA;
