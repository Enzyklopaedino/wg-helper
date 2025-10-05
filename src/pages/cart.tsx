'use client';
import { TodoItem } from '@/components/todo-item';

export const Cart = () => {
	console.log('parent');
	return (
		<div className="flex justify-center items-center h-screen">
			{/* <TodoItem /> */}
			<input type="text" placeholder="meep" />
		</div>
	);
};
