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
	
	//calcula 1 no EIXO Z
	//a²=b²+c²
	this.eixo_x = Math.pow(1, 2);//b²
	this.eixo_y = Math.pow(1, 2);//c²
	this.eixo_z = Math.sqrt(this.eixo_x + this.eixo_y);//a² é a diagonal inteira do quadrado, dividindo ao meio temos a relação de Z com A e B
	this.eixo_z /= 2;
	this.diferenca = this.eixo_y - this.eixo_z;
	
	//QUADRADO VIRADO PARA BAIXO
	this.base0 = [0, 0, 0];
	this.base1 = [size, 0, 0];
	this.top0 = [0, size*-1, 0];
	this.top1 = [size, size*-1, 0];
	//PARTE SUPERIOR
	this.base2 = [this.halfSize,(this.halfSize)*-1, size*this.eixo_z];
	this.base3 = [(this.size+this.halfSize), (this.halfSize)*-1, size*this.eixo_z];
	this.top2 = [this.halfSize,(this.size+this.halfSize)*-1, size*this.eixo_z];
	this.top3 = [(this.size+this.halfSize), (this.size+this.halfSize)*-1, size*this.eixo_z];
	


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
	
	
	
	
	this.printMedidas = function(){
		console.log("base0:");
		console.log(this.base0);
		console.log("base1:");
		console.log(this.base1);
		console.log("top0:");
		console.log(this.top0);
		console.log("top1:");
		console.log(this.top1);
		console.log("base2:");
		console.log(this.base2);
		console.log("base3:");
		console.log(this.base3);
		console.log("top2:");
		console.log(this.top2);
		console.log("top3:");
		console.log(this.top3);
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





cube = new Cube(100,300,300);
fakeCube = new Cube(100,300,300);
fakeCube2 = new Cube(100,250,350);
/*
//TOP 0 ROTACIONADO
	diferenca = (fakeCube.diferenca*fakeCube.size)/135;
	
	for (i=0;i<135;i++){
		res = turnAnti(i,cube.top0[0],cube.top0[1]+(diferenca*i));
		fakeCube.top0[0] = res[0];
		fakeCube.top0[1] = res[1];
		ctx.beginPath();
		ctx.moveTo(fakeCube.base0[0]+fakeCube.cubex, fakeCube.base0[1]+fakeCube.cubey);
		ctx.lineTo(res[0]+fakeCube.cubex, res[1]+fakeCube.cubey);
		ctx.stroke();
	}
//TOP 1 ROTACIONADO	
	for (i=0;i<135;i++){
		res = turnAnti(i,cube.top1[0]-cube.size,cube.top1[1]+(diferenca*i));
		fakeCube.top1[0] = res[0]+cube.size;
		fakeCube.top1[1] = res[1];
		
		ctx.beginPath();
		ctx.moveTo(fakeCube.base1[0]+fakeCube.cubex, fakeCube.base1[1]+fakeCube.cubey);
		ctx.lineTo(res[0]+fakeCube.cubex+fakeCube.size, res[1]+fakeCube.cubey);
		ctx.stroke();
	}
//TOP 2 ROTACIONADO
for (i=0;i<90;i++){

	res = turnAnti(i,cube.top2[0]-cube.halfSize, cube.top2[1]+cube.halfSize);
	fakeCube.top2[0] = res[0]+cube.halfSize;
	fakeCube.top2[1] = res[1]-cube.halfSize;
	
	ctx.beginPath();
	ctx.moveTo(fakeCube.base2[0]+fakeCube.cubex, fakeCube.base2[1]+fakeCube.cubey);
	ctx.lineTo(res[0]+cube.halfSize+cube.cubex,res[1]-cube.halfSize+cube.cubey);
	ctx.stroke();
}
//TOP 3 ROTACIONADO
for (i=0;i<90;i++){
res = turnAnti(i,cube.top3[0]-cube.halfSize-cube.size, cube.top3[1]+cube.halfSize);
	fakeCube.top2[0] = res[0]+cube.halfSize+cube.size;
	fakeCube.top2[1] = res[1]-cube.halfSize;
	
	ctx.beginPath();
	ctx.moveTo(fakeCube.base3[0]+fakeCube.cubex, fakeCube.base3[1]+fakeCube.cubey);
	ctx.lineTo(res[0]+cube.halfSize+cube.size+cube.cubex,res[1]-cube.halfSize+cube.cubey);
	ctx.stroke();
}



*/
//BASE3 ROTACIONADO
	diferenca = (fakeCube.diferenca*fakeCube.size)/45;

	for (i=0;i<359;i++){
		res = turnAnti(i,cube.base2[0],cube.base2[1]-(diferenca*i));//colocar o diferencial no vetor ou no resultado???
		fakeCube.base2[0] = res[0];
		fakeCube.base2[1] = res[1];
		ctx.fillRect(res[0]+cube.cubex,res[1]+cube.cubey,2,2);

	}


fakeCube.draw();
cube.draw();
//fakeCube.printMedidas();










