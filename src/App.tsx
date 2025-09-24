import { Home } from '@/src/pages/home';
import './main.css';
import { Cart } from '@/src/pages/cart';
import { NotFound } from '@/src/pages/not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '@/components/header';

const App = () => {
	return (
		<BrowserRouter>
			<Header title="WG-Helper ^^" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
