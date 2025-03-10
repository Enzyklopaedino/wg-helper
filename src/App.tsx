import { Home } from '@/src/pages/Home';
import './main.css';
import { Cart } from '@/src/pages/cart';
import { NotFound } from '@/src/pages/not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
