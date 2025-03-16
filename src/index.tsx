import { RootLayout } from '@/src/layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';

const rootEl = document.getElementById('root');
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<RootLayout>
				<App />
			</RootLayout>
		</React.StrictMode>,
	);
}
