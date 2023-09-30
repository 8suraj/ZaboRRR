import { BsFacebook, BsGooglePlay } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../assets/logo/logo.svg';
import { Link, NavLink } from 'react-router-dom';
export default function Footer() {
	return (
		<footer className='border-t border-primary-light'>
			<div className='flex  justify-around gap-10 p-8 flex-col lg:flex-row  items-center lg:items-start'>
				<div className=' flex flex-col items-center '>
					<Link className='' to='/'>
						<img src={logo} alt='' />
					</Link>
					<div className='flex h-10  gap-4 justify-center items-center p-3'>
						<BsFacebook size={30} color={'#51AF5B'} />
						<AiFillInstagram size={30} color={'#51AF5B'} />
						<BsGooglePlay size={30} color={'#51AF5B'} />
						<FaXTwitter size={30} color={'#51AF5B'} />
					</div>
					<div></div>
				</div>
				<div className=' hidden lg:block'>
					<h1 className='text-black font-bold'>
						Locations
					</h1>
					<ul className='list-none flex flex-col gap-2'>
						<li>Assam</li>
						<li>West Bengal</li>
						<li>Maharastra</li>
						<li>Telengana</li>
						<li>Rajasthan</li>
						<li>Delhi</li>
					</ul>
				</div>
				<div className='hidden lg:block'>
					<h1 className='text-black font-bold'>Links</h1>
					<ul className='list-none flex flex-col gap-2'>
						<NavLink
							to='/'
							className={({ isActive }) =>
								`${
									isActive
										? 'text-color-primary'
										: 'hover:text-color-primary'
								}`
							}>
							Home
						</NavLink>
						<NavLink
							to='/ratechart'
							className={({ isActive }) =>
								`${
									isActive
										? 'text-color-primary'
										: 'hover:text-color-primary'
								}`
							}>
							Rate Chart
						</NavLink>
						<NavLink
							to='/refundpolicy'
							className={({ isActive }) =>
								`${
									isActive
										? 'text-color-primary'
										: 'hover:text-color-primary'
								}`
							}>
							Refund Policy
						</NavLink>
						<NavLink
							to='/about'
							className={({ isActive }) =>
								`${
									isActive
										? 'text-color-primary'
										: 'hover:text-color-primary'
								}`
							}>
							About Us
						</NavLink>
						<NavLink
							to='/contact'
							className={({ isActive }) =>
								`${
									isActive
										? 'text-color-primary'
										: 'hover:text-color-primary'
								}`
							}>
							Contact
						</NavLink>
						<NavLink
							to='/privacypolicy'
							className={({ isActive }) =>
								`${
									isActive
										? 'text-color-primary'
										: 'hover:text-color-primary'
								}`
							}>
							Privacy Policy
						</NavLink>
						<NavLink
							to='/sellscrap'
							className={({ isActive }) =>
								`${
									isActive
										? 'text-color-primary'
										: 'hover:text-color-primary'
								}`
							}>
							Sell Scrap
						</NavLink>
						<NavLink
							to='/tnc'
							className={({ isActive }) =>
								`${
									isActive
										? 'text-color-primary'
										: 'hover:text-color-primary'
								}`
							}>
							Terms & Conditions
						</NavLink>
					</ul>
				</div>
				<div className='flex flex-col items-center gap-4 '>
					<textarea
						className='lg:w-[27rem] w-[80vw]  h-[20vh] p-2 bg-transparent border-2 rounded-lg lg:h-[10rem] border-color-primary text-color-primary outline-none lg:p-3 placeholder:text-color-primary resize-none'
						placeholder='Write your queries....'
					/>
					<div>
						<button
							type='submit'
							className=' bg-color-primary rounded-lg text-white p-3 text-lg'>
							Submit
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
