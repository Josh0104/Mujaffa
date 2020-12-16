function preload() {

 imgP = loadImage('Img/PlayerImg.png')

}

 class Player{

constructor() {
this.Player_X = width/2
this.Player_Y = height/2 + 200
this.speed = 10
this.widthPlayer = 150
this.heightPlayer = 150
this.color1 = random(0, 255)
this.color2 = random(0, 255)
this.color3 = random(0, 255)
this.imgPlayer = loadImage('Img/PlayerImg2.png')

}

move() {
  
  fill(this.color1,this.color2,this.color3)
  noStroke();
  image(this.imgPlayer,this.Player_X,this.Player_Y,this.widthPlayer,this.heightPlayer);
    //ellipse(this.Player_X, this.Player_Y, this.widthPlayer, this.heightPlayer)
    if (keyIsDown(RIGHT_ARROW) && this.Player_X < width/2 + 150) {
        this.Player_X += this.speed;

      } else if (keyIsDown(LEFT_ARROW) && this.Player_X > width/2 - 300) {
        this.Player_X -= this.speed;
      
      }else if (keyIsDown(UP_ARROW) && this.Player_Y > 0 ) {
        this.Player_Y -= this.speed;

      } else if (keyIsDown(DOWN_ARROW) && this.Player_Y < height - this.heightPlayer ) {
        this.Player_Y += this.speed;
      }

}

getPosX() {
  return this.Player_X
}

 getPosY() {
  return this.Player_Y
} 

}

/*
function name(){

  fill(0)
  let playername = "Player"
  text(playername, this.Player_X, this.Player_Y , 100, 100)


    //   else if (keyIsPressed) {

    //     if ((key == 'h') || (key == 'H')) {

    //      dyt = createAudio('Lyd/Dyt.mp3');
    //      dyt.autoplay(true);
    //     }
       
    //  }

} */