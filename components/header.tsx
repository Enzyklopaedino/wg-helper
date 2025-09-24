import { FC } from 'react';
import wgLogo from './../public/wg-helper-icon.png';
import { Link } from 'react-router-dom';

type HeaderProps = {
	title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<>
			<Link
				to="/"
				className="flex flex-row space-x-3 w-screen h-16 p-4 fixed top-0 hover:brightness-125"
			>
				<img src={wgLogo} alt="WG-Logo" width="32" height="32" />
				<h1 className="text-2xl font-bold text-green-300">{title}</h1>
			</Link>
		</>
	);
};
