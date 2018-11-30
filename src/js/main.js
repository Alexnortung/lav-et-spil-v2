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

function handleMapFile(mapFileData) {
  //create background
  const backgroundLayer = createGraphics();

  //create foreground
  const foregroundLayer = createGraphics();

  const backgroundLastLayer = 3;

  for (let i = 0; i < backgroundLastLayer; i++) {
    //background
    for (let j = 0; j < mapFileData.layers.length; j++) {
      const cLayer = mapFileData.layers[j];
      for (let k = 0; k < cLayer.data.length; k++) {
        // add tile to world


        // render image on background
        // get tileset

        cLayer.data[k]

        image(tileImg, 0, 0)

      }
    }
  }

  for (var i = backgroundLastLayer + 1; i < mapFileData.layers.length; i++) {
    //foreground
    mapFileData.layers[i]
  }

}
