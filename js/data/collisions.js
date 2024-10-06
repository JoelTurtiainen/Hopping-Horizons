// 1: Full Block
// 2:
// 3: Trap
// 4: Half Block

const mapData = {
	0: {
		playerInitPosition: { x: 100, y: 320 },
		backgroundImgSrc: './img/backgroundLevel0.png',
		doors: [{ position: { x: 462, y: 336 } }],
		collisions: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		],
		entities: [],
	},
	1: {
		playerInitPosition: { x: 300, y: 100 },
		backgroundImgSrc: './img/backgroundLevel1.png',
		doors: [{ position: { x: 850, y: 336 } }],
		collisions: [
			0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1,
			1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0,
		],
		entities: [
			{
				template: 'coin_small_gold.tx',
				x: 160,
				y: 352,
			},
			{
				template: 'coin_small_gold.tx',
				x: 352,
				y: 448,
			},
			{
				template: 'coin_small_gold.tx',
				x: 448,
				y: 448,
			},
			{
				template: 'coin_small_gold.tx',
				x: 512,
				y: 512,
			},
			{
				template: 'coin_small_gold.tx',
				x: 736,
				y: 416,
			},
			{
				template: 'coin_small_gold.tx',
				x: 784,
				y: 448,
			},
			{
				template: 'crate.tx',
				x: 608,
				y: 512,
			},
			{
				template: 'coin_small_gold.tx',
				x: 64,
				y: 240,
			},
			{
				template: 'coin_small_gold.tx',
				x: 608,
				y: 480,
			},
			{
				template: 'coin_small_gold.tx',
				x: 640,
				y: 448,
			},
			{
				template: 'coin_small_gold.tx',
				x: 672,
				y: 416,
			},
			{
				template: 'coin_small_gold.tx',
				x: 704,
				y: 400,
			},
			{
				template: 'coin_small_gold.tx',
				x: 64,
				y: 272,
			},
			{
				template: 'coin_small_gold.tx',
				x: 64,
				y: 304,
			},
			{
				template: 'coin_small_gold.tx',
				x: 112,
				y: 336,
			},
		],
	},
	2: {
		playerInitPosition: { x: 50, y: 100 },
		backgroundImgSrc: './img/backgroundLevel2.png',
		doors: [{ position: { x: 855, y: 336 } }],
		collisions: [
			0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1,
			4, 4, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 4, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1,
			1, 3, 3, 3, 3, 1, 1, 3, 1, 1, 3, 1, 0, 0,
		],
		entities: [
			{
				template: 'coin_small_gold.tx',
				x: 272,
				y: 256,
			},
			{
				template: 'coin_small_gold.tx',
				x: 464,
				y: 192,
			},
			{
				template: 'coin_small_gold.tx',
				x: 368,
				y: 208,
			},
			{
				template: 'coin_small_gold.tx',
				x: 656,
				y: 256,
			},
			{
				template: 'coin_small_gold.tx',
				x: 880,
				y: 224,
			},
			{
				template: 'coin_small_gold.tx',
				x: 880,
				y: 256,
			},
			{
				template: 'coin_small_gold.tx',
				x: 880,
				y: 176,
			},
			{
				template: 'coin_small_gold.tx',
				x: 80,
				y: 512,
			},
			{
				template: 'coin_small_gold.tx',
				x: 112,
				y: 512,
			},
			{
				template: 'coin_small_gold.tx',
				x: 144,
				y: 512,
			},
			{
				template: 'coin_small_gold.tx',
				x: 96,
				y: 480,
			},
			{
				template: 'coin_small_gold.tx',
				x: 128,
				y: 480,
			},
			{
				template: 'coin_small_gold.tx',
				x: 112,
				y: 448,
			},
			{
				template: 'coin_small_gold.tx',
				x: 336,
				y: 448,
			},
			{
				template: 'coin_small_gold.tx',
				x: 336,
				y: 400,
			},
			{
				template: 'coin_small_gold.tx',
				x: 592,
				y: 464,
			},
		],
	},
	3: {
		playerInitPosition: { x: 100, y: 350 },
		backgroundImgSrc: './img/backgroundLevel3.png',
		doors: [{ position: { x: 670, y: 80 } }],
		collisions: [
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1,
			0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 4, 4, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 1, 3, 3, 1, 1, 3, 1, 0, 0, 0,
		],
		entities: [
			{
				template: 'coin_small_gold.tx',
				x: 355,
				y: 250,
			},
			{
				template: 'coin_small_gold.tx',
				x: 395,
				y: 250,
			},
			{
				template: 'coin_small_gold.tx',
				x: 610,
				y: 380,
			},
			{
				template: 'coin_small_gold.tx',
				x: 650,
				y: 380,
			},
			{
				template: 'coin_small_gold.tx',
				x: 400,
				y: 505,
			},
		],
	},
	4: {
		playerInitPosition: { x: 350, y: 64 },
		backgroundImgSrc: './img/backgroundLevel4.png',
		doors: [{ position: { x: 32, y: 400 } }],
		collisions: [
			1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 3, 1, 3, 3, 1, 3, 1, 0, 0, 0, 0, 1, 1,
			1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0,
		],
		entities: [
			{
				template: 'coin_small_gold.tx',
				x: 525,
				y: 315,
			},
			{
				template: 'coin_small_gold.tx',
				x: 912,
				y: 255,
			},
		],
	},
	5: {
		playerInitPosition: { x: 100, y: 500 },
		backgroundImgSrc: './img/backgroundLevel5.png',
		doors: [{ position: { x: 860, y: 400 } }],
		collisions: [
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1,
			0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,
			1, 1, 1, 1, 3, 3, 1, 1, 3, 1, 3, 1, 1, 1,
		],
		entities: [
			{
				template: 'coin_small_gold.tx',
				x: 525,
				y: 380,
			},
			{
				template: 'coin_small_gold.tx',
				x: 840,
				y: 190,
			},
			{
				template: 'coin_small_gold.tx',
				x: 130,
				y: 250,
			},
			{
				template: 'coin_small_gold.tx',
				x: 160,
				y: 250,
			},
			{
				template: 'coin_small_gold.tx',
				x: 190,
				y: 250,
			},
			{
				template: 'coin_small_gold.tx',
				x: 220,
				y: 250,
			},
			{
				template: 'coin_small_gold.tx',
				x: 250,
				y: 250,
			},
			{
				template: 'coin_small_gold.tx',
				x: 280,
				y: 250,
			},
		],
	},
	6: {
		playerInitPosition: { x: 87, y: 481 },
		backgroundImgSrc: './img/backgroundLevel6.png',
		doors: [{ position: { x: 817, y: 399 } }],
		collisions: [
			1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1,
			1, 1, 0, 1, 3, 3, 3, 1, 0, 1, 1, 1, 1, 1,
		],
		entities: [
			{
				template: 'crate.tx',
				x: 64,
				y: 512,
			},
			{
				template: 'crate.tx',
				x: 96,
				y: 512,
			},
			{
				template: 'crate.tx',
				x: 80,
				y: 480,
			},
			{
				template: 'coin_small_gold.tx',
				x: 80,
				y: 448,
			},
			{
				template: 'coin_small_gold.tx',
				x: 336,
				y: 384,
			},
			{
				template: 'coin_small_gold.tx',
				x: 352,
				y: 352,
			},
			{
				template: 'coin_small_gold.tx',
				x: 384,
				y: 320,
			},
			{
				template: 'coin_small_gold.tx',
				x: 416,
				y: 288,
			},
			{
				template: 'coin_small_gold.tx',
				x: 512,
				y: 288,
			},
			{
				template: 'coin_small_gold.tx',
				x: 592,
				y: 384,
			},
			{
				template: 'coin_small_gold.tx',
				x: 576,
				y: 352,
			},
			{
				template: 'coin_small_gold.tx',
				x: 544,
				y: 320,
			},
			{
				template: 'coin_small_gold.tx',
				x: 912,
				y: 320,
			},
			{
				template: 'coin_small_gold.tx',
				x: 464,
				y: 272,
			},
		],
	},
	7: {
		playerInitPosition: { x: 148, y: 165 },
		backgroundImgSrc: './img/backgroundLevel7.png',
		doors: [{ position: { x: 614, y: 144 } }],
		collisions: [
			0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
			1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
		],
		entities: [
			{
				template: 'crate.tx',

				x: 928,
				y: 384,
			},
			{
				template: 'crate.tx',
				x: 928,
				y: 352,
			},
			{
				template: 'crate.tx',
				x: 864,
				y: 448,
			},
			{
				template: 'crate.tx',
				x: 672,
				y: 512,
			},
			{
				template: 'coin_small_gold.tx',
				x: 304,
				y: 224,
			},
			{
				template: 'coin_small_gold.tx',
				x: 304,
				y: 224,
			},
			{
				template: 'coin_small_gold.tx',
				x: 304,
				y: 256,
			},
			{
				template: 'coin_small_gold.tx',
				x: 304,
				y: 288,
			},
			{
				template: 'coin_small_gold.tx',
				x: 304,
				y: 320,
			},
			{
				template: 'coin_small_gold.tx',
				x: 304,
				y: 352,
			},
			{
				template: 'coin_small_gold.tx',
				x: 304,
				y: 384,
			},
			{
				template: 'coin_small_gold.tx',
				x: 128,
				y: 512,
			},
			{
				template: 'coin_small_gold.tx',
				x: 560,
				y: 480,
			},
			{
				template: 'coin_small_gold.tx',
				x: 928,
				y: 320,
			},
			{
				template: 'coin_small_gold.tx',
				x: 848,
				y: 256,
			},
			{
				template: 'coin_small_gold.tx',
				x: 752,
				y: 240,
			},
			{
				template: 'coin_small_gold.tx',
				x: 832,
				y: 448,
			},
		],
	},
	8: {
		playerInitPosition: { x: 850, y: 336 },
		backgroundImgSrc: './img/backgroundLevel8.png',
		doors: [{ position: { x: 859, y: 144 } }],
		collisions: [
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		],
		entities: [
			{
				template: 'crate.tx',
				x: 80,
				y: 320,
			},
			{
				template: 'crate.tx',
				x: 64,
				y: 288,
			},
			{
				template: 'coin_small_gold.tx',
				x: 720,
				y: 432,
			},
			{
				template: 'coin_small_gold.tx',
				x: 592,
				y: 368,
			},
			{
				template: 'coin_small_gold.tx',
				x: 464,
				y: 368,
			},
			{
				template: 'coin_small_gold.tx',
				x: 336,
				y: 432,
			},
			{
				template: 'coin_small_gold.tx',
				x: 208,
				y: 176,
			},
			{
				template: 'coin_small_gold.tx',
				x: 336,
				y: 128,
			},
			{
				template: 'coin_small_gold.tx',
				x: 464,
				y: 176,
			},
			{
				template: 'coin_small_gold.tx',
				x: 592,
				y: 128,
			},
			{
				template: 'coin_small_gold.tx',
				x: 720,
				y: 176,
			},
		],
	},
	9: {
		playerInitPosition: { x: 100, y: 380 },
		backgroundImgSrc: './img/backgroundLevel9.png',
		doors: [{ position: { x: 462, y: 400 } }],
		collisions: [
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		],
		entities: [],
	},
};
