'use client';
import { TodoList, type TodoListProps } from '@/components/todo-list';
import { useState } from 'react';

export const Cart = () => {
	const [todoLists, setTodoLists] = useState<TodoListProps[]>([
		{
			key: `todoList-${Date.now()}-${crypto.randomUUID()}`,
			title: 'boo',
			height: 'h-[60%]',
		},
	]);
	const handleNewTodoClick = () => {
		console.log(`length ${todoLists.length}`);
		if (todoLists.length === 1) {
			setTodoLists([
				...todoLists,
				{
					key: `todoList-${Date.now()}-${crypto.randomUUID()}`,
					title: 'untitled',
					height: 'h-[30%]',
				},
			]);
		}
	};

	return (
		<div className="flex justify-center items-center flex-col space-y-8 h-screen w-screen">
			<button type="button" onClick={handleNewTodoClick}>
				add new Todo
			</button>
			<ul className="h-2/3">
				{todoLists.map((todo) => (
					<TodoList key={todo.key} title={todo.title} height={todo.height} />
				))}
			</ul>
		</div>
	);
};
