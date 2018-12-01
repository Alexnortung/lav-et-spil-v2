class Game {
  constructor()
  {
    this._hasDrawer = false;
    this._hasPlayer = false;


    this.gameObjects = [];


    const timestep = 1 / 60;

    this.tiles = [];

    // Inititalizes the world
    this.world = new p2.World ({
      gravity: [0, 9.82],
    });

    // this.world.solver = new p2.GSSolver();
    // this.world.solver.iterations = 60;



    // let testGO = new GameObject(this, testBody);

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
        //console.log(testGO.body.position);

        if ( keyIsDown(74) ||  keyIsDown(37)) {
          //moving left
          console.log("left");
          this.player.addForce({
            vector: [-300,0],
          });
        } else if (keyIsDown(76) || keyIsDown(39)) {
          //moving right
          console.log("right");
          this.player.addForce({
            vector: [300,0],
          });
        }

    }, 1000 * timestep);

  }

  createBoxBody(options)
  {
    let width = 1;
    let height = 1;
    let hasCollider = true;
    let posx = 0;
    let posy = 0;
    let mass = 1;
    let bodyTypeNum = 0;
    let material = this.materials.defaultGroundMaterial;
    // let collisionGroup = collisionGroups.OTHER;
    // let collisionMask = collisionGroups.OTHER;

    if (typeof options === "object")
    {
      typeof options.width === "number" ? width = options.width : width = 1;
      typeof options.height === "number" ? height = options.height : height = 1;
      typeof options.hasCollider === "boolean" ? hasCollider = options.hasCollider : hasCollider = true;
      typeof options.posx === "number" ? posx = options.posx : posx = 0;
      typeof options.posy === "number" ? posy = options.posy : posy = 0;
      typeof options.mass === "number" ? mass = options.mass : mass = 1;
      typeof options.bodyType === "number" ? bodyTypeNum = options.bodyType : bodyTypeNum = 0;
      typeof options.material === "object" ? material = options.material : material = this.materials.defaultGroundMaterial;
      // typeof options.collisionGroup === "number" ? collisionGroup = options.collisionGroup : collisionGroup = collisionGroups.OTHER;
      // typeof options.collisionMask === "number" ? collisionMask = options.collisionMask : collisionMask = collisionGroups.OTHER;
    }



    // gets the correct body type
    bodyTypeNum = this.getBodyType(bodyTypeNum);

    var body = new p2.Body({
      mass: mass,
      position: [posx, posy],
      type: bodyTypeNum,
    });
    var collider = null;

    if(hasCollider)
    {
      collider = new p2.Box({
        width: width,
        height: height,
        material: material
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

  setPlayer(player){
    this.player = player;
    this._hasPlayer = true;
  }

  setMaterials(materials){
    this.materials = materials;
  }

  addTile(tile){
    this.tiles.push(tile);
  }

}
