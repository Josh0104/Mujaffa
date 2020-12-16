class Biler {

    constructor(x,y){
    this.x = random(width/2-100,width/2+100)
    this.y = -50
    this.w = 150
    this.h = 150
    this.roedBil = loadImage('Img/roedBil.png')
    }

    koere(xx,yy){
    if(xx != undefined) this.x = xx;
    if(yy != undefined) this.y = yy;
        fill(255,0,0)
        image(this.roedBil,this.x,this.y,this.h,this.w)
}

    bilGetPosX(){
       return this.x 
    }
    bilGetPosY(){
        return this.y +=10;
    }
}