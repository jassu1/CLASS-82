canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

var mouseevent="empty";
var last_position_of_x, last_position_of_y;
var colour="black";
var width_of_line=1;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e){
    colour=document.getElementById("colour").value;
width_of_line=document.getElementById("widthofline").value;

mouseevent="mousedown";

}
canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= colour;
        ctx.lineWidth=width_of_line;

        console.log("last position of x and y coordinates are = ");
        console.log("x= "+last_position_of_x +"y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates are = ");
        console.log("x= "+current_position_of_mouse_x +"y= "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

    }

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
    }
     function cleararea(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
     }