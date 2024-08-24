import { useState } from "react";
import diseño1 from "../assets/diseñoUsuario.jpeg";
import "../styles/preguntaB.css";

const PreguntaB = function () {
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
      <h2>
        ¿Cuál es la importancia del diseño centrado en el usuario en
        programación web?
      </h2>
      <div className="containerB">
        <img src={diseño1} alt="Parte delantera" className="imagenB" />
        <div className="backside">
          <ul className="lista">
            <p className="parrafoB">
              El Diseño Centrado en el Usuario (DCU) es fundamental en el mundo
              del diseño web. Aquí estan algunas de las razones por las que es
              importante:
            </p>
            <li>
              Mejora la Experiencia del Usuario (UX): DCU asegura que el diseño
              del sitio web se alinee con las necesidades, preferencias y
              comportamientos de los usuarios finales. Esto resulta en una
              experiencia más intuitiva y satisfactoria, lo que puede aumentar
              la satisfacción y retención del usuario.
            </li>
            <li>
              Aumenta la Usabilidad: Al diseñar con el usuario en mente, se
              facilita la navegación y el uso del sitio. Los usuarios encuentran
              más fácil completar tareas y encontrar la información que buscan,
              lo que puede reducir la tasa de abandono del sitio.
            </li>
            <li>
              Optimiza la Eficiencia: Un diseño centrado en el usuario
              identifica y elimina puntos de fricción, lo que hace que el sitio
              sea más eficiente y rápido de usar. Esto puede resultar en una
              mayor productividad para los usuarios y una menor necesidad de
              soporte técnico.
            </li>
            <li>
              Fomenta la Inclusión: El DCU considera la diversidad de usuarios,
              incluyendo aquellos con discapacidades o diferentes habilidades
              tecnológicas. Esto garantiza que el sitio sea accesible para una
              audiencia más amplia.
            </li>
            <li>
              Incrementa la Conversión: Al enfocar el diseño en las necesidades
              y comportamientos de los usuarios, es más probable que el sitio
              web cumpla con sus objetivos comerciales, como aumentar las
              conversiones, ventas o suscripciones.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default PreguntaB;
