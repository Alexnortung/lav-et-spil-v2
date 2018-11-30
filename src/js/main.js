let game;
let canvas;
let tileImg;

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  //setup game
  game = new Game();
  const drawer = new Drawer(game);

  //render background

  //render foreground


}

function draw() {


}

function mousePressed() {

}

function keyPressed()
{
  // j = 74
  
  console.log(keyCode);
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
