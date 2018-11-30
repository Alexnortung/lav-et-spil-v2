class Game {
  constructor()
  {
    this._hasDrawer = false;

    this.gameObjects = [];


    const timestep = 1 / 60;

    // Inititalizes the world
    this.world = new p2.World ({
      gravity: [0, -9.82],
    });

    /*
    var testBody = this.createBoxBody({
      width: 1,
      height: 1,
      hasCollider: true,
      posx: 10,
      posy: 10,
      mass: 10,
      bodyType: 0,
    });*/

    // Creating a ground for the whole game
    var groundShape = new p2.Plane({
      position: [0,0],
    });
    var groundBody = new p2.Body();
    groundBody.addShape(groundShape);
    this.world.addBody(groundBody);
    //this.world.addBody(testBody);

    // Setting the game init and fps cycle
    setInterval(()=>{
        this.world.step(timestep);
        //console.log(testBody.velocity);
    }, 1000 * timestep);

  }

  createBoxBody(options)
  {
    if (typeof options === "object")
    {
      typeof options.width === "number" ? this.width = options.width : this.width = 1;
      typeof options.height === "number" ? this.height = options.height : this.height = 1;
      typeof options.hasCollider === "number" ? this.hasCollider = options.hasCollider : this.hasCollider = true;
      typeof options.posx === "number" ? this.posx = options.posx : this.posx = 0;
      typeof options.posy === "number" ? this.posy = options.posy : this.posy = 0;
      typeof options.mass === "number" ? this.mass = options.mass : this.mass = 1;
      typeof options.bodyType === "number" ? this.bodyType = options.bodyType : this.bodyType = 0;
    }
    else
    {
      this.width = 1;
      this.height = 1;
      this.hasCollider = true;
      this.posx = 0;
      this.posy = 0;
      this.mass = 1;
      this.bodyType = 0;
    }

    // gets the correct body type
    var bodyType = this.getBodyType(this.bodyType);

    var body = new p2.Body({
      mass: this.mass,
      position: [this.posx, this.posy],
      type: bodyType,
    });
    var collider = null;

    if(this.hasCollider)
    {
      collider = new p2.Box({
        width: this.width,
        height: this.height,
      });

      body.addShape(collider);
    }

    return body;
  }

  getBodyType(bodyTypeIndex)
  {
    switch (bodyTypeIndex)
    {
      case 0:
        return p2.Body.DYNAMIC;
        break;

      case 1:
        return p2.Body.STATIC;
        break;

      case 2:
        return p2.Body.KINEMATIC;
        break;

      default:
        return p2.Body.DYNAMIC;
        break;
    }
  }

  addDrawer(drawer){
    this._hasDrawer = true;
    this.drawer = drawer;

  }
}
