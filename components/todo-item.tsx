import { Checkbox } from '@/components/checkbox';
import { DeleteButton } from '@/components/delete-button';
import { Input } from '@/components/input';
import { type FC, type InputHTMLAttributes, useState } from 'react';

type TodoItemProps = InputHTMLAttributes<HTMLInputElement> & {
	onDelete: () => void;
};

export const TodoItem: FC<TodoItemProps> = ({ value, onKeyDown, onDelete }) => {
	const [checked, setChecked] = useState(false);

	return (
		<div className="flex flex-row items-center space-x-4">
			<Checkbox
				className="peer"
				onCheckedChange={(value: boolean) => setChecked(value)}
			/>
			<Input
				className="transition-all peer-data-[state=checked]:line-through peer-data-[state=checked]:text-muted-foreground"
				value={value}
				onKeyDown={onKeyDown}
				autoFocus
				disabled={checked}
			/>
			<DeleteButton onClick={onDelete} />
		</div>
	);
};
