const entityDat = {
	coin_small_gold: {
		imageSrc: './img/entities/coin_small_gold.png',
		frameRate: 6,
		frameBuffer: 10,
		loop: true,
		autoplay: false,
		scale: 2,
	},
	cannon_03: {
		imageSrc: './img/entities/cannon_03.png',
		frameRate: 1,
		frameBuffer: 1,
		loop: false,
		autoplay: false,
		scale: 2,
	},
};
const entitiesLevel1 = [
	{
		id: 28,
		template: 'coin_small_gold.tx',
		x: 160,
		y: 352,
	},
	{
		id: 29,
		template: 'coin_small_gold.tx',
		x: 352,
		y: 448,
	},
	{
		id: 30,
		template: 'coin_small_gold.tx',
		x: 448,
		y: 448,
	},
	{
		id: 31,
		template: 'coin_small_gold.tx',
		x: 512,
		y: 512,
	},
	{
		id: 32,
		template: 'coin_small_gold.tx',
		x: 784,
		y: 448,
	},
	{
		id: 33,
		template: 'coin_small_gold.tx',
		x: 864,
		y: 448,
	},
	{
		id: 36,
		template: 'cannon_03.tx',
		x: 736,
		y: 496,
	},
];
