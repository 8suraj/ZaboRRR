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
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='sellscrap' element={<SellScrap />} />
					<Route path='ratechart' element={<RateChart />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
