var cabaña_img,background_img;
var Button,button;

function preload(){
cabaña_img = loadImage("./imagenes/Cabaña.jpg");
background_img = loadImage("./imagenes/background.jpg");
}

function setup(){
  createCanvas(900,700);
  Button = createButton('click me');
  Button.position(800, 660);
  Button.mousePressed(change);

}

function change() {
  
  image(background_img,0,0,width,height);

  button = createButton('Volver a dormir');
  Button.position(100, 100);
  Button.mousePressed(change);

  button = createButton('Ir a investigar');
  Button.position(200, 200);
  Button.mousePressed(change);

}

function draw(){
background(189);
image(cabaña_img,0,0,width,height);

fill("#F0F0F0");
textSize(20);
text(`Tu y tus amigos rentaron una cabaña en el bosque, donde van a tomarse un descanso 
despues de estar jugando fueron todos a sus habitaciones para dormir, pero tu despertaste 
por un ruido`,10,600);
//textAlign(CENTER, CENTER);

}