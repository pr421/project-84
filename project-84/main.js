canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;

marsarry=["race track.jpg"];

random_number = Math.floor(Math.random() * 4);
background_image = marsarry[random_number];

car_image = "png.car.png";
car_x = 10;
car_y = 10;

function add() {
  background_imgTag = new Image();

  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;
  car_imgTag = new Image();
  car_imgTag.onload = uploadrover;
  car_imgTag.src = car_image;
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
  ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == '38') {
    up();
    console.log("up");
  }
  if (keyPressed == '40') {
    down();
    console.log("down");
  }
  if (keyPressed == '37') {
    left();
    console.log("left");
  }
  if (keyPressed == '39') {
    right(); {
      console.log("right");
    }
  }

}
 
function  up(){

  if(rover_y>0){

    rover_y=rover_y-10;

    console.log("When up arrow is pressed,x="+rover_x+", y="+rover_y);

    uploadBackground();
    uploadrover();

  }
}

function  down(){

  if(rover_y<500){

    rover_y=rover_y+10;

    console.log("When up arrow is pressed,x="+rover_x+", y="+rover_y);

    uploadBackground();
    uploadrover();
    
  }
}

function  left(){

  if(rover_x>0){

    rover_x=rover_x-10;

    console.log("When up arrow is pressed,x="+rover_x+", y="+rover_y);

    uploadBackground();
    uploadrover();
    
  }
}

function  right(){

  if(rover_x<700){

    rover_x=rover_x+10;

    console.log("When up arrow is pressed,x="+rover_x+", y="+rover_y);

    uploadBackground();
    uploadrover();
    
  }
}