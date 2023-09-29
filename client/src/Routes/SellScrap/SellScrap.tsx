import { Card } from '../../components/Card/Card';
import ds from './1.svg';
export default function SellScrap() {
	return (
		<section className='w-full'>
			<div className='w-10/12 md:w-8/12  m-auto grid sm:grid-cols-3 md:grid-cols-4 gap-4 grid-cols-2 justify-items-center	'>
				<Card image={ds} header='MOTOR' content='Battery' />
				<Card image={ds} header='MOTOR' content='Battery' />
				<Card image={ds} header='MOTOR' content='Battery' />
				<Card image={ds} header='MOTOR' content='Battery' />
				<Card image={ds} header='MOTOR' content='Battery' />
			</div>
		</section>
	);
}
