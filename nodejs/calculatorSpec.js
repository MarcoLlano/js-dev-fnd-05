//calculatorSpec, this is the unit test file using jasmine.
var Calculator = require('./calculator');
describe('Calculator', function() {
	it('should be able to add two numbers', function() {
		//Test steps
		var calculator = new Calculator();
		var expRes = 3;
		var actRes = calculator.add(1,2);
		expect(actRes).toBe(expRes);
	});
	
	it('should be able to substract two numbers', function() {
		//Test steps
		var calculator = new Calculator();
		var expRes = 3;
		var actRes = calculator.substract(8,5);
		expect(actRes).toBe(expRes);
	});
	
	//Multiply
	it('should be able to multiply two numbers', function() {
		//Test steps
		var calculator = new Calculator();
		var expRes = 15;
		var actRes = calculator.product(3,5);
		expect(actRes).toBe(expRes);
	});
	
	//Divide
	it('should be able to divide two numbers', function() {
		//Test steps
		var calculator = new Calculator();
		var expRes = 15;
		var actRes = calculator.divide(30,2);
		expect(actRes).toBe(expRes);
	});
	
	it('should be able to control divide by 0 exception', function() {
		//Test steps
		var calculator = new Calculator();		
		expect(function(){
			calculator.divide(3, 0);
		}).toThrow('divide by 0 is error');
	});
});

