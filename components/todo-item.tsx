import { Checkbox } from '@/components/checkbox';
import { DeleteButton } from '@/components/delete-button';
import { Input } from '@/components/input';
import { FC, InputHTMLAttributes, useState } from 'react';

export const TodoItem: FC<InputHTMLAttributes<HTMLInputElement>> = ({
	value,
	onKeyDown,
}) => {
	const [checked, setChecked] = useState(false);

	return (
		<div
			id={`todo-item-${Date.now()}`}
			className="flex flex-row items-center space-x-4"
		>
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
			<DeleteButton />
		</div>
	);
};
