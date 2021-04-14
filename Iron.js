class Iron{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 150;
        this.height = 130;
        World.add(world, this.body);
    };
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(3);
        stroke('grey')
        fill('white')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    };
}