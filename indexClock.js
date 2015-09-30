var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'white';
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = 'white';

function degToRad(degree) {
  var factor = Math.PI/180;
  return degree * factor;
}

function renderTime() {
  
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newMinutes = minutes + (seconds/60);
  var newSeconds = seconds + (milliseconds/1000);

  
  
  // Background
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,1000,2000);
  
  // Hours
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*15)- 90));
  ctx.stroke();
  
  
  // Minutes
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad((newMinutes*6)- 90));
  ctx.stroke();
  
  
  // Seconds
  ctx.beginPath();
  ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds*6)- 90));
  ctx.stroke();
  
  
  // Milliseconds
  ctx.beginPath();
  ctx.arc(250, 250, 110, degToRad(270), degToRad((milliseconds*0.725)- 90));
  ctx.stroke();
  
  
  // Date
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.shadowBlur = 30;
  ctx.shadowColor = 'white';
  ctx.fillText(today, 175, 250); 
  // Time
  ctx.font = '15px Arial';
  ctx.fillStyle = '';
  ctx.fillText(time, 175, 280);
  
  
}
setInterval(renderTime, 0.005);