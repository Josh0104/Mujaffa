class Point{ 

    constructor(x, y){
    this.x = x
    this.y  = y 
    this.weight1 = 150
    this.height1 = 150
    this.imgPoint = loadImage('Img/Point1.png')
    }

    point1(xx, yy){
      if(xx != undefined) this.x = xx;
      if(yy != undefined) this.y = yy;
        fill(255,255,0)
        //ellipse(this.x,this.y,this.weight1,this.height1)
        image(this.imgPoint,this.x,this.y,this.weight1,this.height1)
    }

    getPosX() {
      return this.x;
      }
       getPosY() {
        return this.y +=5
      }
}