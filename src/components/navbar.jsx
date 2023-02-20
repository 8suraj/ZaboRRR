import { Link, Outlet } from "react-router-dom";
import logo from '../resource/logo.svg'
import user from '../resource/userlog.svg'

const Navbar = ()=>{
	// const { currentUser, setCurrentUser } = useContext(UserContext);
    return (
		<>
			<div className='nav'>
				<nav className='nav__bar'>
					<div className='nav__bar--logo-box' ><Link to='/'><img src={logo} alt="" /></Link></div>

					<div className="nav__bar--links-box">
						<div className='nav__bar--links-box-items' ><Link to='/'>Home</Link></div>
						<div className='nav__bar--links-box-items'><Link to='/ratechart'>Rate Chart</Link></div>
						<div className='nav__bar--links-box-items'><Link to='/aboutus'>About Us</Link></div>
						{/* <div className='nav__bar--items'><Link to='/createAccount'>Create Account</Link></div> */}
						<Link to='/sellscrape'><div className='nav__bar--links-box-items btn'>Sell Scrap</div></Link>
						<div className='nav__bar--links-box-items'>
							{!localStorage.getItem('user')?<Link to='/log'>
								<div className="user">

								<img src={user} alt="" />
								{/* {true&&<p>user</p>} */}
								</div>
							</Link>:<Link to='/profile'>
								<div className="user">

								<img src={user} alt="" />
								{/* {true&&<p>user</p>} */}
								</div>
							</Link>}
							{/* localStorage.getItem('user')&&<Link to='/profile'>
								<div className="user">

								<img src={user} alt="" />
								</div>
							</Link> */}
						</div>
						{/* <Link to='/sellscrape'><div className='nav__bar--items'>Sell Scrap</div></Link> */}

						{/* <div className='nav__bar--items'><Link to='/createAccount'>Create Account</Link></div> */}
					</div>
					
				</nav>
			</div>
			<Outlet/>
		</>
			
		);
}
export default Navbar;