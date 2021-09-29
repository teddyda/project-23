let m = 30;
let r = 80;
let a, a2;
let angle, angle2;
let g = 0.2;
let v = 0;
let v2 = 0;
let x=0, y=0, x2=0, y2=0;
let time = 0;
let first = true;

function setup() {
  createCanvas(400, 400);
  angle = PI / 4;
  angle2 = PI / 4;
}

function left() {

  x22 = r * sin(angle2);
  y2 = r * cos(angle2);

  if (x22 <= 0) {
    x2 = x22;
  } else {
    y2 = r;
  }
}


function right() {
  x1 = r * sin(angle);
  y = r * cos(angle);

  if (x1 >= 0) {
    x = x1;
  } else {
    y = r;
   first = false;
  }
}


function draw() {
  background(220);

  if (first == true) {
    fx = 140;
    fy = 100+r;
    line(140, 100, fx, fy);
    ellipse(fx, fy, m, m);
  }
  
  left();
  right();

  translate(230, 100);
  line(0, 0, x, y);
  ellipse(x, y, m, m);


  translate(-m, 0);
  line(0, 0, 0, r);
  ellipse(0, r, m, m);

  translate(-m, 0);
  line(0, 0, 0, r);
  ellipse(0, r, m, m);

  translate(-m, 0);
  line(0, 0, x2, y2);
  ellipse(x2, y2, m, m);

  a = -g / r * sin(angle);
  v += a;
  angle += v;

  a2 = -g / r * sin(angle2);
  v2 += a2;
  angle2 += v2;

}