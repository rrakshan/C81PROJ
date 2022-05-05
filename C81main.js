canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//rectangle
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "black";
ctx.rect(150, 150, 550, 280);
ctx.stroke();

//circle
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(260,260,55,0,2*Math.PI);
ctx.stroke();

//circle
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(400,260,55,0,2*Math.PI);
ctx.stroke();

//circle
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(540,260,55,0,2*Math.PI);
ctx.stroke();

//circle
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(330,320,55,0,2*Math.PI);
ctx.stroke();

//circle
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(470,320,55,0,2*Math.PI);
ctx.stroke();