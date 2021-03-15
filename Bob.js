class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            isStatic:false,
            friction:0.3,
            density:0.8
        }
        this.body=Matter.Bodies.circle(x,y,25,options);
        this.radius=25;
        
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("pink");
        stroke("lightblue");
        //ellipseMode(RADIUS);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }
}
