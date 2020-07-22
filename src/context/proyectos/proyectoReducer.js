import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AÑADIR_PROYECTOS,
  PROYECTO_ERROR,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    case AÑADIR_PROYECTOS:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorFormulario: false,
      };

    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorFormulario: true,
      };

    case PROYECTO_ACTUAL:
      return {
        ...state,
        // TODO: En vez de recibir el id y luego ejecutar un .fliter() para sacar el objeto proyecto seleccionado, se puede recibir el proyecto entero y asignarlo directamente al state sin hacer el .filter(). Se deja el .filter() para observar la posibilidad de ejecutar operaciones en reducer.
        proyecto: state.proyectos.filter(
          (proyecto) => proyecto._id === action.payload
        ),
      };

    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto._id !== action.payload
        ),
        proyecto: null,
      };

    case PROYECTO_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };

    default:
      return state;
  }
};
