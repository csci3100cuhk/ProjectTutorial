var context;
var x = 150;
var y = 150;
var counter = 0;
function paint() {
	context.beginPath();
	context.fillStyle = "#ff0000";
	context.arc(x, y, 15, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
}
function animate() {
	context.clearRect(0, 0, 600, 400);
	counter += 0.1;
	x = 150 + 120 * Math.sin(counter);
	y = 150 + 120 * Math.cos(counter);
	paint();
}
window.onload = function () {
	context = canvas1.getContext('2d');
	setInterval(animate, 200);
}