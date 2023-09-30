import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import About from './Routes/About/About.jsx';
import Home from './Routes/Home/Home.tsx';
import SellScrap from './Routes/SellScrap/SellScrap.tsx';
import RateChart from './Routes/RateChart/RateChart.tsx';
import TermsnConditions from './Routes/Terms/Terms.tsx';
import Privacypolicy from './Routes/PrivacyPolicy/PrivacyPolicy.tsx';
import Profile from './Routes/Profile/Profile.tsx';
import Login from './Routes/Login/Login.tsx';
import Register from './Routes/Register/Register.tsx';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
					<Route path='about' element={<About />} />
					<Route path='sellscrap' element={<SellScrap />} />
					<Route path='ratechart' element={<RateChart />} />
					<Route
						path='tnc'
						element={<TermsnConditions />}
					/>
					<Route
						path='privacypolicy'
						element={<Privacypolicy />}
					/>
					<Route path='profile' element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
