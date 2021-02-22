class Paper

{
	constructor(x,y,r)
	{
		var options={
			restitution:0.1			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y, r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			ellipseMode(RADIUS);
			//strokeWeight(4);
			fill("white")
			ellipse(0,0,this.r);
			pop()
			
	}

}