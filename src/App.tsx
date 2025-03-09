import { Home } from '@/src/Home';
import './main.css';
import { Cart } from '@/src/pages/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<div>No Page</div>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
