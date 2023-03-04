import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required")
});

export default ValidationSchema;
