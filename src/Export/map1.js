(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map1",
{ "backgroundcolor":"#5e4661",
 "compressionlevel":-1,
 "editorsettings":
    {
     "chunksize":
        {
         "height":64,
         "width":64
        }
    },
 "height":9,
 "infinite":false,
 "layers":[
        {
         "id":7,
         "image":"Rocky Roads\/Backgrounds\/4x\/white.png",
         "name":"BG Color",
         "opacity":1,
         "tintcolor":"#5e4661",
         "type":"imagelayer",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "id":6,
         "image":"Rocky Roads\/Backgrounds\/4x\/mountains_b.png",
         "name":"Mountains",
         "opacity":1,
         "type":"imagelayer",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41, 41, 41, 41, 41, 41,
            0, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41, 41, 41, 41, 41, 41,
            0, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41, 41, 41, 41, 41, 41,
            0, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41, 41, 41, 41, 41, 41,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41],
         "height":9,
         "id":1,
         "name":"Secondary",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[3221225499, 52, 53, 54, 52, 52, 52, 3221225502, 0, 0, 0, 0, 0, 0, 0, 0,
            43, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0,
            43, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0,
            43, 0, 0, 26, 17, 16, 17, 41, 0, 0, 0, 0, 0, 0, 0, 0,
            43, 0, 0, 50, 53, 53, 53, 53, 51, 52, 53, 54, 52, 53, 54, 3221225502,
            43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38,
            43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38,
            43, 73, 73, 26, 17, 18, 0, 0, 0, 0, 0, 0, 15, 16, 17, 27,
            30, 16, 17, 27, 41, 43, 0, 0, 26, 31, 0, 0, 38, 0, 0, 0],
         "height":9,
         "id":2,
         "name":"Primary",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 83, 83, 83, 83, 83, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            83, 0, 0, 0, 0, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0,
            83, 0, 0, 0, 0, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0,
            83, 0, 0, 83, 83, 83, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            83, 0, 0, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 0,
            83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83,
            83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83,
            83, 85, 85, 83, 83, 83, 0, 0, 0, 0, 0, 0, 83, 83, 83, 0,
            0, 83, 83, 0, 0, 83, 0, 0, 83, 83, 0, 0, 83, 0, 0, 0],
         "height":9,
         "id":5,
         "name":"collision",
         "opacity":0.3,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":4,
         "name":"objects",
         "objects":[
                {
                 "id":28,
                 "template":"coin_small_gold.tx",
                 "x":160,
                 "y":352
                }, 
                {
                 "id":29,
                 "template":"coin_small_gold.tx",
                 "x":352,
                 "y":448
                }, 
                {
                 "id":30,
                 "template":"coin_small_gold.tx",
                 "x":448,
                 "y":448
                }, 
                {
                 "id":31,
                 "template":"coin_small_gold.tx",
                 "x":512,
                 "y":512
                }, 
                {
                 "id":32,
                 "template":"coin_small_gold.tx",
                 "x":736,
                 "y":416
                }, 
                {
                 "id":33,
                 "template":"coin_small_gold.tx",
                 "x":784,
                 "y":448
                }, 
                {
                 "id":56,
                 "template":"crate.tx",
                 "x":608,
                 "y":512
                }, 
                {
                 "id":57,
                 "template":"coin_small_gold.tx",
                 "x":64,
                 "y":240
                }, 
                {
                 "id":58,
                 "template":"coin_small_gold.tx",
                 "x":608,
                 "y":480
                }, 
                {
                 "id":59,
                 "template":"coin_small_gold.tx",
                 "x":640,
                 "y":448
                }, 
                {
                 "id":60,
                 "template":"coin_small_gold.tx",
                 "x":672,
                 "y":416
                }, 
                {
                 "id":61,
                 "template":"coin_small_gold.tx",
                 "x":704,
                 "y":400
                }, 
                {
                 "id":62,
                 "template":"coin_small_gold.tx",
                 "x":64,
                 "y":272
                }, 
                {
                 "id":63,
                 "template":"coin_small_gold.tx",
                 "x":64,
                 "y":304
                }, 
                {
                 "id":64,
                 "template":"coin_small_gold.tx",
                 "x":112,
                 "y":336
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":8,
 "nextobjectid":65,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.11.0",
 "tileheight":64,
 "tilesets":[
        {
         "columns":12,
         "firstgid":1,
         "image":"Rocky Roads\/Tilesets\/tileset_dirt.png",
         "imageheight":96,
         "imagewidth":192,
         "margin":0,
         "name":"tileset_dirt",
         "spacing":0,
         "tilecount":72,
         "tileheight":16,
         "tilerendersize":"grid",
         "tilewidth":16
        }, 
        {
         "columns":4,
         "firstgid":73,
         "image":"Rocky Roads\/Enemies\/spikes.png",
         "imageheight":16,
         "imagewidth":64,
         "margin":0,
         "name":"spikes",
         "spacing":0,
         "tilecount":4,
         "tileheight":16,
         "tilerendersize":"grid",
         "tilewidth":16
        }, 
        {
         "columns":3,
         "firstgid":77,
         "image":"Rocky Roads\/Enemies\/cannon.png",
         "imageheight":64,
         "imagewidth":96,
         "margin":0,
         "name":"cannon",
         "spacing":0,
         "tilecount":6,
         "tileheight":32,
         "tilerendersize":"grid",
         "tilewidth":32
        }, 
        {
         "columns":2,
         "firstgid":83,
         "image":"collision.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"collision",
         "spacing":0,
         "tilecount":4,
         "tileheight":16,
         "tilerendersize":"grid",
         "tilewidth":16
        }, 
        {
         "columns":6,
         "firstgid":87,
         "image":"Rocky Roads\/Objects\/coin_small_gold.png",
         "imageheight":16,
         "imagewidth":96,
         "margin":0,
         "name":"coin_small_gold",
         "spacing":0,
         "tilecount":6,
         "tileheight":16,
         "tilerendersize":"grid",
         "tiles":[
                {
                 "animation":[
                        {
                         "duration":100,
                         "tileid":0
                        }, 
                        {
                         "duration":100,
                         "tileid":1
                        }, 
                        {
                         "duration":100,
                         "tileid":2
                        }, 
                        {
                         "duration":100,
                         "tileid":3
                        }, 
                        {
                         "duration":100,
                         "tileid":4
                        }, 
                        {
                         "duration":100,
                         "tileid":5
                        }],
                 "id":0
                }],
         "tilewidth":16
        }, 
        {
         "columns":1,
         "firstgid":93,
         "image":"..\/img\/entities\/crate.png",
         "imageheight":16,
         "imagewidth":16,
         "margin":0,
         "name":"crate",
         "spacing":0,
         "tilecount":1,
         "tileheight":16,
         "tilewidth":16
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":16
});