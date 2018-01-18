let fireworks=[];
let gravity;
function setup() {
	createCanvas(innerWidth,innerHeight);
	stroke(255);
	gravity = createVector(0,0.2);
	
	
}
function draw() {
	background(0,30);
	pop();
	textAlign(CENTER);
	textSize(18);
	stroke(255);
	fill(255 )
	text('Coded by Mahsum',width/2,height/2)
	push();
	if(random()<0.09){
		fireworks.push(new Firework());
	}
	for(let i= fireworks.length-1; i>=0;i--){
		fireworks[i].show();
		fireworks[i].update();
		if(fireworks[i].done()){
			fireworks.splice(i,1);
		}
		
	}
	
	
	
}