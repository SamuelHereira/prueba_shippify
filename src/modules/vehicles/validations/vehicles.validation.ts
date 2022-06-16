import * as yup from "yup";

export const vehiclesFormSchema = yup.object().shape({
  driver_id: yup.number().required(),
  plate: yup.string().required(),
  model: yup.string().required(),
  type: yup.string().required(),
  capacity: yup.string().required(),
});

//paginacion
//agrgear conductor
// al agregar vehiculo limpiar los inputs
