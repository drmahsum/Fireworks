function Particle(x,y,hu,firework) {
	this.hu=hu;
	this.pos = createVector(x,y);
	this.firework=firework;
	this.lifespan=255;
	if(this.firework){
	this.vel = createVector(0,random(-5,-10));}
	else{
		this.vel=p5.Vector.random2D();
		this.vel.mult(random(10,20));
	}
	this.acc = createVector(0,0);
	this.applyForce= function(f){
		this.acc.add(f);
		
	}
	this.update = function() {
		if(!this.firework){
			
			this.vel.mult(0.9);
			this.lifespan-=6;
		}
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}
	this.done = function() {
		if(this.lifespan<0){
			return true;
		}else {
			return false;
		}
	}
	this.show=function () {
		//colorMode(HSB)
		if(!this.firework){
			strokeWeight(2)
			stroke(this.hu,random(255),random(255),this.lifespan);
		}
		else{
			strokeWeight(4)
			stroke(this.hu,random(255),random(255))
		}
		point(this.pos.x,this.pos.y);
	}
}