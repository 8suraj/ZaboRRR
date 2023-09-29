import { CardRow } from '../../components/Card/Card';
import ds from './1.svg';
export default function RateChart() {
	return (
		<section className='w-full p-6 '>
			<div className='md:w-10/12 w-full m-auto shadow-xl rounded-lg relative border-t border-primary-light b p-2'>
				<div className='absolute text-white bg-color-primary rounded-lg md:p-3 p-2 font-Jetbrains font-bold md:text-[1.5rem] lg:text-[2rem] text-[.7rem] left-2/4 heroAbs'>
					SCRAP PRICE CHART
				</div>
				<CardRow
					header='ONE/TWO WHEELER'
					cards={[
						{
							header: 'MOTOR',
							image: ds,
							content: 'Battery',
						},
					]}
				/>
			</div>
		</section>
	);
}
