'use client';
import { TodoList } from '@/components/todo-list';
import { InputHTMLAttributes } from 'react';

export type TodoItemProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Cart = () => {
	
	return (
    <TodoList title="Boo"/>
			);
};
