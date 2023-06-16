import * as yup from 'yup';

export const designValidationSchema = yup.object().shape({
  url: yup.string().required(),
  status: yup.string().required(),
  project_id: yup.string().nullable(),
});
