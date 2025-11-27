import { Input } from '@/components/light/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';

export const TodoInput = () => {
	return (
		<div className="flex flex-row space-x-4 mb-4 mt-2">
			<div className="flex-grow flex flex-col">
				<Input placeholder="Add new task" className="flex flex-grow border-0" />
				<Separator />
			</div>
			<Button className="p-0 m-0 h-8 w-8 min-h-8 min-w-8">
				<Plus />
			</Button>
		</div>
	);
};
