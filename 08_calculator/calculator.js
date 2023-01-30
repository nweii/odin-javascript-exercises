const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(nums) {
  // start 'total' at 0 and add each 'current' number in the array to the running total
	return nums.reduce((total, current) => total + current, 0)
};

const multiply = function(nums) {
  return nums.reduce((total, current) => total * current)
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) return 1;
  return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
