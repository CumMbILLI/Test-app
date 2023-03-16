import * as yup from 'yup';

export const validationObject = async (
  object: Object,
  validationSchema: yup.ObjectSchema<yup.AnyObject>
) => {
  const isValid = await validationSchema
    .validate(object)
    .then(() => {
      return true;
    })
    .catch(() => false);

  return isValid;
};
