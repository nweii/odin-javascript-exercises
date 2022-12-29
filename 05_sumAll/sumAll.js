const sumAll = function(n1, n2) {
	if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
		return 'ERROR';
	}
	if (n1 < 0 || n2 < 0) {
		return 'ERROR';
	}
	if (n1 > n2) {
		const max = n1; // set aside n1
		n1 = n2; // overwrite n1 with n2
		n2 = max; // overwrite n2 with what used to be n1
	}
	
	let sum = 0;
	for (let i = n1; i <= n2; i++) {
		sum += i;
	}
	
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
