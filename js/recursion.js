function recursiveCircles(x, y, radius) {

	var divisor = 2;
	drawCircle(x, y, radius);	
	if (radius > divisor) {
		recursiveCircles(x + radius*divisor, y, radius/divisor);
		recursiveCircles(x - radius*divisor, y, radius/divisor);
		recursiveCircles(x, y + radius*divisor, radius/divisor);
		recursiveCircles(x, y - radius*divisor, radius/divisor);
	}
}


