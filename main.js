function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(350,190);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
   image(video,22,23,540,380);
   fill(254,0,0);
   stroke(254,0,0);
   circle(50,50,90);
   circle(590,50,90);
   circle(590,430,90);
   circle(50,430,90);
   fill(0, 136, 0)
   stroke(0, 136, 0)
   rect(89, 23, 462, 55);
   rect(89, 402, 462, 55);
   rect(23, 88, 55, 304);
   rect(563, 88, 55, 304);
}
function take_snapshot(){
    save("Pic.png")
}