class Hand{
    constructor(bodyA,pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
length:1,
stiffness:0.006
}



this.constraint = Constraint.create(options);
World.add(world,this.constraint);


    }

fli(){
console.log("uwu")
    this.constraint.bodyA = null; 
    console.log("owo")

}

attach(bodyB){
    this.constraint.bodyA = bodyB;

}
}


