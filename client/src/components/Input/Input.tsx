import { Field, FieldProps } from 'formik';

interface Input {
	name: string;
	placeholder?: string;
	type: string;
	disabled?: boolean;
	className?: string;
}
export function Input1(props: Input) {
	const { name } = props;
	return (
		<Field name={name.toLowerCase()}>
			{({ field, meta }: FieldProps) => (
				<div className='flex flex-col items-center'>
					<div className='flex items-center w-full'>
						<div className='w-full'>
							<label
								htmlFor={name}
								className='text-white flex items-center justify-between'>
								{name}
								<input {...props} {...field} />
							</label>
						</div>
					</div>
					{meta.touched && meta.error && (
						<div className='text-red text-[.8rem] '>
							{meta.error}
						</div>
					)}
				</div>
			)}
		</Field>
	);
}
export function Input2(props: Input) {
	const { name } = props;
	return (
		<Field name={name.toLowerCase()}>
			{({ field, meta }: FieldProps) => (
				<div className='flex flex-col   '>
					<input {...props} {...field} />
					{meta.touched && meta.error && (
						<div className='text-red text-[.8rem] '>
							{meta.error}
						</div>
					)}
				</div>
			)}
		</Field>
	);
}
