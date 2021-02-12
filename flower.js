class flower
{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            
            'friction':1
        }
      
      this.body=Bodies.circle(x,y,r,options);
      this.r=r;
      this.image=loadImage("flower2.png")
      World.add(world,this.body);
    }
    display(){
       var pos=this.body.position
        push();
        //translate(pos.x,pos.y);
        //rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);
    }
};