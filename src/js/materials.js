class Materials {
  constructor(game) {
    this.game = game;
    this.playerMaterial = new p2.Material();
    this.defaultGroundMaterial = new p2.Material();


    this.addContactMaterials();
  }

  addContactMaterials(){
    this.game.world.addContactMaterial(new p2.ContactMaterial(this.playerMaterial, this.defaultGroundMaterial, {
      restitution:0
    }));

    
  }


}
