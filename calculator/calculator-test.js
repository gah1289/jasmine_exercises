it('should calculate the monthly rate correctly', function() {
	const values = {
		amount : 490000,
		years  : 30,
		rate   : 3.75
	};
	expect(calculateMonthlyPayment(values)).toEqual('2269.27');
});

it('should calculate the monthly rate correctly', function() {
	const values = {
		amount : 100000,
		years  : 15,
		rate   : 4.5
	};
	expect(calculateMonthlyPayment(values)).toEqual('764.99');
});

it('should return a result with 2 decimal places', function() {
	const values = {
		amount : 200000,
		years  : 30,
		rate   : 6
	};
	expect(calculateMonthlyPayment(values)).toEqual('1199.10');
});

it('should handle a low interest rate', function() {
	const values = {
		amount : 200000,
		years  : 30,
		rate   : 0.1
	};
	expect(calculateMonthlyPayment(values)).toEqual('563.95');
});

it('should handle a high interest rate', function() {
	const values = {
		amount : 200000,
		years  : 30,
		rate   : 150
	};
	expect(calculateMonthlyPayment(values)).toEqual('25000.00');
});
