class Block{
  constructor(x, y,) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      World.add(world, this.body);
      this.image= loadImage("block.png")

      this.transparency= 255
    }
    display(){
      if(this.body.speed<3){
      var pos= this.body.position;
      
      imageMode(CENTER);
      image(this.image, pos.x,pos.y,30, 40);
      }

      else{
        World.remove(world, this.body)
        this.transparency= this.transparency- 5;
        var pos= this.body.position;
        push();
        tint(255, this.transparency)
        image(this.image, pos.x,pos.y,30, 40);
        pop();
      }
    }
}