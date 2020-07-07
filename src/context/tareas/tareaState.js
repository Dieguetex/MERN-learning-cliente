import React, { useReducer } from "react";
import tareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { v4 as uuidV4 } from "uuid";

import {
  TAREAS_PROYECTO,
  AÑADIR_TAREAS,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Clores", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      { id: 4, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { id: 5, nombre: "Elegir Clores", estado: false, proyectoId: 1 },
      { id: 6, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 7, nombre: "Elegir Clores", estado: false, proyectoId: 1 },
      {
        id: 8,
        nombre: "Elegir Plataformas de pago",
        estado: false,
        proyectoId: 2,
      },
      {
        id: 9,
        nombre: "Elegir Plataformas de pago",
        estado: false,
        proyectoId: 3,
      },
      {
        id: 10,
        nombre: "Elegir Plataformas de pago",
        estado: false,
        proyectoId: 4,
      },
    ],
    tareasProyecto: null,
    errorTarea: false,
    tareaSeleccionada: null,
  };

  // Crear el dispatch y el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Crear las funciones
  // Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // Añadir tareas al proyecto seleccionado
  const añadirTarea = (tarea) => {
    tarea.id = uuidV4();
    dispatch({
      type: AÑADIR_TAREAS,
      payload: tarea,
    });
  };

  // Valida y muestra un error en caso de que sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Eliminar las tareas por su id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // Cambia el estado de cada tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  // Extrae una tarea para editarla
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  // Edita una tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  // Elimina la tarea seleccionada
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        añadirTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
