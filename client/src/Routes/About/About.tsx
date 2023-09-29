import group1 from '../../assets/svg/hero/group1.svg';
import group2 from '../../assets/svg/hero/group2.svg';
import { Footer } from '../../components';
export default function About() {
	return (
		<>
			<div className='w-full flex flex-col gap-8 py-24'>
				<div className='lg:w-10/12 m-auto flex lg:flex-row flex-col w-11/12 xl:8/12'>
					<div className='flex-1  z-0'>
						<img src={group1} alt='' />
					</div>
					<div className='bg-color-primary text-white text-justify rounded-lg p-4 flex-1 flex flex-col items-center justify-center gap-10 xl:-ml-32 lg:-ml-16'>
						<h1 className='font-bold text-[1.5rem]'>
							WHO WE ARE ?
						</h1>
						<p className='p-4'>
							ZaboRRR is a Waste Manangement Technology to
							make trash collection more efficient, cost
							effective and environmentally friendly. Our
							aim is to assist in minimizing the trash
							amount that ends up in waterways and landfills
							every year concerning the people of Assam and
							the environment as a whole for further
							separation, recycling, transformation and
							more.
						</p>
					</div>
				</div>
				<div className='lg:w-10/12 m-auto flex lg:flex-row flex-col w-11/12 xl:8/12'>
					<div className='bg-color-primary text-white text-justify rounded-lg p-4 flex-1 flex flex-col items-center justify-center gap-10 order-2 lg:order-1	'>
						<h1 className='font-bold text-[1.5rem]'>
							WHO WE ARE ?
						</h1>
						<p className='p-4'>
							ZaboRRR is a Waste Manangement Technology to
							make trash collection more efficient, cost
							effective and environmentally friendly. Our
							aim is to assist in minimizing the trash
							amount that ends up in waterways and landfills
							every year concerning the people of Assam and
							the environment as a whole for further
							separation, recycling, transformation and
							more.
						</p>
					</div>
					<div className='flex-1  z-0 xl:-ml-28 lg:-ml-16  order-1	lg:order-2'>
						<img src={group2} alt='' />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
