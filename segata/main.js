var rectLocationX = 650;
var rectLocationY = 40;
var rectAmount = 13;
var rect_length = 80;
var rect_width = 30;
var wordLocationX = 662;
var wordLocationY = 31;
var ctx;

function draw() {
  ctx = document.getElementById('canvas').getContext('2d');

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


  // Trangle
  ctx.beginPath();
  ctx.moveTo(rectLocationX - 5, rectLocationY + rect_width * 6 + (rect_width / 2) );
  ctx.lineTo(rectLocationX - 20, rectLocationY + rect_width * 6 + (rect_width / 2) - 10);
  ctx.lineTo(rectLocationX - 20, rectLocationY + rect_width * 6 + (rect_width / 2) + 10);
  ctx.fill();


  drawText('Caution', wordLocationX, wordLocationY + rect_width, 15, 'Comic Sans MS');
  drawText('Caution', wordLocationX, wordLocationY + rect_width * 13 , 15,'Comic Sans MS');
 

  
}


function drawText(text,centerX,centerY,fontsize,fontface){
  ctx.save();
  ctx.font=fontsize+'px '+fontface;
  ctx.fillStyle = "white";
  ctx.fillText(text,centerX,centerY);
  ctx.restore();
}
