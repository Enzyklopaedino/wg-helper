import { Input } from '@/components/light/input';
import { TodoInput } from '@/components/light/todo-input';
import { TodoItem } from '@/components/light/todo-item';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';

export const Todo = () => {
	return (
		<div className="w-screen h-screen bg-white text-black flex items-center justify-center">
			<div className="w-1/5 flex flex-col space-y-3">
				<h1 className="text-2xl font-bold">Your To Do</h1>
				<div className="space-y-2">
					{/* <div className="flex flex-row space-x-4 mb-4 mt-2"> */}
					{/* 	<div className="flex-grow flex flex-col"> */}
					{/* 		<Input */}
					{/* 			placeholder="Add new task" */}
					{/* 			className="flex flex-grow border-0" */}
					{/* 		/> */}
					{/* 		<Separator /> */}
					{/* 	</div> */}
					{/* 	<Button className="p-0 m-0 h-8 w-8 min-h-8 min-w-8"> */}
					{/* 		<Plus /> */}
					{/* 	</Button> */}
					{/* </div> */}
					<TodoInput />
					<TodoItem onDelete={() => {}} />
				</div>
			</div>
		</div>
	);
};
