class Game {
  constructor()
  {
    const timestep = 1 / 60;

    // Inititalizes the world
    this.world = new p2.World ({
      gravity: [0, -9.82],
    });

    var circleBody = new p2.Body({
      mass:5,
      position:[0,10]
    });

    var circleShape = new p2.Circle({ radius: 1 });
    circleBody.addShape(circleShape);

    var groundShape = new p2.Plane();
    var groundBody = new p2.Body({
      mass:0
    });
    groundBody.addShape(groundShape);

    world.addBody(circleBody);
    world.addBody(groundBody);

    setInterval(function(){
        world.step(timeStep);
        console.log("Circle x position: " + circleBody.position[0]);
        console.log("Circle y position: " + circleBody.position[1]);
        console.log("Circle angle: " + circleBody.angle);
    }, 1000 * timeStep);
    
  }
}
const game = new Game();