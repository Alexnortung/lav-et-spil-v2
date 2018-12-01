class Tile extends GameObject {
  constructor(game,pos, options) {
    //create body
    const body = new p2.Body({
      mass: 0,
      position: [pos.x, pos.y],
      type: game.getBodyType(1)
    });

    let material = game.materials.defaultGroundMaterial;
    if (typeof options === "obejct") {
      typeof options.material === "obejct" ? material = options.material : 0;
    }

    const shape = new p2.Box({
      width: 1,
      height: 1,
      material: material
    });

    body.addShape(shape);
    super(game, body, options);


    this.game = game;
    this.body = body;
    this.game.addTile(this);
  }
}
