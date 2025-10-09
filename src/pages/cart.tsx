'use client';
import { TodoItem } from '@/components/todo-item';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

// usestate type todos: <InputHTMLAttributes<HTMLInputElement>[]>

export type TodoItemProps = InputHTMLAttributes<HTMLInputElement> & {
	key?: string;
};

export const Cart = () => {
	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			const newTodo: TodoItemProps = {};
			console.log('boo');
			console.log(JSON.stringify([...todos, newTodo]));
			setTodos([...todos, newTodo]);
		}
	};

	const [todos, setTodos] = useState<TodoItemProps[]>([{}]);
	const [input, setInput] = useState('');

	const handleChange = (value: string, key?: string) => {
		console.log(value + 'key:' + key);
		setInput(value);
	};

	return (
		<div className="flex justify-center items-center flex-col space-y-2 h-screen">
			{/* <TodoItem defaultValue={'helloo'} /> */}
			<ul className="mt-4 space-y-2">
				{todos.map((todo) => (
					<TodoItem key={todo.id} onKeyDown={handleKeyDown} />
					//				<li
					//					key={Date.now().toString() + Math.random()}
					//					className="p-2 border rounded"
					//				>
					//					<input
					//						className="text-slate-900"
					//						value={input}
					//						onChange={(e) => handleChange(e.target.value, e.target.accessKey)}
					//						onKeyDown={handleKeyDown}
					//					/>
					//				</li>
				))}
			</ul>
			{/* <TodoItem */}
			{/* 	text={'foo'} */}
			{/* 	onChange={(e: ChangeEvent<HTMLInputElement>) => */}
			{/* 		setInputValue(e.target.value) */}
			{/* 	} */}
			{/* /> */}
		</div>
	);
};
// };
