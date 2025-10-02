import { Checkbox } from '@/components/checkbox';

export const TodoItem = () => {
	return (
		<div className="space-x-2">
			<Checkbox className="peer" />
			<span className="transition-all peer-data-[state=checked]:line-through peer-data-[state=checked]:text-muted-foreground">
				hello
			</span>
		</div>
	);
};
