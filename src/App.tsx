import { Home } from '@/src/pages/home';
import './main.css';
import { Cart } from '@/src/pages/cart';
import { NotFound } from '@/src/pages/not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '@/components/header';
import { Coins } from '@/src/pages/coins';
import { Todo } from '@/src/pages/todo';

const App = () => {
	return (
		<BrowserRouter>
			<Header title="WG-Helper" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/coins" element={<Coins />} />
				<Route path="/todo" element={<Todo />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
