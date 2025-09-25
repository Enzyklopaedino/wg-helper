import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className="flex justify-center items-center h-screen space-x-6">
			<Link to="/cart">
				<button
					type="button"
					className="text-bold bg-sky-300 hover:bg-sky-400 focus:ring-4 focus:ring-sky-500 font-medium rounded-lg p-4 focus:outline-none flex items-center justify-center cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						className="size-6 stroke-sky-800"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
						/>
					</svg>
				</button>
			</Link>
		</div>
	);
};
