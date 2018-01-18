function Firework() {
	this.hu=random(255);
	this.firework = new Particle(random(width),random(height),this.hu,true);
	this.exploded=false;
	this.particles=[];
	this.done= function(){
		if(this.particles.length==0 && this.exploded){
			return true;
	}else{
		return false;
		}
	}
	this.update = function() {
		if(!this.exploded){
		this.firework.applyForce(gravity);
		this.firework.update();
			if(this.firework.vel.y>=0){
				this.exploded=true;
				this.explode();
			}
		}
		for(let i =this.particles.length-1; i>=0;i--){
			this.particles[i].applyForce(gravity);
			this.particles[i].update();
			if(this.particles[i].done()){
				this.particles.splice(i,1);
			}
		}
	    }
	this.explode=function () {
		for(let i =0; i<100;i++){
			var part=new Particle(this.firework.pos.x,this.firework.pos.y,this.hu,false);
			this.particles.push(part);
			
		}
	}
	this.show= function(){
		if(!this.exploded){
		this.firework.show();
		}
		for(let i =0; i<this.particles.length;i++){
			this.particles[i].show();
		}
	}
	
	
}