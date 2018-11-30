class Drawer {
  constructor(game) {
    this.game = game;
    this.statics = [];
    this.parallaxBackgrounds = [];
    this.backgrounds = [];
    this.foregrounds = [];
    this._hasForeground = false;
    this._hasBackground = false;

    this.pg = createGraphics();

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
    //get playerpos
    const playerPos = this.game.player.pos
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
    //draw foreground
  }

}
