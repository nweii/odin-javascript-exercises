const fibonacci = function(n) {
	if (n === 0 || n < 0) return "OOPS";
	
	// the first 'preceding' two numbers
	let a = 0;
	let b = 1;
	
	for (let i = 1; i < n; i++) {
		const temp = b;
		b = a + b; // add prev two nums to get this fibonacci
		a = temp; // set up new preceding number
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
