import dustbin from '../../assets/svg/hero/dustbin.svg';
import calender from '../../assets/svg/hero/calender.svg';
import like from '../../assets/svg/hero/like.svg';
import truck from '../../assets/svg/hero/truck.svg';
import weight from '../../assets/svg/hero/weight.svg';
import money from '../../assets/svg/hero/money.svg';
import { Link } from 'react-router-dom';

const data = [
	{
		text: 'Go to our website “lalala.com” and click on the “Raise pickup” button and you will be forwarded to raise pickup page where you will need to raise a pickup.',
		img: calender,
		header: 'SCHEDULE',
	},
	{
		text: 'Please keep the trash/scrap ready prior to our arrival on the scheduled date and time thereby not wasting valuable time of our customers.',
		img: like,
		header: 'BE READY',
	},
	{
		text: 'Our team will be available at your door step on the scheduled date or time for the trash or scrap pickup. ',
		img: truck,
		header: 'PICK UP',
	},
	{
		text: 'Our team will further segragate your trash/scrap and weigh it infront of you as per our given scrap rate chart and calculate the amount.',
		img: weight,
		header: 'WEIGHING',
	},
	{
		text: 'After completing the weighing process and the amount is fixed, the team will pick the scrap and settle the payment by cash or online transaction then and there.',
		img: money,
		header: 'EARN MONEY',
	},
];
export function Hero1() {
	return (
		<section className='w-full flex flex-col items-center p-4'>
			<div className='m-auto flex py-4  justify-center gap-4 px-3  items-center'>
				<div className='font-Poiret text-black font-normal lg:text-[4rem] md:text-[2.6rem] text-[1.7rem] leading-normal  '>
					Let us{' '}
					<span className='text-color-primary '>
						manage
					</span>{' '}
					<br />
					the{' '}
					<span className='text-color-primary'>
						waste
					</span>{' '}
					at
					<br />
					your place.
				</div>
				<div className='float w-28 md:w-40 lg:w-60'>
					<img src={dustbin} alt='dustbin' />
				</div>
			</div>
			<div>
				<Link
					to='/sellscrap'
					className='border-2 border-color-primary  p-2 text-color-primary rounded-full font-bold text-[.8rem] shadow-xl press'>
					SELL SCRAP
				</Link>
			</div>
		</section>
	);
}

export function Hero2() {
	return (
		<section className='w-full flex flex-col  items-center text-black gap-24 z-10 py-5  font-Jetbrains'>
			<h1 className='  text-[1.5rem]  lg:text-[2rem]'>
				OUR WORK PROCESS
			</h1>
			<div className='flex lg:w-11/12 w-full   justify-center  2xl:gap-14 xl:gap-10 gap-16 flex-wrap '>
				{data.map((e) => (
					<HeroCard
						text={e.text}
						img={e.img}
						header={e.header}
					/>
				))}
			</div>
		</section>
	);
}

function HeroCard({
	text,
	img,
	header,
}: {
	text: string;
	img: string;
	header: string;
}) {
	return (
		<div className='border-2 border-black rounded relative lg:w-3/12 sm:w-5/12 md:w-4/12 w-11/12 xl:w-2/12	text-Jetbrains  min-h-[20rem]	flex flex-col'>
			<div className='absolute left-2/4  heroAbs'>
				<img src={img} alt='' />
			</div>
			<h1 className='text-center mt-12 font-bold '>
				{header}
			</h1>
			<div className=' text-justify p-5 lg:p-7  md:p-5  '>
				{text}
			</div>
		</div>
	);
}
