let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(700,250,70,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// chão
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'gray';
ctx.strokeStyle = 'gray';
ctx.fillRect(0,650,900,300);
ctx.closePath();

// base da casa
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(370,450,150,200)
ctx.closePath();


// a porta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(430,550,30,100)
ctx.closePath();

// janelas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(460,510,40,40)
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(390,510,40,40)
ctx.closePath();



ctx.fillRect()