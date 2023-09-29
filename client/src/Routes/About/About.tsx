import group1 from '../../assets/svg/hero/group1.svg';
import group2 from '../../assets/svg/hero/group2.svg';

export default function About() {
	return (
		<div className='w-full flex flex-col gap-8 py-24'>
			<div className='w-8/12 m-auto flex '>
				<div className='flex-1  z-0'>
					<img src={group1} alt='' />
				</div>
				<div className='bg-color-primary text-white text-justify rounded-lg p-4 flex-1 flex flex-col items-center justify-center gap-10 -ml-32'>
					<h1 className='font-bold text-[1.5rem]'>
						WHO WE ARE ?
					</h1>
					<p className='p-4'>
						ZaboRRR is a Waste Manangement Technology to
						make trash collection more efficient, cost
						effective and environmentally friendly. Our aim
						is to assist in minimizing the trash amount that
						ends up in waterways and landfills every year
						concerning the people of Assam and the
						environment as a whole for further separation,
						recycling, transformation and more.
					</p>
				</div>
			</div>
			<div className='w-8/12 m-auto flex '>
				<div className='bg-color-primary text-white text-justify rounded-lg p-4 flex-1 flex flex-col items-center justify-center gap-10 '>
					<h1 className='font-bold text-[1.5rem]'>
						WHAT WE DO ?
					</h1>
					<p className='p-4'>
						We provide a service by collecting the
						wastes(Material) to maximise the re-use of
						materials, minimise the amount of waste sent to
						landfill and have a positive effect on the
						environmental performance. Being waste managers,
						we’re passionate recyclers first and foremost.
					</p>
				</div>
				<div className='flex-1  z-0 -ml-28'>
					<img src={group2} alt='' />
				</div>
			</div>
		</div>
	);
}
