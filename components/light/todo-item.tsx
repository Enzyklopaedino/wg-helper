import { Input } from '@/components/input';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';
import { type FC, type InputHTMLAttributes, useState } from 'react';

type TodoItemProps = InputHTMLAttributes<HTMLInputElement> & {
	onDelete: () => void;
};

export const TodoItem: FC<TodoItemProps> = ({ value, onKeyDown }) => {
	const [checked, setChecked] = useState(false);

	return (
		// <div className="flex flex-row items-center space-x-4">
		// 	{/* <Checkbox */}
		// 	{/* 	className="peer" */}
		// 	{/* 	onCheckedChange={(value: boolean) => setChecked(value)} */}
		// 	{/* /> */}
		// 	<Input
		// 		className="transition-all peer-data-[state=checked]:line-through peer-data-[state=checked]:text-muted-foreground"
		// 		value={value}
		// 		onKeyDown={onKeyDown}
		// 		autoFocus
		// 		disabled={checked}
		// 	/>
		// </div>
		<div className="flex flex-row items-center justify-between border-2 rounded-md px-2 py-1 space-x-3">
			<Checkbox />
			<input className="outline-none" value="boo this a todo" readOnly={true} />
			<X className="h-4 w-4 min-w-4 min-h-4" />
		</div>
	);
};
