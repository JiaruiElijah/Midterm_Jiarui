function setup() {
  createCanvas(400, 400);
  x = 0;
  
}

function draw() {
  background(220);
  
  plants(170,230);
  
  noStroke();
  fill('rgb(24,36,54)');
  rect(0,320,400,200);//station base
  
 
   
  fill(27,75,88,60);
  rect(0,320,400,100);
  
  fill(2,90,90,70);
  rect(0,360,400,90);//shadow of the station base
  
  
  
  

  house(0,130);
  
  zhu(210,65);
  // zhu(300,70);
  
  
  fill(79,85,88);
  rect(0,100,400,20);//top zhu
  
  rect(0,50,400,20);
  
  fill(33,49,55);
  rect(0,60,400,10);
  rect(210,60,5,40);
  
  cluster5(230,265);
  cluster6(199,265);

  
  
  
  block();//station base line
  
  
  
  
  
  fill(255);
  noStroke();
  rect(0,293,400,10);//ground
  
  cluster1(20,300);
  cluster2(150,300);
  cluster1(200,300);
  cluster3(300,300);
  cluster4(100,300);

  
  shadow(0, 50, 235, 50, 0, 275);
  shadow(0,290,170,290,140,230);
  shadow(230,165,230,80,150,85);
  shadow2();
  
  // triangle(230,110,110,300,330,300,20);  
}

function block(){
    for(i=0;i<100000000;i++){
      if(i%2==0){
        fill(79,85,88);
        stroke(29,41,60);
        strokeWeight(3);
        rect(x,304,50,15);
        x+=40;
      }
      else{
        fill(84,96,76);
        stroke(29,41,60);
        strokeWeight(3);
        rect(x,304,50,15);
        x+=40;
        
      }
  
  }
}

function zhu(x,y){
  noStroke();
  fill(79,85,88);
  rect(x,y,20,230); 
  stroke(50,66,76);
  line(x+15,y,x+15,300);
  noStroke();
  fill(133,23,25);
  rect(x+5,205,15,20);
  fill(73,77,88);
  rect(x+10,212,5,5);
}

function house(x,y){
  fill(45,63,74);
  rect(x,y,150,160);
  
  fill(34,46,64);
  rect(x,y-60,210,60);//upper
  rect(x,y+120,170,40);//lower
  
  fill(0,20,47);
  rect(x+220,y-60,210,40);
  
  fill(83,88,90);
  rect(x,y+120,170,5);//lower2
  
  fill(20,46,79);
  rect(x,y+45,30,40);//window
  
  stroke(33,45,63);
  for(i=0;i<6;i++){
    x+=15;

    line(x+50,y+30,x+50,y+119)
    
  }
  noStroke();
  fill(34,46,64);
  rect(0,y,150,30);
  fill(45,63,74);
  rect(60,y,90,15);
  rect(50,y+13,100,10);
  

  
  
}

function shadow(a,b,c,d,e,f){
  noStroke();
  fill(0,0,0,20);
  triangle(a,b,c,d,e,f);
  
}

function shadow2(){
  noStroke();
  fill(0,0,0,40);
  rect(210,150,10,140);
}

function cluster1(x, y){
  stroke(255);
  fill(255);
  rect(x,y,5,5);
  rect(x+5,y,10,10);
  rect(x+10,y+10,5,5);
  rect(x+10,y+15,5,5);
  
}
function cluster2(x, y){
  stroke(255);
  fill(255);
  rect(x,y,5,5);
  rect(x+5,y,7,7);
  rect(x+15,y,10,10);
  rect(x+10,y+10,5,5);
  rect(x+10,y+15,5,5);
  rect(x+15,y+10,5,5);
  rect(x+10,y+20,5,5);
  rect(x+10,y+25,5,5);
  
}

function cluster3(x, y){
  stroke(255);
  fill(255);
  rect(x,y,5,5);
  rect(x+5,y,7,7);
  rect(x+15,y,10,20);
  rect(x+25,y,10,5);
  rect(x+10,y,5,15);
  rect(x+10,y+15,5,5);
  rect(x,y+10,8,5);
  rect(x+10,y+20,5,5);
  rect(x+10,y+25,5,5);
  
}
function cluster4(x, y){
  stroke(255);
  fill(255);
  rect(x-5,y,15,5);
  rect(x+5,y,7,7);
  rect(x,y,10,5);
  rect(x,y+5,5,5);
  rect(x-5,y+13,5,5);

  
}
function cluster5(x, y){
  stroke(255);
  fill(255);
  rect(x,y,25,25,10);
  rect(x+5,y+10,27,27,10);
  rect(x-5,y+15,10,20,10);
  rect(x+25,y+15,17,17,10);
}

function cluster6(x, y){
  stroke(255);
  fill(255);
  rect(x+5,y+6,5,12,2);
  rect(x-5,y+18,16,10,10);
  rect(x-15,y+25,16,5,10);
  

}

function plants(x,y){
  noStroke();
  fill(255);
  // rect(0,220,400,10);
  
  fill(79,128,03);
  stroke(255);
  rect(0,250,400,50);
  
  rect(250,240,30,20);
  rect(250,230,15,20);
  rect(240,240,15,20);
  rect(230,245,15,20);
  
  rect(190,245,15,20);
  rect(180,240,15,20);
  rect(175,245,15,20);
  
  rect(370,245,15,20);
  rect(350,240,15,20);
  rect(340,245,15,20);
  
  noStroke();
  rect(250,240,32,25);
  rect(250,230,17,25);
  rect(240,240,17,25);
  rect(230,245,17,25);
  
  rect(190,245,19,25);
  rect(180,240,19,25);
  rect(173,245,19,25);
  
  rect(365,245,24,25);
  rect(350,240,19,25);
  rect(335,245,22,25);

 
  
 
  
  
  // stroke(255);
  // fill(255);
  // rect(x,y,5,5);
  // rect(x+5,y,7,7);
  // rect(x+15,y,10,20);
  // rect(x+10,y,5,15);
  // rect(x+10,y+15,5,5);
  // rect(x,y+5,8,5);
  // rect(x+10,y+20,15,5);

  
  
  // fill(255);
  // cluster1(300,230);
  
}

