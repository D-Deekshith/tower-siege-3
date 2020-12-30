class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){

        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed > 5){
          push();
          World.remove(world,this.body);
          rectMode(CENTER);
          tint(255,255);

          rect(pos.x,pos.y,30,40);
          pop();
        }
        else{
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        
      }

      
}