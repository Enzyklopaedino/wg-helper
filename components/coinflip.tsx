import { type FC, useState } from 'react';

type CoinflipProps = {
	title?: string;
	heads: string;
	tails: string;
};

export const Cointurn: FC<CoinflipProps> = ({ title, heads, tails }) => {
	const [coin, setCoin] = useState<string>(heads);

	const handleClick = () => {
		setCoin(coin === tails ? heads : tails);
	};

	return (
		<button type="button" onClick={handleClick}>
			{`${title ? `${title}: ` : ''} ${coin}`}
		</button>
	);
};

export const Coinflip: FC<CoinflipProps> = ({ title, heads, tails }) => {
	const [coin, setCoin] = useState<string>(heads);

	const handleClick = () => {
		setCoin(randomInt(0, 100) % 2 === 0 ? heads : tails);
	};

	return (
		<button type="button" onClick={handleClick}>
			{`${title ? `${title}: ` : ''} ${coin}`}
		</button>
	);
};

const randomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
