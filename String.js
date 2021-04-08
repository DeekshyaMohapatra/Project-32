class String
{
    constructor(bodyA,pointB)
    {
      var options=
      {
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.03,
          length : 5
      }
      this.pointB = pointB;
      this.string = Constraint.create(options);
      World.add(world,this.string);
    }
  
    fly()
   {
     this.string.bodyA = null;
   }

attach(body)
{
 this.string.bodyA = body;
}

display()
{
    if(this.string.bodyA){
    var pointA = this.string.bodyA.position;
    var pointB = this.pointB;
    fill("black");
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y); 
    } 
   
}

};