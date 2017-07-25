var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var canvasW = 600;
var canvasH = 600;
centerH = canvasHeight/2;
centerW = canvasWidth/2;

function Cube(size,cubex,cubey) {
	this.size = size;
	this.halfSize = size/2;
	this.quartSize = size/4
	this.cubex = cubex;
	this.cubey = cubey;


	//QUADRADO VIRADO PARA BAIXO
	this.base0 = [0, 0];
	this.base1 = [size, 0];
	this.top0 = [0, size*-1];
	this.top1 = [size, size*-1];
	
	this.base2 = [this.halfSize,(this.halfSize)*-1];
	this.base3 = [(this.size+this.halfSize), (this.halfSize)*-1];
	this.top2 = [this.halfSize,(this.size+this.halfSize)*-1];
	this.top3 = [(this.size+this.halfSize), (this.size+this.halfSize)*-1];
	


	this.draw = function(){
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(this.base0[0]+cubex, this.base0[1]+cubey);
		ctx.lineTo(this.base1[0]+cubex, this.base1[1]+cubey);
		ctx.lineTo(this.top1[0]+cubex, this.top1[1]+cubey);
		ctx.lineTo(this.top0[0]+cubex, this.top0[1]+cubey);
		ctx.lineTo(this.base0[0]+cubex, this.base0[1]+cubey);
		ctx.stroke();

		ctx.strokeStyle = "blue";
		ctx.beginPath();
		ctx.moveTo(this.base2[0]+cubex, this.base2[1]+cubey);
		ctx.lineTo(this.base3[0]+cubex, this.base3[1]+cubey);
		ctx.lineTo(this.top3[0]+cubex, this.top3[1]+cubey);
		ctx.lineTo(this.top2[0]+cubex, this.top2[1]+cubey);
		ctx.lineTo(this.base2[0]+cubex, this.base2[1]+cubey);
		ctx.stroke();


		ctx.strokeStyle = "purple";
		ctx.beginPath();

		ctx.moveTo(this.base0[0]+cubex, this.base0[1]+cubey);
		ctx.lineTo(this.base2[0]+cubex, this.base2[1]+cubey);
		ctx.stroke();

		ctx.moveTo(this.base1[0]+cubex, this.base1[1]+cubey);
		ctx.lineTo(this.base3[0]+cubex, this.base3[1]+cubey);
		ctx.stroke();

		ctx.moveTo(this.top0[0]+cubex, this.top0[1]+cubey);
		ctx.lineTo(this.top2[0]+cubex, this.top2[1]+cubey);
		ctx.stroke();

		ctx.moveTo(this.top1[0]+cubex, this.top1[1]+cubey);
		ctx.lineTo(this.top3[0]+cubex, this.top3[1]+cubey);
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




/*

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






	//fakeCube.base3 = [cube.base3[0], cube.base3[1]];




//TOP 0 ROTACIONADO COM SUCESSO
	res = turnAnti(135,fakeCube.top0[0],fakeCube.top0[1]);
	fakeCube.top0[0] = res[0];
	fakeCube.top0[1] = res[1];


//TOP 1 ROTACIONADO COM SUCESSO
	res = turnAnti(135,fakeCube.top1[0],fakeCube.top1[1]);
	fakeCube.top1[0] = res[0];
	fakeCube.top1[1] = res[1];



//TOP 2 ROTACIONADO COM SUCESSO
	ctx.fillRect(fakeCube.base2[0],fakeCube.base2[1],5,5);
	res = turnAnti(90,fakeCube.top2[0],fakeCube.top2[1]);//girar 1/4 pra esquerda
	fakeCube.top2[0] = res[0];
	fakeCube.top2[1] = res[1];

//TOP 3 ROTACIONADO COM SUCESSO
	res = turnAnti(90,fakeCube.top3[0],fakeCube.top3[1]);
	fakeCube.top3[0] = res[0];
	fakeCube.top3[1] = res[1];
/*
//BASE2 ROTACIONADO COM SUCESSO
	res = turn(90,fakeCube.base2[0],fakeCube.base2[1]);
	fakeCube.base2[0] = res[0];
	fakeCube.base2[1] = res[1];

//BASE 3 ROTACIONADO COM SUCESSO
	res = turn(rot,fakeCube.base3[0],fakeCube.base3[1]);
	fakeCube.top1[0] = res[0];
	fakeCube.top1[1] = res[1];

*/














cube = new Cube(100,0,0);
fakeCube = new Cube(100,250,300);
//TOP 0 ROTACIONADO
	res = turnAnti(135,fakeCube.top0[0],fakeCube.top0[1]);
	fakeCube.top0[0] = res[0];
	fakeCube.top0[1] = res[1];

//TOP 1 ROTACIONADO
	res = turnAnti(135,fakeCube.top1[0]-fakeCube.size, fakeCube.top1[1]);
	fakeCube.top1[0] = res[0]+fakeCube.size;
	fakeCube.top1[1] = res[1];

//TOP 2 ROTACIONADO
/*	res = turnAnti(90,fakeCube.top2[0]-fakeCube.halfSize, fakeCube.top2[1]+35);
	console.log(res);

	fakeCube.top2[0] = res[0]+fakeCube.halfSize;
	fakeCube.top2[1] = res[1]-35;
*/



ctx.fillRect(fakeCube.top0[0]+fakeCube.cubex,fakeCube.top0[0]+fakeCube.cubey,300,2);

//cube.draw();
fakeCube.draw();










