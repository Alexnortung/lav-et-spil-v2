let game;
let canvas;
let tileImg;
let tilemapDataJSON;
let images = {};

const collisionGroups = {
  OTHER: Math.pow(2,0),
  PLAYER: Math.pow(2,1),
  GROUND: Math.pow(2,2)
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  //setup game
  game = new Game();
  const materials = new Materials(game);
  game.setMaterials(materials);
  const drawer = new Drawer(game);
  game.addDrawer(drawer);

  const player = new Player(game, game.createBoxBody({width: 1, height: 1, posx: 5, posy: 5, material: materials.playerMaterial}));
  game.setPlayer(player);


  handleMapFile(tilemapDataJSON, drawer);


}

function draw() {
  game.drawer.draw();

}

function mousePressed() {

}

function keyPressed()
{
  // j = 74
  // i = 73
  // k = 75
  // l = 76

  if(keyCode === 74 || keyCode === 37) // moving left
  {
    // console.log("Pressing left");
    // game.player.addForce({
    //   vector: [300,0],
    // });
  }
  else if(keyCode === 73 || keyCode === 38) // moving up
  {
    console.log("Pressing up");
    // console.log("player is grounded: ", game.player.isGrounded());
    if (game.player.isGrounded()) {
      game.player.addForce({
        vector: [0,-500],
      });

    }
  }
  else if (keyCode === 76 || keyCode === 39) // moving right
  {
    // console.log("Pressing right");
    // game.player.addForce({
    //   vector: [-300,0],
    // });
  }
  else if (keyCode === 75 || keyCode === 40) // moving down
  {
    console.log("Pressing down");
    game.player.addForce({
      vector: [-1,0],
    });
  }
  else if (keyCode === 90) // shooting
  {
    console.log("Shooting");
  }
}

function loadTileMap() {
  const tilemap = loadImage("assets/tilemap_v1.png")
  return tilemap;

}

function loadTileMapJSON() {
  const tilemapJSON = loadJSON("assets/map_v1..json");
  return tilemapJSON;
}

function preload() {
  //load tilemap
  tileImg = loadTileMap();

  //load assets
  tilemapDataJSON = loadTileMapJSON();

  images.player = loadImage("assets/Guy1_v2.png");

}

function handleMapFile(mapFileData, drawer) {
  //create background
  const backgroundLayer = createGraphics(3000, 1200);

  // new GameObject(game, game.createBoxBody());

  //create foreground
  const foregroundLayer = createGraphics(3000, 1200);

  const backgroundLastLayer = 3;

  const tileset =mapFileData.tilesets[0];

  for (let i = 0; i < mapFileData.layers.length; i++) {
    //background
    const cLayer = mapFileData.layers[i];
    for (let k = 0; k < cLayer.data.length; k++) {
      // add tile to world


      // render image on background
      // get tileset

      let cData = cLayer.data[k] -1;
      if (cData == -1) {
        continue;
      }

      const tilesetColumns = tileset.columns;

      const mapWidth = mapFileData.width;


      const tileWidth = tileset.tilewidth;
      const tileHeight = tileset.tileheight;

      let chosenLayer = backgroundLayer;

      if (!(i <= backgroundLastLayer)) {
        chosenLayer = foregroundLayer;

      }
      if (cData +1 == 15) {
        let position = new Vector((k % mapWidth), floor(k / mapWidth));
        console.log(position);
        new Tile(game, position);
        // new GameObject(game, game.createBoxBody({posx:(k % mapWidth) , posy: floor(k / mapWidth) , bodyType: 1, mass:0}))
        console.log("created gameObj at: ", (k % mapWidth), floor(k / mapWidth) );
      }


      // if (i == 0 && k == 0) {
      //   console.log(  (k % mapWidth) * tileWidth, floor(k / mapWidth) * tileWidth, //dx, dy
      //     tileWidth, tileHeight, // dW, dH
      //     (cData % tilesetColumns) * tileWidth, // sx
      //     floor(cData / tilesetColumns) * tileWidth, // sy
      //     tileWidth, tileHeight);
      // }

      chosenLayer.image(tileImg, //img
        (k % mapWidth) * tileWidth, floor(k / mapWidth) * tileWidth, //dx, dy
        tileWidth+1, tileHeight+1, // dW, dH
        ((cData % tilesetColumns) * tileWidth) , // sx
        (floor(cData / tilesetColumns) * tileWidth) , // sy
        tileWidth, tileHeight // sw, sh
      )

    }

  }

  //add layers to drawer
  drawer.addBackground(backgroundLayer);
  drawer.addForeground(foregroundLayer);

}
