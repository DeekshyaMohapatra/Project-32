class Tree
{
  constructor(x,y,width,height)
  {
      var options={
          isStatic:true
      }
      //this.image=loadImage("tree.PNG");
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
  }
  display()
  {
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
  }
}