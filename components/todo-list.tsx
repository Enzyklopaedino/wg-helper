'use client';
import { DeleteButton } from '@/components/delete-button';
import { ScrollArea } from '@/components/scroll-area';
import { TodoItem } from '@/components/todo-item';
import { cn } from '@/lib/utils';
import {
	type FC,
	type InputHTMLAttributes,
	type KeyboardEvent,
	useState,
} from 'react';

export type TodoItemProps = InputHTMLAttributes<HTMLInputElement>;
export type TodoListProps = { key: string; title: string; height: string };

export const TodoList: FC<TodoListProps> = ({ title, height }) => {
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const newTodo: TodoItemProps = {
				id: `input-${Date.now()}-${crypto.randomUUID()}`,
			};
			console.log(JSON.stringify([...todos, newTodo]));
			setTodos([...todos, newTodo]);
		}
	};

	const [todos, setTodos] = useState<TodoItemProps[]>([
		{ id: `input-${Date.now()}-${crypto.randomUUID()}` },
	]);

	const handleDelete = (id: string | undefined) => {
		console.debug(`id of the todo item that will be deleted: ${id}`);
		setTodos((todos) => todos.filter((item) => item.id !== id));

		if (todos.length === 1) {
			// 1 instead of 0 because useState is asynchronous and updates the array at a later time
			console.log('wah :)');
			const newTodo: TodoItemProps = {
				id: `input-${Date.now()}-${crypto.randomUUID()}`,
			};
			setTodos([newTodo]);
		}
	};

	const handleDeleteAll = () => {
		console.debug('all todos will be deleted');
		const newTodo: TodoItemProps = {
			id: `input-${Date.now()}-${crypto.randomUUID()}`,
		};
		setTodos([newTodo]);
	};

	return (
		<div
			className={cn(
				'flex justify-center items-center flex-col space-y-2 h-[70%]',
				height,
			)}
		>
			<h2 className="text-2xl py-2 px-6">{title}</h2>
			<DeleteButton
				className="stroke-red-700 hover:stroke-red-500"
				onClick={handleDeleteAll}
			/>
			<ScrollArea className="h-[90%] rounded-md">
				<ul className="mt-4 px-6 pb-4 space-y-2">
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							onKeyDown={handleKeyDown}
							onDelete={() => handleDelete(todo.id)}
						/>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
};
