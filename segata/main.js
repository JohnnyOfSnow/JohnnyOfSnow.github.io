var rectLocationX = 650;
var rectLocationY = 40;
var rectAmount = 13;
var rect_length = 80;
var rect_width = 30;
var wordLocationX = 662;
var wordLocationY = 31;
var canvas;
var ctx;
var move = 0;
var state = 0;
var timer;

window.onload = function() {
    init();
    
}

function init() {
	canvas = document.getElementById('canvas');
  	
  	canvas.addEventListener('mousedown', mouseDownHandler, false);
  	draw();
}


function draw() {
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawRectBar();

  drawTrangle();

  drawText('Caution', wordLocationX, wordLocationY + rect_width, 15, 'Comic Sans MS');
  drawText('Caution', wordLocationX, wordLocationY + rect_width * 13 , 15,'Comic Sans MS');
}



function drawRectBar(){
  for (var i=0;i<rectAmount;i++){
    for (var j=0;j<1;j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255-18*j) + ',' +
                       Math.floor(18*i) + ',0)';
      ctx.fillRect(j * rect_length + rectLocationX, i * rect_width + rectLocationY, rect_length, rect_width);
    }
  }

  ctx.fillStyle = '#642100';
  ctx.fillRect(rectLocationX, rectLocationY, rect_length, rect_width);
  ctx.fillRect(rectLocationX, rectLocationY + rect_width*12, rect_length, rect_width);
}


function drawText(text,centerX,centerY,fontsize,fontface){
  ctx.save();
  ctx.font=fontsize+'px '+fontface;
  ctx.fillStyle = "white";
  ctx.fillText(text,centerX,centerY);
  ctx.restore();
}

// Trangle
function drawTrangle(){
  

  const trangleX = rectLocationX - 5;
  const trangleY = rectLocationY + (rect_width * 6) + (rect_width / 2);

  ctx.beginPath();
  ctx.moveTo(trangleX, trangleY + getMove());
  ctx.lineTo(trangleX - 15, trangleY - 10 + getMove());
  ctx.lineTo(trangleX - 15, trangleY + 10 + getMove());
  ctx.fill();
}

function setMove(newMove){
	move = newMove;
}

function getMove(){
	return move;
}

function mouseDownHandler(event){
    if(state == 0){
    	state = 1;
    	timer = setInterval(controlTrangle, 0.1);
	}else{
		// Stop the trangle (every round in the second click)
		clearInterval(timer);
		draw();
	}
}

function controlTrangle(){
	if(move > -200){
		setMove(move - 1); 
		draw();
	}else{
		clearInterval(timer);
	}
}
