//Class calculator
var Calculator = function() {
	
}

Calculator.prototype.add = function(a,b) {
	return a + b;
}

Calculator.prototype.substract = function(a,b) {
	return a - b;
}

Calculator.prototype.product = function(a,b) {
	return a * b;
}

Calculator.prototype.divide = function(a,b) {
	return a / b;
}

module.exports = Calculator;