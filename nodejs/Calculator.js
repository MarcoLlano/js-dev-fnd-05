//Class calculator
var Calculator = function() {
	
};

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
	if (b == 0) {
		throw 'divide by 0 is error';
	}
	return a / b;
}

module.exports = Calculator;

/*//Clasic mode
var Calculator = function() {
	this.add = function(a, b){
		return a + b;
	};
};*/
