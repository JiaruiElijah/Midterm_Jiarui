// function setup() {
//   createCanvas(400, 400);
//   frameRate(15);

//   // v = new Snow(width/2, 0);
//   v1 = new Snow(0, -50, 5, 5, 20);//first snow
//   v2 = new Snow(100, -300, 5, 5, 20);//second snow
//   v3 = new Snow(200, -400, 5, 5, 20);//third snow
//   v4 = new Snow(100, -50, 7, 10, 20);
  
// }

// function draw() {
//   // background('rgb(0,0,0)');

//   v1.update();
//   v2.update();
//   v3.update();
//   // v4.update();

//   // v4.display();

//   for(i = 0; i<5; i++){
//   v1.display();
//   v1.display2();
//   v1.display3();
//   v1.display4();

//   v2.display();
//   v2.display2();
//   v2.display3();  
//   v2.display4();

//   v3.display();
//   v3.display2();
//   v3.display3();
//   v3.display4();
//   }
  
  
// }

class Snow{
  
  constructor(x1, y1, sp, a, b){
    this.acceleration = createVector(-2, sp);
    this.velocity = createVector(0, 0);
    this.position = createVector(x1, y1);
    this.maxspeed = 8;
    this.a = a;
    this.b = b;
    this.x2 = x1;
    this.y2 = y1;

  }
  
  display() {
    
    noStroke();
    fill(255,255,255,70);
    let w = random(this.a,this.b);
    let h = random(this.a,this.b);
    rectMode(CENTER);
    push();
    translate(this.position.x,this.position.y);
    rect(100,0,w,h);
    rect(200,40,w,h);
    rect(300,-50,w,h);
    
    pop();
    if(this.position.y>550){
      this.position.x = 0;
      this.position.y = -50;
      
    }

  }
  
    display2() {
    
    noStroke();
    fill(255,255,255,70);
    let w = random(this.a,this.b);
    let h = random(this.a,this.b);
    rectMode(CENTER);
    push();
    translate(this.position.x-50,this.position.y-100);
    rect(100,0,w,h);
    rect(200,40,w,h);
    rect(300,-50,w,h);
    
    pop();
    if(this.position.y>550){
      this.position.x = 0;
      this.position.y = -50;
      
    }

  }

  display3() {
    
    noStroke();
    fill(255,255,255,70);
    let w = random(this.a,this.b);
    let h = random(this.a,this.b);
    rectMode(CENTER);
    push();
    translate(this.position.x+300,this.position.y-100);
    rect(100,0,w,h);
    rect(200,40,w,h);
    rect(300,-50,w,h);
    
    pop();
    if(this.position.y>550){
      this.position.x = 0;
      this.position.y = -50;
      
    }

  }

  display4() {
    
    noStroke();
    fill(255,255,255,70);
    let w = random(this.a,this.b);
    let h = random(this.a,this.b);
    rectMode(CENTER);
    push();
    translate(this.position.x+250,this.position.y-160);
    rect(100,0,w,h);
    rect(200,40,w,h);
    rect(210,-50,w,h);
    
    pop();
    if(this.position.y>550){
      this.position.x = 0;
      this.position.y = -50;
      
    }

  }
// Method to update location
  update() {
     
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    this.acceleration.mult(0);
    
    print(this.position);



  }
  


  
  
}