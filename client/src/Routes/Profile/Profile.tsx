import { Formik, Form } from 'formik';
import ValidationSchemaLogIn from './1';
import {
	Input2,
	Input1,
} from '../../components/Input/Input';
import { useState } from 'react';
export default function Profile() {
	const [isInputOneEnabled, setIsInputOneEnabled] =
		useState(false);
	const [isInputTwoEnabled, setIsInputTwoEnabled] =
		useState(false);

	return (
		<section className='w-full'>
			<div className='lg:w-8/12 md:w-10/12 w-fit m-auto shadow-lg  rounded-lg flex items-center flex-col md:flex-row my-16 '>
				<div className='p-3 w-full md:w-5/12 flex justify-center flex-col items-center '>
					<div className='bg-color-primary rounded-md p-4 text-color-tertiary relative flex flex-col justify-center items-center'>
						<div
							className='absolute right-0 top-0 p-2 cursor-pointer'
							onClick={() => setIsInputOneEnabled(true)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-4 h-4 stroke-color-tertiary'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
								/>
							</svg>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-24 h-24'>
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
							validationSchema={ValidationSchemaLogIn}
							onSubmit={() => console.log()}
							initialValues={{
								name: 'Suraj Roy',
								email: 'someemail@gmail.com',
								phone: '909090909',
							}}>
							<Form className='p-3 w-full flex flex-col justify-center items-center gap-4'>
								<Input2
									type='text'
									disabled={!isInputOneEnabled}
									name='Name'
									className={`${
										isInputOneEnabled
											? 'outline-none text-black bg-color-tertiary rounded  p-1 w-full text-center'
											: 'bg-transparent text-color-tertiary font-medium w-full text-center uppercase'
									} cursor-pointer`}
								/>
								<Input2
									type='text'
									disabled={!isInputOneEnabled}
									name='Email'
									className={`${
										isInputOneEnabled
											? 'outline-none text-black bg-color-tertiary rounded  p-1 w-full text-center'
											: 'bg-transparent text-color-tertiary font-medium w-fit text-center uppercase'
									} cursor-pointer`}
								/>
								<Input2
									type='text'
									disabled={!isInputOneEnabled}
									name='Phone'
									className={`${
										isInputOneEnabled
											? 'outline-none text-black bg-color-tertiary rounded  p-1 w-full text-center'
											: 'bg-transparent text-color-tertiary font-medium w-fit text-center uppercase'
									} cursor-pointer`}
								/>
								<button
									className={`${
										isInputOneEnabled
											? 'border rounded-full p-2 bg-color-tertiary text-color-primary press'
											: 'hidden'
									}`}>
									Submit
								</button>
							</Form>
						</Formik>
					</div>
					<div className='flex text-color-primary p-3'>
						<p>Logout</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
							/>
						</svg>
					</div>
				</div>
				<div className='bg-color-primary p-5 py-16 md:w-7/12  md:rounded-bl-none md:rounded-r-lg rounded-b-lg relative flex flex-col justify-center items-start'>
					<div
						className='absolute right-0 top-0 p-2 cursor-pointer'
						onClick={() => setIsInputTwoEnabled(true)}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-4 h-4 stroke-color-tertiary'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
							/>
						</svg>
					</div>
					<Formik
						validateOnChange
						enableReinitialize
						validationSchema={ValidationSchemaLogIn}
						onSubmit={() => console.log('sa')}
						initialValues={{
							address: 'Down town LA',
							landmark: 'near some park',
							house: 39,
							pin: 45454,
						}}>
						<Form className='p-3 w-full flex flex-col gap-4 justify-end 	'>
							<Input1
								type='text'
								name='Address'
								placeholder='Address..'
								disabled={!isInputTwoEnabled}
								className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  md:w-11/12 w-full shadow-xl ml-2 cursor-pointer capitalize '
							/>
							<Input1
								type='text'
								name='Landmark'
								placeholder='Landmark...'
								disabled={!isInputTwoEnabled}
								className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  w-11/12 shadow-xl ml-2 cursor-pointer capitalize'
							/>
							<Input1
								type='text'
								name='House'
								placeholder='House Number..'
								disabled={!isInputTwoEnabled}
								className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  w-11/12 shadow-xl ml-2 cursor-pointer capitalize'
							/>
							<Input1
								type='text'
								name='Pin'
								placeholder='Pin Code..'
								disabled={!isInputTwoEnabled}
								className='bg-color-tertiary  rounded-full p-4 text-color-primary outline-none placeholder:text-color-primary  w-11/12 shadow-xl ml-2 cursor-pointer capitalize'
							/>
							<div className='m-auto'>
								<button
									className={`${
										isInputTwoEnabled
											? 'border rounded-full p-2 bg-color-tertiary text-color-primary press'
											: 'hidden'
									}`}>
									Submit
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</section>
	);
}
