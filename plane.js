var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var canvasWidth = 600;
var canvasHeight = 600;
centerHeight = canvasHeight/2;
centerWidth = canvasWidth/2;

function drawPlano(){

//X AXIS
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(0, centerHeight);
    ctx.lineTo(canvasWidth, centerHeight);
    ctx.stroke();

    ctx.font = "20px Verdana";
    ctx.fillText("Eixo X",10,(centerHeight)-5);


//Y AXIS
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(centerWidth, 0);
    ctx.lineTo(centerWidth, canvasHeight);
    ctx.stroke();

    ctx.font = "20px Verdana";
    ctx.fillText("Eixo Y",centerWidth +5,15);

//Z AXIS

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, 0);
    ctx.stroke();

    ctx.font = "20px Verdana";
    ctx.fillText("Eixo Z",20,(canvasHeight)-5);
}
