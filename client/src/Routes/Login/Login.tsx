import { Form, Formik } from 'formik';
import { Input2 } from '../../components/Input/Input';
import { Link } from 'react-router-dom';
export default function Login() {
	return (
		<section className='w-full pt-6'>
			<div className=' xl:w-4/12 lg:w-5/12 md:w-7/12 w-11/12 m-auto shadow-xl  rounded-lg flex items-center flex-col md:flex-row my-16  bg-color-primary p-3 relative pt-12'>
				<div className='absolute  left-2/4 top-0 heroAbs'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-24 h-24 stroke-color-primary fill-color-tertiary rounded-full shadow-xl  '>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
						/>
					</svg>
				</div>
				<Formik
					validateOnChange
					enableReinitialize
					onSubmit={() => console.log('sa')}
					initialValues={{
						email: '',
						password: '',
					}}>
					<Form className='p-3 w-full flex flex-col gap-4 justify-center'>
						<Input2
							type='email'
							name='email'
							placeholder='Email..'
							className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  md:w-11/12 w-full shadow-xl ml-2 cursor-pointer capitalize '
						/>
						<Input2
							type='passowrd'
							name='passowrd'
							placeholder='Passowrd..'
							className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  md:w-11/12 w-full shadow-xl ml-2 cursor-pointer capitalize '
						/>
						<Link
							to='/register'
							className='block m-auto text-white font-medium'>
							Don’t have account ?{' '}
							<span className='text-bold font-bold'>
								Sign Up
							</span>
						</Link>
						<div className='m-auto'>
							<button className='border rounded-full p-2 px-4 bg-color-tertiary font-semibold text-color-primary press shadow-xl'>
								Login
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</section>
	);
}
