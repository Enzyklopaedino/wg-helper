import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

export const NotFound = () => {
	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<div className="flex-start">
				<h1 className="text-6xl font-bold my-4">404</h1>
				<h2 className="text-3xl font-semibold my-2">Page not found</h2>
				<div className="mb-1">
					We can't seem to find the page you're looking for...
				</div>
				<Bot />
				<Button className="my-8">Return home?</Button>
			</div>
		</div>
	);
};
