import './main.css';
import type { FC, PropsWithChildren } from 'react';

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html
			lang="de"
			className="bg-slate-900 w-screen h-screen text-slate-100 text-bold text-lg dark"
		>
			<body className="bg-slate-900 w-screen h-screen text-slate-100 text-bold text-lg">
				{children}
			</body>
		</html>
	);
};
