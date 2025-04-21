import { Checkbox } from '@/src/views/checkbox';
import type { FC, PropsWithChildren } from 'react';

export const Todo: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex flex-row gap-2">
			<Checkbox />
			{children}
		</div>
	);
};
