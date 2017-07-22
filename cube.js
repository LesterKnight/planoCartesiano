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