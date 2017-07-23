var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var canvasW = 600;
var canvasH = 600;
centerH = canvasHeight/2;
centerW = canvasWidth/2;

function Cube(size,cubex,cubey,cubez,color) {
	this.size = size;
	this.base0 = [  cubex,
			cubey,
			cubez
		     ];

	this.base1 = [  cubex+size,
			cubey,
			cubez
		     ];

	this.top0 = [  cubex,
			this.base0[1]-size,
			cubez
		     ];

	this.top1 = [  cubex+size,
			this.base1[1]-size,
			cubez
		     ];


	this.base2 = [  cubex+(size/2),
			cubey-(size/2),
			cubez
		     ];

	this.base3 = [  this.base2[0]+size,
			cubey-(size/2),
			cubez
		     ];

	this.top2 = [  cubex+(size/2),
			this.base2[1]-size,
			cubez
		     ];

	this.top3 = [  this.top2[0]+size,
			this.base3[1]-size,
			cubez
		     ];

	this.draw = function(){
			/*
		2	3

		0	1	
		*/
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(cube.base0[0], cube.base0[1]);
		ctx.lineTo(cube.base1[0], cube.base1[1]);
		ctx.lineTo(cube.base3[0], cube.base3[1]);
		ctx.lineTo(cube.base2[0], cube.base2[1]);
		ctx.lineTo(cube.base0[0], cube.base0[1]);
		ctx.stroke();

		ctx.moveTo(cube.top0[0], cube.top0[1]);
		ctx.lineTo(cube.top1[0], cube.top1[1]);
		ctx.lineTo(cube.top3[0], cube.top3[1]);
		ctx.lineTo(cube.top2[0], cube.top2[1]);
		ctx.lineTo(cube.top0[0], cube.top0[1]);
		ctx.stroke();

		ctx.moveTo(cube.base0[0], cube.base0[1]);
		ctx.lineTo(cube.top0[0], cube.top0[1]);
		ctx.stroke();
		ctx.moveTo(cube.base1[0], cube.base1[1]);
		ctx.lineTo(cube.top1[0], cube.top1[1]);
		ctx.stroke();
		ctx.moveTo(cube.base2[0], cube.base2[1]);
		ctx.lineTo(cube.top2[0], cube.top2[1]);
		ctx.stroke();
		ctx.moveTo(cube.base3[0], cube.base3[1]);
		ctx.lineTo(cube.top3[0], cube.top3[1]);
		ctx.stroke();
	}
}
cube = new Cube();

function turn(angle,x,y){
		var rotationMatrix = [Math.cos(angle * Math.PI / 180.0),
				      -1*(Math.sin(angle * Math.PI / 180.0)),
				      Math.sin(angle * Math.PI / 180.0),
				      Math.cos(angle * Math.PI / 180.0)];
		//MATRIZ RESULTANTE
		var result = [0,0,0,0];
		var x_ = [0,0];
		result[0] = rotationMatrix[0]*x;
		result[1] = rotationMatrix[1]*y;
		x_[0] = result[0]+result[1];//coord x
		result[2] = rotationMatrix[2]*x;
		result[3] = rotationMatrix[3]*y;
		x_[1] = result[2]+result[3];//coord y
		return x_;
}


function loop(){
		xInicial = 200;  //X A PARTIR DO PONTO INICIAL
		yInicial = -150; //Y A PARTIR DO PONTO INICIAL
		i=0;
		for(i=0;i<2;i++){
			var coord = turn(i,xInicial,yInicial);
			ctx.strokeStyle = "purple";
	    		ctx.beginPath();
			ctx.moveTo(centerW,centerH);//PONTO INICIAL X E Y
			ctx.lineTo(centerW + coord[0],centerH + coord[1]);
			ctx.stroke();
		}
}

