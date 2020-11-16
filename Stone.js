class Stone{
    constructor(x,y,r){
    
        this.STONE = loadImage("stone.png");
    
        this.r = r;
        var options = {
    restitution:0,
    density:1,
    friction:1.2
        }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    
    }
    
    display(){
    var pos = this.body.position;
    
    push();
       translate(pos.x,pos.y);
        
       rotate(this.body.angle);
    
       imageMode(CENTER);
    
       image(this.STONE,0,0,this.r*2,this.r*2);
       
    pop();
    
    }
    
    
    
    }
    