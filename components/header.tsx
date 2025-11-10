import type { FC } from 'react';
// import wgLogo from './../public/wg-helper-icon.png';
import { Link } from 'react-router-dom';
import { PiggyBank } from 'lucide-react';

type HeaderProps = {
	title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<>
			<Link
				to="/"
				className="flex flex-row space-x-3 w-screen h-16 p-4 fixed top-0 hover:text-gray-500 cursor-pointer"
			>
				{/* <img src={wgLogo} alt="WG-Logo" width="32" height="32" /> */}
				<PiggyBank className="self-center" />
				<h1 className="text-xl font-bold self-center">{title}</h1>
			</Link>
		</>
	);
};
