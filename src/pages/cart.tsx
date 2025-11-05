'use client';
import { ScrollArea } from '@/components/scroll-area';
import { TodoItem } from '@/components/todo-item';
import { InputHTMLAttributes, useState } from 'react';

export type TodoItemProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Cart = () => {
	const handleKeyDown = (e: any) => {
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
	// const [input, setInput] = useState('');
	//
	// const handleChange = (value: string, key?: string) => {
	// 	console.log(value + 'key:' + key);
	// 	setInput(value);
	// };
  
  const handleDelete = (id: string | undefined) => {
    console.debug(`id of the todo item that will be deleted: ${id}`)
    setTodos(todos => todos.filter((item) => item.id !== id))
    
    if(todos.length === 1) { // 1 instead of 0 because useState is asynchronous and updates the array at a later time
      console.log("wah :)")
      const newTodo: TodoItemProps = {
				id: `input-${Date.now()}-${crypto.randomUUID()}`,
			};
    setTodos([newTodo])
    }
  }

	return (
		<div className="flex justify-center items-center flex-col space-y-2 h-screen">
      <ScrollArea className="h-2/3 rounded-md" >
        <ul className="mt-4 space-y-2 p-8 pb-4 pt-1">
				{todos.map((todo) => (
					<TodoItem key={todo.id} onKeyDown={handleKeyDown} onDelete={() => handleDelete(todo.id)} />
				))}
			</ul>
      </ScrollArea>
		</div>
	);
};
