let game;
let canvas;
let tileImg;

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  //setup game
  game = new Game();
  const drawer = new Drawer(game);

  const player = new Player(game, game.createBoxBody({width: 2, height: 2, posx: 5, posy: 5}));
  //game.setPlayer(player);
  player.addForce({
    vector: [5, 5],
  });


}

function draw() {


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
    console.log("Pressing left");
    game.player.addForce({
      vector: [0,-1],
    });
  }
  else if(keyCode === 73 || keyCode === 38) // moving up
  {
    console.log("Pressing up");
    game.player.addForce({
      vector: [1,0],
    });
  }
  else if (keyCode === 76 || keyCode === 39) // moving right
  {
    console.log("Pressing right");
    game.player.addForce({
      vector: [0,1],
    });
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
  const tilemap = loadImage("assets/tilemap.png")
  return tilemap;

}

function preload() {
  //load tilemap
  tileImg = loadTileMap();

  //load assets
}

function handleMapFile(mapFileData, drawer) {
  //create background
  const backgroundLayer = createGraphics();

  //create foreground
  const foregroundLayer = createGraphics();

  const backgroundLastLayer = 3;

  const tileset =mapFileData.tilesets[0];

  for (let i = 0; i < mapFileData.layers.length; i++) {
    //background
    const cLayer = mapFileData.layers[j];
    for (let k = 0; k < cLayer.data.length; k++) {
      // add tile to world


      // render image on background
      // get tileset

      const cData = cLayer.data[k];

      const tilesetColumns = tileset.columns;

      const mapWidth = mapFileData.width;


      const tileWidth = tileset.tilewidth;
      const tileHeight = tileset.tileheight;

      let chosenLayer = backgroundLayer;

      if (!(i <= backgroundLastLayer)) {
        chosenLayer = foregroundLayer;

      }
      chosenLayer.image(tileImg, //img
        k % mapWidth, floor(k / mapWidth), //dx, dy
        tileWidth, tileHeight, // dW, dH
        (cData % tilesetColumns) * tileWidth, // sx
        floor(cData / tilesetColumns) * tileWidth, // sy
        tileWidth, tileHeight // sw, sh
      )

    }

  }

  //add layers to drawer
  drawer.addBackground(backgroundLayer);
  drawer.addforeground(foregroundLayer);

}
