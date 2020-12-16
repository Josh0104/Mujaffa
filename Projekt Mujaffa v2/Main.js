var pointLyd 
var antalPoint = 0;
var liv = 3;
var s;

function preload(){
imgHjerte = loadImage('Img/hjerteLiv.png')
}

function setup() {

  //createCanvas(1536, 864);
  createCanvas(windowWidth,windowHeight)

  mode = 0 //Startskærm
  player1 = new Player();
  Point1 = new Point(random(width/2-100,width/2+100),0);
  bil1 = new Biler();

  frameRate(60)
  background(100);

}

function draw(){

  clear();
  if (mode==0){
    startSkaerm();
  }

  if(mode==1){

  background(100)

  fill(255) 
  rect(width/2 - 300,0,25,9000)
  rect(width/2+300,0,25,9000)

  fill(255);
  textSize(75)
  text(antalPoint +" "+ "point",150,400,800,700)

    player1.move();
    var px = player1.getPosX()
    var py = player1.getPosY()

    var pointx = Point1.getPosX()
    var pointy = Point1.getPosY()

    bil1.koere();
    var bilX = bil1.bilGetPosX()
    var bilY = bil1.bilGetPosY()

    var d_Player_Point = int(dist(px+50,py+50,pointx,pointy))
    var d_Player_Bil = int(dist(px+50,py+50,bilX,bilY));

      if (Point1 != null ) {
        Point1.point1();
        }
      //console.log(" Afstand:" + " " + d)
      //if( (px - pointx) < 0.5 && (py - pointy) < 0.5) {
      if( d_Player_Point  < 100 ) { //Hvis du rammer point
        console.log("Du fik 1 point" + height)
      //Point1.getPosX(random(0,444));
        pointLyd = createAudio('Lyd/PointSound.mp3');
        pointLyd.volume(0.5)
        pointLyd.autoplay(true);
        antalPoint ++;
        Point1.point1(random(width/2-200,width/2+200),0);
      }   

      if (pointy - 100 > py ) { // Hvis du misser point
        Point1.point1(random(width/2-200,width/2+200),0)
      }
        
          if (bil1 != null ) {
            bil1.koere();
          }

          if(d_Player_Bil < 75){
            bil1.koere(random(width/2-200,width/2+200),0)
            bilRammerLyd = createAudio('Lyd/carCrash.mp3');
            bilRammerLyd.volume(0.5)
            bilRammerLyd.autoplay(true);
            liv --;
            console.log("Du rammer bilen, du har nu " + " " + liv + "liv tilbage")
          }

          if (bilY - 200 > py ){
            bil1.koere(random(width/2-200,width/2+200),0)
          }

          if (liv == 3) {

            image(imgHjerte,width - 400,5,150,150);
            image(imgHjerte,width - 275,5,150,150);
            image(imgHjerte,width - 150,5,150,150);

          } else if (liv == 2){
            image(imgHjerte,width - 275,5,150,150);
            image(imgHjerte,width - 150,5,150,150);

          } else  if (liv == 1){
            image(imgHjerte,width - 150,5,150,150);

          } else {
            mode = 4;
          }   
          
  } 
  if (mode==2){
    pauseSkaerm();
  }

  if (mode ==4){
    slutSkaerm();
  }

  if (mode ==5){
    infoSkaerm();

  }
    }
      
//funktioner 
function startSkaerm() {

  background(53,75,213)

  textSize(50);
  let t = "Tryk på ENTER for at starte spillet";
  fill(255);
  rectMode(CENTER);
  textAlign(CENTER);
  text(t, width/2, height/2, 500, 300); // Text wraps within text box


}

function pauseSkaerm() {

  background(53,75,213)

  textSize(62);
  let t = "Tryk på mellerum for at gå tilbage til spillet";
  fill(255);
  rectMode(CENTER);
  textAlign(CENTER);
  text(t, width/2, height/2, 800, 300); // Text wraps within text box

}

function slutSkaerm(){

  background(230,0,0)
  textSize(62);
  let t = "Spillet er slut, du fik" + " " + antalPoint + " " + "point"  ;
  fill(255);
  rectMode(CENTER);
  textAlign(CENTER);
  text(t, width/2, height/2, 800, 300);

  button = createButton("Spil igen");
  button.mousePressed(genstartKnap);
  button.size(200,100);
  button.position(width/2 - 100, height/2 + 5);
  button.style("font-family", "Bodoni");
  button.style("font-size", "48px");
  button.style('background-color', color('rgb(0,221,0)'));

}

//Funktioner---------

function infoSkaerm(){

  background(100)

  buttonInfo.remove()

  let t1 = "Du styrer bilen med højre og venstre piltast"
  let t2 = "Du skal prøve at samle så mange mønter så muligt"
  let t3 = "Hvis du rammer en bil 3 gange, så er spillet slut"
  let t4 = "Tryk på p for at sætte spillet på pause"

  textSize(50)
  fill(255);
  rectMode(CENTER);
  textAlign(CENTER);
  text(t1, width/2, height/2 - 150, 800, 300);
  text(t2, width/2, height/2 - 0, 1000, 300);
  text(t3, width/2, height/2 + 150, 1000, 300);
  text(t4, width/2, height/2 + 250, 1000, 300);



}

    function keyPressed(){
        spilLyd = false

      if (  keyCode === ENTER) {
        if(mode==0){
        mode=1;
       } }

      if ( key=== "p" || key === "P"){
          mode =2;
        }

      if (key === " "){
            mode=1;
          }
      
      // if (key === "h") {
      //   if (!spilLyd) {

      //   dyt = createAudio('Lyd/Dyt.mp3')
      //   dyt.play(true);
      //   spilLyd = true
      //   }
      // }
      }     

        function genstartKnap() {
          window.location.reload(true);
          }

        function infoKnap(){
            mode = 5;
        }




/*Mode er forskellige skærme 

mode 0 = startskærm 
mode 1 = spillet 
mode 2 = pasue skærm 
mode 3 = død særm 
mode 4 = instruktion skærm */