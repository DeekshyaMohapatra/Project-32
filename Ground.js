class Ground{
 constructor(x,y,w,h)
 {
     var options={
         isStatic:true
     }
     this.image=loadImage("grounds.PNG");
     this.body=Bodies.rectangle(x,y,w,h,options);
     this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
     World.add(world,this.body);
 }
 display()
 {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.w,this.h);
 }
};