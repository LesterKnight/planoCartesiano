var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var canvasW = 600;
var canvasH = 600;
centerH = canvasHeight/2;
centerW = canvasWidth/2;

function Cube(size,cubex,cubey,cubez,color) {
	this.size = size;
	this.cubex = cubex;
	this.cubey = cubey;
	this.cubez = cubez;
	this.color = color;


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


		ctx.moveTo(this.base0[0], this.base0[1]);
		ctx.lineTo(this.base1[0], this.base1[1]);
		ctx.lineTo(this.base3[0], this.base3[1]);
		ctx.lineTo(this.base2[0], this.base2[1]);
		ctx.lineTo(this.base0[0], this.base0[1]);
		ctx.stroke();

		ctx.moveTo(this.top0[0], this.top0[1]);
		ctx.lineTo(this.top1[0], this.top1[1]);
		ctx.lineTo(this.top3[0], this.top3[1]);
		ctx.lineTo(this.top2[0], this.top2[1]);
		ctx.lineTo(this.top0[0], this.top0[1]);
		ctx.stroke();

		ctx.moveTo(this.base0[0], this.base0[1]);
		ctx.lineTo(this.top0[0], this.top0[1]);
		ctx.stroke();
		ctx.moveTo(this.base1[0], this.base1[1]);
		ctx.lineTo(this.top1[0], this.top1[1]);
		ctx.stroke();

		ctx.moveTo(this.base2[0], this.base2[1]);
		ctx.lineTo(this.top2[0], this.top2[1]);
		ctx.stroke();
		ctx.moveTo(this.base3[0], this.base3[1]);
		ctx.lineTo(this.top3[0], this.top3[1]);
		ctx.stroke();
	}
}

















function turnAnti(angle,x,y){
		var rotationMatrix = [Math.cos(angle * Math.PI / 180.0),
				      Math.sin(angle * Math.PI / 180.0),
				      -1*Math.sin(angle * Math.PI / 180.0),
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

function turn(angle,x,y){
		var rotationMatrix = [Math.cos(angle * Math.PI / 180.0),
				      -1*Math.sin(angle * Math.PI / 180.0),
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











































function cube_down(cube){

	var fakeCube = cube;

//BASE 0 e 1 NÃO ROTACIONA
	fakeCube.base0 = [cube.base0[0]-cube.cubex, cube.base0[1]-cube.cubey];
	fakeCube.base1 = [cube.base1[0]-cube.cubex, cube.base1[1]-cube.cubey];
//PUXA O VETOR PARA A COORDENADA X0 PARA CALCULAR SUA ROTAÇÃO
	fakeCube.top0 = [cube.top0[0]-cube.cubex, cube.top0[1]-cube.cubey];
	fakeCube.top1 = [cube.top1[0]-cube.cubex*2, cube.top1[1]-cube.cubey];
//NAO ABSOLUTO
	nov = cube.cubey-(cube.cubey/10);
	fakeCube.top2 = [cube.top2[0]-cube.cubex*1.5, cube.top2[1]-nov];//SUBTRAIR NO EIXO Y É SOMAR
	fakeCube.top3 = [cube.top3[0]-cube.cubex*2.5, cube.top3[1]-nov];


	fakeCube.base2 = [cube.base2[0]-cube.cubex, cube.base2[1]];



	fakeCube.base3 = [cube.base3[0], cube.base3[1]];




//TOP 0 ROTACIONADO COM SUCESSO
	res = turnAnti(135,fakeCube.top0[0],fakeCube.top0[1]);
	fakeCube.top0[0] = res[0];
	fakeCube.top0[1] = res[1];


//TOP 1 ROTACIONADO COM SUCESSO
	res = turnAnti(135,fakeCube.top1[0],fakeCube.top1[1]);
	fakeCube.top1[0] = res[0];
	fakeCube.top1[1] = res[1];



//TOP 2 ROTACIONADO COM SUCESSO
	res = turnAnti(90,fakeCube.top2[0],fakeCube.top2[1]);//girar 1/4 pra esquerda
	fakeCube.top2[0] = res[0];
	fakeCube.top2[1] = res[1];

//TOP 3 ROTACIONADO COM SUCESSO
	res = turnAnti(90,fakeCube.top3[0],fakeCube.top3[1]);
	fakeCube.top3[0] = res[0];
	fakeCube.top3[1] = res[1];
/*
//BASE2 ROTACIONADO COM SUCESSO
	res = turn(rot,fakeCube.base2[0],fakeCube.base2[1]);
	fakeCube.top1[0] = res[0];
	fakeCube.top1[1] = res[1];

//BASE 3 ROTACIONADO COM SUCESSO
	res = turn(rot,fakeCube.base3[0],fakeCube.base3[1]);
	fakeCube.top1[0] = res[0];
	fakeCube.top1[1] = res[1];

*/

	ctx.fillStyle="red";

	fakeCube.base0 = [cube.base0[0]+cube.cubex, cube.base0[1]+cube.cubey];
	fakeCube.base1 = [cube.base1[0]+cube.cubex, cube.base1[1]+cube.cubey];

	fakeCube.top0 = [cube.top0[0]+cube.cubex, cube.top0[1]+cube.cubey];
	fakeCube.top1 = [cube.top1[0]+cube.cubex*2, cube.top1[1]+cube.cubey];

	fakeCube.top2 = [cube.top2[0]+(cube.cubex*1.5), cube.top2[1]+nov];//SUBTRAIR NO Y É SOMAR
	fakeCube.top3 = [cube.top3[0]+cube.cubex*2.5, cube.top3[1]+nov];

	fakeCube.base2 = [cube.base2[0], cube.base2[1]];
	fakeCube.base3 = [cube.base3[0], cube.base3[1]];




	ctx.fillRect(fakeCube.top0[0],fakeCube.top0[1]-fakeCube.size,200,1);
	ctx.fillRect(fakeCube.top2[0]+fakeCube.size/2,fakeCube.top0[1]-fakeCube.size*1.5,2,2);
	ctx.fillRect(fakeCube.top2[0]+fakeCube.size/2,fakeCube.top0[1]-fakeCube.size*0.5,2,2);
	fakeCube.draw();
}

cube = new Cube(100,100,300,0,"blue");
cube_down(cube);
cubeb = new Cube(100,100,300,0,"green");


