import { Checkbox } from '@/components/checkbox';
import { useState } from 'react';

export const TodoItem = () => {
	// const [firstName, setFirstName] = useState('');
	console.log('helo');

	return (
		<div className="space-x-2">
			{/* <Checkbox className="peer" /> */}
			{/* <input className="transition-all peer-data-[state=checked]:line-through peer-data-[state=checked]:text-muted-foreground" /> */}
			<input type="text" name="todo-input" placeholder="Typing... " />
		</div>
	);
};
