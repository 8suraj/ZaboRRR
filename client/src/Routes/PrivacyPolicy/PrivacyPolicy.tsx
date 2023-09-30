import { Article } from '../../components';
const data = [
	{
		content:
			'Please read these terms & conditions carefully before using https://zaborrr.vercel.app website or mobile applications which are operated and managed by A4Mercentiles Private Limited.Your access to and use of the service is conditioned on your acceptance of and compliance with these terms and conditions. These terms and conditions apply to all visitors, users, and others who access, download, register, and use the ZABORRR website/application. By accessing, downloading, or using the ZABORRR website/application you agree to be bound by these terms. If you disagree with any part of the terms then you may not access the website/application.',
	},
	{
		header: '',
		content: [''],
	},
];
export default function Privacypolicy() {
	return (
		<section className='w-full p-6 '>
			<div className='md:w-10/12 w-full m-auto  relative  p-2'>
				<div className='absolute text-white shadow-lg bg-color-primary rounded-lg md:p-3 p-2 font-Jetbrains font-bold md:text-[1.5rem] lg:text-[2rem] text-[.6rem] left-2/4 heroAbs'>
					PRIVACY POLICY
				</div>
				{data.map((e) => (
					<Article header={e?.header} content={e.content} />
				))}
			</div>
		</section>
	);
}
