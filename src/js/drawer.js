class Drawer {
  constructor(game) {
    this.game = game;
    this.statics = [];
    this.parallaxBackgrounds = [];
    this.backgrounds = [];
    this.foregrounds = [];
    this._hasForeground = false;
    this._hasBackground = false;

    this.pg = createGraphics(1920, 1080);

  }

  addBackground(img) {
    this.backgrounds.push(img);
    this._hasBackground = true;
  }

  addForeground(img) {
    this.foregrounds.push(img)
    this._hasForeground = true;
  }

  addStaticBackground(img){
    this.statics.push(img);
  }

  addParallaxBackground(img, z) {

    const par = {img: img, z: z}

    this.parallaxBackgrounds.push(par);
  }

  draw() {

    this.pg.background(255)
    //get playerpos
    const playerPos = this.game.player.position;
    const drawnPlayerPos = playerPos.add(new Vector(0,0))
    //draw static
    for (var i = 0; i < this.statics.length; i++) {
      this.pg.image(this.statics[i], 0 , 0);
    }

    //draw parallax
    for (var i = 0; i < this.parallaxBackgrounds.length; i++) {
      const cPar = this.parallaxBackgrounds[i];
      this.pg.image(cPar.img, playerPos.x/(cPar.z + 1), 0 );

    }

    //draw background
    for (var i = 0; i < this.backgrounds.length; i++) {
      this.pg.image(this.backgrounds[i],0,0)
    }

    //draw gameObjects (player, monsters, projectiles, etc.)

    this.pg.image(images.player,  (drawnPlayerPos.x * 32),(drawnPlayerPos.y * 32));

    //draw foreground


    background(255);
    // image(this.pg,(playerPos.x * 32) , (playerPos.y-1) * 32)
    image(this.pg,(0) , 0)
    // console.log(playerPos);

  }

}
