class Player extends GameObject
{
    constructor(game, body, options)
    {
        super(game, body, options);
    }

    getPosition()
    {
        return new Vector(this.body.position[0], this.body.position[1]);
    }
}