import { Input } from '@/components/light/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Plus, X } from 'lucide-react';

export const Todo = () => {
	return (
		<div className="w-screen h-screen bg-white text-black flex items-center justify-center">
			<div className="w-1/5 flex flex-col space-y-3">
				<h1 className="text-2xl font-bold">Your To Do</h1>
				<div className="space-y-2">
					<div className="flex flex-row space-x-4 mb-4 mt-2">
						<div className="flex-grow flex flex-col">
							<Input
								placeholder="Add new task"
								className="flex flex-grow border-0"
							/>
							<Separator />
						</div>
						<Button className="p-0 m-0 h-8 w-8 min-h-8 min-w-8">
							<Plus />
						</Button>
					</div>
					<div className="flex flex-row items-center justify-between border-2 rounded-md px-2 py-1 space-x-3">
						<Checkbox />
						<input className="outline-none" />
						<X className="h-4 w-4 min-w-4 min-h-4" />
					</div>
				</div>
			</div>
		</div>
	);
};
