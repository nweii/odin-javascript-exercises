const reverseString = function(str) {
	let output = ''; // initially blank so we can add characters
	
	// iterate on each character, starting with the last
	for (let i = str.length - 1; i >= 0; i--) {
		output += str.charAt(i);
	}
	
	return output;
};

// Do not edit below this line
module.exports = reverseString;
