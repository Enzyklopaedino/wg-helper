'use client';
import { TodoItem } from '@/components/todo-item';
import { InputHTMLAttributes, useState } from 'react';

export type TodoItemProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Cart = () => {
	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			const newTodo: TodoItemProps = {
				id: `input-${Date.now()}-${crypto.randomUUID()}`,
			};
			console.log('boo');
			console.log(JSON.stringify([...todos, newTodo]));
			setTodos([...todos, newTodo]);
		}
	};

	const [todos, setTodos] = useState<TodoItemProps[]>([
		{ id: `input-${Date.now()}-${crypto.randomUUID()}` },
	]);
	const [input, setInput] = useState('');

	const handleChange = (value: string, key?: string) => {
		console.log(value + 'key:' + key);
		setInput(value);
	};

	return (
		<div className="flex justify-center items-center flex-col space-y-2 h-screen">
			<ul className="mt-4 space-y-2">
				{todos.map((todo) => (
					<TodoItem key={todo.id} onKeyDown={handleKeyDown} />
				))}
			</ul>
		</div>
	);
};
