import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type NavButtonProps = {
	path: string;
	color: 'blue' | 'green' | 'red' | 'orange';
	value?: string | ReactNode;
};

export const NavButton: FC<NavButtonProps> = ({ path, color, value }) => {
	const colorVariants = {
		blue: 'bg-sky-300 hover:bg-sky-400 focus:ring-sky-500 text-sky-900',
		green:
			'bg-green-300 hover:bg-green-400 focus:ring-green-500 text-green-900',
		red: 'bg-red-300 hover:bg-red-400 focus:ring-red-500 text-red-900',
		orange:
			'bg-orange-300 hover:bg-orange-400 focus:ring-orange-500 text-orange-900',
	};

	return (
		<Link to={`/${path}`}>
			<button
				type="button"
				className={`${colorVariants[color]} text-bold focus:ring-4 font-medium rounded-lg p-4 focus:outline-none flex items-center justify-center cursor-pointer`}
			>
				{value}
			</button>
		</Link>
	);
};
