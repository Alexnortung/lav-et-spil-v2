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
