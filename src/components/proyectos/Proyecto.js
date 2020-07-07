import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  // Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  // Obtener el state de tareas
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  // Función para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // Fijar un proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se haga click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        // TODO: En vez de pasar el id y luego ejecutar un .fliter() desde reducer para sacar el objeto proyecto seleccionado desde aquí, se le puede pasar el proyecto entero y asignarlo directamente al state sin hacer el .filter()
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
