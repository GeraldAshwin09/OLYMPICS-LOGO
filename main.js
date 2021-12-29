canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(295,300,50,0,2*Math.PI);
ctx.stroke();

canvas=document.getElementById("mycanvas");
ctx1=canvas.getContext("2d");
color="yellow";

ctx1.beginPath();
ctx1.strokeStyle=color;
ctx1.lineWidth=5;
ctx1.arc(350,355,50,0,2*Math.PI);
ctx1.stroke();

canvas=document.getElementById("mycanvas");
ctx2=canvas.getContext("2d");
color="black";

ctx2.beginPath();
ctx2.strokeStyle=color;
ctx2.lineWidth=5;
ctx2.arc(405,300,50,0,2*Math.PI);
ctx2.stroke();

canvas=document.getElementById("mycanvas");
ctx3=canvas.getContext("2d");
color="green";

ctx3.beginPath();
ctx3.strokeStyle=color;
ctx3.lineWidth=5;
ctx3.arc(455,350,50,0,2*Math.PI);
ctx3.stroke();

canvas=document.getElementById("mycanvas");
ctx4=canvas.getContext("2d");
color="red";

ctx4.beginPath();
ctx4.strokeStyle=color;
ctx4.lineWidth=5;
ctx4.arc(520,305,50,0,2*Math.PI);
ctx4.stroke();

function redirect()
{
    window.location= "https://en.wikipedia.org/wiki/Olympic_symbols";
}