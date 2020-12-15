//set canvas id to variable
var canvas = document.getElementById("draw");

//get canvas 2D context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

//resize canvas when window is resized 
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

//last known location of mouse
var pos = {x:0, y:0};

//find new position when mouse clicked
function SetPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

//knows to resize the window whenever user changes window size
window.addEventListener("resize", resize);

//invokes draw function when user is on canvas
document.addEventListener("mousemove", draw);
//invokes setPosition function when function is set
document.addEventListener("mousedown", SetPosition);
//invokes SetPosition when mouse is hovered over Canvas
document.addEventListener("mouseenter", SetPosition );

//draws out our lines
function draw(e) {
if (e.buttons !==1) return; //if mouse is not clicked, do not go further

var color = document.getElementById("hex").value;

ctx.beginPath(); // begins the drawing path

//properties of the line
ctx.linewidth = 50;
ctx.linecap = "round";
ctx.strokeStyle = color;

ctx.moveTo(pos.x, pos.y); // from position
SetPosition(e);
ctx.lineTo(pos.x, pos.y); //moves the line to this new location?

ctx.stroke(); //draws the line!

}
