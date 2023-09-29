import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import About from './Routes/About/About.jsx';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route path='about' element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
