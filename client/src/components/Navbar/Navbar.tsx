import { useState } from 'react';
import Logo from '../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';
export default function Navbar() {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<nav className='w-full p-3   bg-color-tertiary fixed lg:static '>
			<div className='w-10/12 flex    m-auto justify-between items-center  '>
				<Link className='cursor-pointer' to='/'>
					<img src={Logo} alt='website Logo' />
				</Link>
				<div className='flex items-center cursor-pointer '>
					<ul className='list-none lg:flex gap-12	hidden items-center '>
						<li className='hover:text-color-primary'>
							Home
						</li>
						<li className='hover:text-color-primary'>
							Rate Chart
						</li>
						<li className='hover:text-color-primary'>
							About Us
						</li>
						<li className='hover:text-color-primary'>
							Contact
						</li>
						<li className='hover:text-color-primary'>
							Sell Scrap
						</li>
						<li className=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-8 h-8 stroke-color-primary'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
								/>
							</svg>
						</li>
					</ul>
					<div
						className='lg:hidden z-20 fixed '
						onClick={() => setMenuActive(!menuActive)}>
						{!menuActive ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 stroke-color-primary'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								fill='none'
								className='w-6 h-6  stroke-color-primary '>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						)}
					</div>
				</div>
			</div>
			{menuActive && (
				<div className='lg:hidden absolute left-0 right-0 top-0 bottom-0 w-[100vw] h-[100vh] flex items-center justify-center bg-color-tertiary z-10  '>
					<ul className='list-none flex flex-col gap-8  w-9/12 items-center cursor-pointer'>
						<li>Home</li>
						<li>Rate Chart</li>
						<li>About Us</li>
						<li>Contact</li>
						<li>Sell Scrap</li>
						<li>Profile</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
