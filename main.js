function preload(){

}
function setup(){
canvas=createCanvas(640,480)
canvas.position(110,250)
video=createCapture(VIDEO)
video.hide()

}
function draw(){
image(video,30,100,500,300)

fill("#ff0000")
stroke("#ff0000")
circle(50,50,50)
circle(50,435,50)
circle(600,435,50)
circle(600,50,50)
fill("#00ff00")
stroke("#00ff00")
rect(65,30,510,50)
rect(65,415,510,50)
rect(30,60,50,380)
rect(570,60,50,380)
}
function filterShape(){
filter_shape=document.getElementById("shape_name").value
}
function take_snapshot(){
save("AAAAAAAAAA.png")
}