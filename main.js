canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth="1"
ctx.rect(150, 143, 430, 230);
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth="5"
ctx.arc(250, 210, 50, 0, 2*Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth="5"
ctx.arc(370, 210, 50, 0, 2*Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth="5"
ctx.arc(490, 210, 50, 0, 2*Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth="5"
ctx.arc(310, 260, 50, 0, 2*Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth="5"
ctx.arc(430, 260, 50, 0, 2*Math.PI);
ctx.stroke();