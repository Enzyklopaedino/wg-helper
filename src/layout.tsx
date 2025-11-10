import './main.css';
import type { FC, PropsWithChildren } from 'react';

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		// lang="de"
		<div className="w-screen h-screen text-bold text-lg">{children}</div>
	);
};
