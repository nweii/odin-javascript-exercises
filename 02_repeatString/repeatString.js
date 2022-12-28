const repeatString = function(str, times) {
	if (times < 0) return "Please specify a number of times to repeat.";
	let output = '';
	for (let i = 0; i < times; i++) {
		output += str;
	}
	return output;
};

// Do not edit below this line
module.exports = repeatString;
