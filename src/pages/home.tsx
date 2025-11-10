import { NavButton } from '@/components/nav-button';
import { Button } from '@/components/ui/button';
import { List } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className="flex justify-center align-center flex-row items-center h-screen space-x-6">
			<Link to="/todo">
				<Button>
					<List />
				</Button>
			</Link>
		</div>
	);
};
