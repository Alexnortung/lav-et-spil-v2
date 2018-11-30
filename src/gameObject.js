class GameObject{
    constructor(game, body, options){
      this.game.world.addBody(body);
      this.body = body;
      this.gameObjectId = game.getNewId();
  
      this.game = game;
      game.gameObjects.push(this);
  
      if (typeof options === "object") {
        typeof options.isSolid === "boolean" ? this.isSolid = options.isSolid : this.isSolid = false;
        typeof options.tags === "object" ? this.tags = options.tags : this.tags = [];
      } else {
        this.isSolid = false;
        this.tags = [];
      }
  
    }
  
    setPosition(position){
      this.position = position;
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
  }
  