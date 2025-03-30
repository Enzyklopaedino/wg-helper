import './main.css';
import type { FC, PropsWithChildren } from 'react';

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="bg-slate-900 w-screen h-screen text-slate-100 pt-6 px-4">
			{children}
		</div>
	);
};
