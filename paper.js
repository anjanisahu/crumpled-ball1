class Paper{

    constructor(x, y, height){
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'denstiy':1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        

        world.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);

        fill("yellow");

        circle(this.body.position.x, this.body.position.y, this.radius);
    }
    
    
};