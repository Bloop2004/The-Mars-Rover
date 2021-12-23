canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_height = 100;
rover_width = 100;
rover_X = 10;
rover_Y = 10;
images = ["1000ML0044630260405123E01_DXXX.jpg","1000ML0044631300305227C00_DXXX.jpg","1000MR0044631230503683E03_DXXX.jpg","FLB_486265257EDR_F0481570FHAZ00323M_.jpg"];
random_number = Math.floor(Math.random()*4);
backgroundImg = images[random_number];
rover_img = "rover.png";



function add(){
    background_Img = new Image();
    background_Img.onload = upload_background;
    background_Img.src = backgroundImg;
    roverImg = new Image();
    roverImg.onload = upload_rover;
    roverImg.src = rover_img;
}
function upload_background(){
    ctx.drawImage(background_Img,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(roverImg,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown", keydown);
function keydown(e){
    var key_store = e.keyCode;
    if(key_store == '37'){
        left();
    }
    if(key_store == '38'){
        up();
    }
    if(key_store == '39'){
        right();
    }
    if(key_store == '40'){
        down();

    }
}

function up(){
    if(rover_Y >= 0){
        rover_Y = rover_Y - 10;
        upload_background();
        upload_rover();
    }
}
function down(){
    if(rover_Y <= 400){
        rover_Y = rover_Y + 10;
        upload_background();
        upload_rover();
    }
}
function left(){
    if(rover_X >= 0){
        rover_X = rover_X - 10;
        upload_background();
        upload_rover();
    }
}
function right(){
    if(rover_X <= 700){
        rover_X = rover_X + 10;
        upload_background();
        upload_rover();
    }
}
