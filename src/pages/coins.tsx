import { Cointurn, Coinflip } from '@/components/coinflip';

export const Coins = () => {
	return (
		<div className="flex justify-center align-center flex-col items-center h-screen space-y-6">
			<Cointurn heads="Dino" tails="Cedric" />
			<Coinflip heads="Dino" tails="Cedric" />
		</div>
	);
};
