import * as Yup from 'yup';

const ValidationSchemaLogIn = Yup.object().shape({
	address: Yup.string().length(3).required('required'),
});

export default ValidationSchemaLogIn;
