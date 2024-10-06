(function (name, data) {
	if (typeof onTileMapLoaded === 'undefined') {
		if (typeof TileMaps === 'undefined') TileMaps = {};
		TileMaps[name] = data;
	} else {
		onTileMapLoaded(name, data);
	}
	if (typeof module === 'object' && module && module.exports) {
		module.exports = data;
	}
})('map6', {
	'compressionlevel': -1,
	'height': 9,
	'infinite': false,
	'layers': [
		{
			'id': 6,
			'image': '../Resources/Backgrounds/white.png',
			'name': 'Background',
			'opacity': 1,
			'tintcolor': '#785f56',
			'type': 'imagelayer',
			'visible': true,
			'x': 0,
			'y': 0,
		},
		{
			'draworder': 'topdown',
			'id': 4,
			'name': 'Objects',
			'objects': [
				{
					'id': 10,
					'template': 'Door.tx',
					'x': 817,
					'y': 511,
				},
				{
					'id': 11,
					'template': 'crate.tx',
					'x': 64,
					'y': 512,
				},
				{
					'id': 12,
					'template': 'crate.tx',
					'x': 96,
					'y': 512,
				},
				{
					'id': 13,
					'template': 'crate.tx',
					'x': 80,
					'y': 480,
				},
				{
					'id': 14,
					'template': 'coin_small_gold.tx',
					'x': 80,
					'y': 448,
				},
				{
					'id': 15,
					'template': 'coin_small_gold.tx',
					'x': 336,
					'y': 384,
				},
				{
					'id': 16,
					'template': 'coin_small_gold.tx',
					'x': 352,
					'y': 352,
				},
				{
					'id': 17,
					'template': 'coin_small_gold.tx',
					'x': 384,
					'y': 320,
				},
				{
					'id': 18,
					'template': 'coin_small_gold.tx',
					'x': 416,
					'y': 288,
				},
				{
					'id': 19,
					'template': 'coin_small_gold.tx',
					'x': 512,
					'y': 288,
				},
				{
					'id': 20,
					'template': 'coin_small_gold.tx',
					'x': 592,
					'y': 384,
				},
				{
					'id': 21,
					'template': 'coin_small_gold.tx',
					'x': 576,
					'y': 352,
				},
				{
					'id': 22,
					'template': 'coin_small_gold.tx',
					'x': 544,
					'y': 320,
				},
				{
					'id': 23,
					'template': 'coin_small_gold.tx',
					'x': 912,
					'y': 320,
				},
				{
					'id': 24,
					'template': 'coin_small_gold.tx',
					'x': 464,
					'y': 272,
				},
			],
			'opacity': 1,
			'type': 'objectgroup',
			'visible': true,
			'x': 0,
			'y': 0,
		},
		{
			'data': [
				3221225499, 3221225493, 3221225493, 3221225493, 3221225493, 3221225493, 3221225502, 2147483676, 3221225499, 3221225493, 3221225493, 3221225493, 3221225493, 3221225493, 3221225493, 3221225502,
				2684354581, 0, 0, 0, 0, 0, 38, 2147483688, 43, 0, 0, 0, 0, 0, 0, 1610612757, 2684354581, 0, 0, 0, 0, 0, 3221225503, 3221225518, 3221225487, 0, 0, 0, 0, 0, 0, 1610612757, 2684354581, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1610612757, 2684354581, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1610612757, 2684354581, 0, 0, 0, 19, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 1610612757, 2684354581, 0,
				0, 15, 21, 2147483674, 0, 0, 0, 26, 21, 31, 0, 0, 0, 1610612757, 2684354581, 4, 5, 38, 2147483676, 43, 0, 0, 0, 38, 28, 43, 0, 0, 19, 1610612757, 30, 21, 21, 27, 2147483688, 43, 0, 0, 0, 38,
				40, 30, 21, 21, 21, 27,
			],
			'height': 9,
			'id': 1,
			'name': 'Tile Layer 1',
			'opacity': 1,
			'type': 'tilelayer',
			'visible': true,
			'width': 16,
			'x': 0,
			'y': 0,
		},
		{
			'data': [
				0, 74, 74, 74, 74, 74, 0, 0, 0, 74, 74, 74, 74, 74, 74, 0, 74, 0, 0, 0, 0, 0, 74, 0, 74, 0, 0, 0, 0, 0, 0, 74, 74, 0, 0, 0, 0, 0, 74, 74, 74, 0, 0, 0, 0, 0, 0, 74, 74, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 74, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 74, 0, 0, 74, 74, 74, 0, 0, 0, 74, 74, 74, 0, 0, 0, 74, 74, 0, 0, 74,
				0, 74, 0, 0, 0, 74, 0, 74, 0, 0, 0, 74, 0, 74, 74, 0, 0, 74, 76, 76, 76, 74, 0, 0, 74, 74, 74, 0,
			],
			'height': 9,
			'id': 5,
			'name': 'Collision',
			'opacity': 0.4,
			'type': 'tilelayer',
			'visible': true,
			'width': 16,
			'x': 0,
			'y': 0,
		},
	],
	'nextlayerid': 7,
	'nextobjectid': 25,
	'orientation': 'orthogonal',
	'renderorder': 'right-down',
	'tiledversion': '1.11.0',
	'tileheight': 64,
	'tilesets': [
		{
			'firstgid': 1,
			'source': '../Tilesets/tileset_desert.tsx',
		},
		{
			'firstgid': 73,
			'source': '../Tilesets/Door.tsx',
		},
		{
			'firstgid': 74,
			'source': '../Tilesets/collision.tsx',
		},
		{
			'firstgid': 78,
			'source': '../Tilesets/coin_small_gold.tsx',
		},
	],
	'tilewidth': 64,
	'type': 'map',
	'version': '1.10',
	'width': 16,
});
