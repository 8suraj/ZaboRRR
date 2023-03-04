import * as Yup from "yup";
import YupPassword from 'yup-password';
YupPassword(Yup);
// const requiredField = () => Yup.string().required('required');    
// const passwordField = () =>
//   requiredField()
//     .min(
//       8,
//       'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
//     )
//     .minLowercase(1, 'password must contain at least 1 lower case letter')
//     .minUppercase(1, 'password must contain at least 1 upper case letter')
//     .minNumbers(1, 'password must contain at least 1 number')
//     .minSymbols(1, 'password must contain at least 1 special character');
const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required").min(4,"First Name should be atleast of 4"),
  password: Yup.string().required('required').min(
      8,
      'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
    )
    .minLowercase(1, 'password must contain at least 1 lower case letter')
    .minUppercase(1, 'password must contain at least 1 upper case letter')
    .minNumbers(1, 'password must contain at least 1 number')
    .minSymbols(1, 'password must contain at least 1 special character'),
  confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default ValidationSchema;

