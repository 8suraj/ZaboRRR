import { Formik, Form } from 'formik';
import { Input2 } from '../../components/Input/Input';

export default function Register() {
	return (
		<section className='w-full'>
			<Formik
				validateOnChange
				enableReinitialize
				onSubmit={() => console.log('sa')}
				initialValues={{
					email: '',
					password: '',
				}}>
				<Form className='lg:w-8/12 md:w-10/12 w-full m-auto shadow-lg bg-color-primary rounded-lg flex items-center flex-col md:flex-row my-28  relative'>
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

					<div className='md:w-6/12 w-full p-12 md:rounded-l-lg flex flex-col gap-8 pb-20'>
						<Input2
							type='email'
							name='email'
							placeholder='Email..'
							className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  md:w-11/12 w-full shadow-xl ml-2 cursor-pointer capitalize '
						/>
						<Input2
							type='email'
							name='email'
							placeholder='Email..'
							className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  md:w-11/12 w-full shadow-xl ml-2 cursor-pointer capitalize '
						/>
						<Input2
							type='email'
							name='email'
							placeholder='Email..'
							className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  md:w-11/12 w-full shadow-xl ml-2 cursor-pointer capitalize '
						/>
					</div>
					<div className='md:w-6/12 w-full  p-12 md:rounded-r-lg md:rounded-bl-none rounded-b-lg flex flex-col gap-8  bg-color-tertiary pb-20'>
						<Input2
							type='email'
							name='email'
							placeholder='Email..'
							className='bg-color-tertiary  border-b-2 border-primary-light focus:border-color-primary p-4 text-color-primary outline-none out placeholder:text-color-primary  md:w-11/12 w-full  ml-2 cursor-pointer capitalize '
						/>
						<Input2
							type='email'
							name='email'
							placeholder='Email..'
							className='bg-color-tertiary  border-b-2 border-primary-light focus:border-color-primary p-4 text-color-primary outline-none out placeholder:text-color-primary  md:w-11/12 w-full  ml-2 cursor-pointer capitalize '
						/>
						<Input2
							type='email'
							name='email'
							placeholder='Email..'
							className='bg-color-tertiary  border-b-2 border-primary-light focus:border-color-primary p-4 text-color-primary outline-none out placeholder:text-color-primary  md:w-11/12 w-full  ml-2 cursor-pointer capitalize '
						/>
						<Input2
							type='email'
							name='email'
							placeholder='Email..'
							className='bg-color-tertiary  border-b-2 border-primary-light focus:border-color-primary p-4 text-color-primary outline-none out placeholder:text-color-primary  md:w-11/12 w-full  ml-2 cursor-pointer capitalize '
						/>
					</div>
					<div className=' absolute left-2/4 md:bottom-1 -bottom-4 heroAbs md:w-5/12 w-7/12'>
						<button className='border w-full rounded-full p-2 px-4 bg-color-tertiary font-semibold text-sm text-color-primary press shadow-xl'>
							Create Account
						</button>
					</div>
				</Form>
			</Formik>
		</section>
	);
}
