var rectLocationX = 650;
var rectLocationY = 40;
var rectAmount = 13;
var rect_length = 80;
var rect_width = 30;
var wordLocationX = 662;
var wordLocationY = 31;
var canvas;
var ctx;
var move = 0; // best = 165
var state = 0;
var timer;
var timer_delta = 0.1;
var trangle_delta = 1;
const READY = 0;
const UP = 1;
const DOWN = 2;
const STOP = 3;
const NEXT = 4;
const BEST = 165;
const MIN = 326;
const MAX = 331;



var firstTrangle = 0;
var secondTrangle = 0;


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


  switch(state){
  	case READY:
  		drawTrangle(getMove(), '#642100');
  	break;
  	case UP:
  		drawTrangle(getMove(), '#642100');
  	break;
  	case DOWN:
  		drawTrangle(firstTrangle, '#0000C6');
  		drawTrangle(getMove(), '#642100');
  	break;
  	case STOP:
  		drawTrangle(firstTrangle, '#0000C6');
  		drawTrangle(secondTrangle, '#642100');
	  	drawText(Math.abs(firstTrangle).toString(), 20, 20 ,20, 'Comic Sans MS', "black");
	  	drawText(secondTrangle.toString(), 20, 80 ,20, 'Comic Sans MS', "black");
	    drawText(judge(Math.abs(firstTrangle), secondTrangle), 20, 120 ,20, 'Comic Sans MS', "black");
	  	
  	break;
  	case NEXT:
  		drawTrangle(getMove(), '#642100');
  	break;
  	default:

  	break;
  }

  


  drawText('Caution', wordLocationX, wordLocationY + rect_width, 15, 'Comic Sans MS', "white");
  drawText('Caution', wordLocationX, wordLocationY + rect_width * 13 , 15,'Comic Sans MS', "white");
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


function drawText(text,centerX,centerY,fontsize,fontface,fontcolor){
  ctx.save();
  ctx.font=fontsize+'px '+fontface;
  ctx.fillStyle = fontcolor;
  ctx.fillText(text,centerX,centerY);
  ctx.restore();
}

// Trangle
function drawTrangle(move, color){
  
  const trangleX = rectLocationX - 5;
  const trangleY = rectLocationY + (rect_width * 6) + (rect_width / 2);

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(trangleX, trangleY + move);
  ctx.lineTo(trangleX - 15, trangleY - 10 + move);
  ctx.lineTo(trangleX - 15, trangleY + 10 + move);
  ctx.fill();
}



function setMove(newMove){
	move = newMove;
}

function getMove(){
	return move;
}

function mouseDownHandler(event){

	switch(state){
  	case READY:
  		state = UP;
    	timer = setInterval(controlTrangleUp, timer_delta);
  	break;
  	case UP:
  		state = DOWN;
    	firstTrangle = move;
    	clearInterval(timer);
    	timer = setInterval(controlTrangleDown, timer_delta);
  	break;
  	case DOWN:
  		clearInterval(timer);
		secondTrangle = move;
		state = STOP;
		draw();
  	break;
  	case STOP:
		setMove(0);
		draw();
		state = READY;
  	break;
  	case NEXT:
  	
  	break;
  	default:

  	break;
  }
}

function controlTrangleUp(){
	if(move > -195){
		setMove(move - trangle_delta); 
		draw();
	}else{
		clearInterval(timer);
	}
}

function controlTrangleDown(){
	if(move < 195){
		setMove(move + trangle_delta); 
		draw();
	}else{
		clearInterval(timer);
	}
}

function judge(first, second){
	if(first > BEST || second > BEST){
		return "失敗";
	}else{
		if( (first+second) > MIN  &&  (first+second) < MAX){
			return "完美";
		}else{
			return "失敗";
		}
	}
	
}
