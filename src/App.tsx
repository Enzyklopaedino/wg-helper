import './main.css';
import { Button } from '@/components/ui/button';

const App = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold underline text-teal-400">
				Rsbuild with React
			</h1>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Button>click me!</Button>
		</div>
	);
};

export default App;
