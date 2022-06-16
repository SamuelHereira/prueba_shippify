import * as yup from "yup";

export const driverSchema = yup.object().shape({
  city: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  avatar_url: yup.string().required(),
  status: yup.string().required(),
  company_id: yup.number().required(),
});
