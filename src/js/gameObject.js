class GameObject{
    constructor(game, body, options){
      this.game = game;
      this.game.world.addBody(body);
      this.body = body;
      //this.gameObjectId = game.getNewId();

      game.gameObjects.push(this);
  
      if (typeof options === "object") {
        typeof options.maxVelocityX === "number" ? this.maxVelocityX = options.maxVelocityX : this.maxVelocityX = 100;
      } else {
        this.maxVelocityX = 100;
      }
  
    }

    // options er en vector bestående af x, y
    addForce(options)
    {
      var vector = [0,0];
      if(typeof options === "object")
      {
        typeof options.vector === "object" ? vector = options.vector : vector = [0, 0];
      }

      var force = p2.vec2.fromValues(vector[0], vector[1]);
      p2.vec2.add(this.body.force, this.body.force, force); // body.force += force

      if(this.body.velocity[0] > this.maxVelocityX)
      {
        console.log(this.body.velocity);
        this.body.velocity[0] = this.maxVelocityX;
      }
    }
  
    update(){
  
    }
  
    get centerPosition(){
      const center = this.position.add(this.size.divide(2));
      return center;
    }
  
    set centerPosition(position){
      const newPos = position.subtract(this.size.divide(2));
      this.position = newPos;
    }
  
    hasTag(tag){
      const tagsToLower = this.tags.map(tagInArr =>{
        if (typeof tagInArr === "string") {
          return tagInArr.toLowerCase();
        } else {
          // console.log(tagInArr);
          return "";
        }
      });
      return tagsToLower.indexOf(tag.toLowerCase()) != -1
    }
  
    destroy(){
      return this.game.destroyGameObject(this.gameObjectId);
    }

    set position(vector)
    {
      this.body.position[0] = vector.x;
      this.body.position[1] = vector.y;
    }

    get position()
    {
        return new Vector(this.body.position[0], this.body.position[1]);
    }
  }
  