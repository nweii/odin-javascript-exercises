const palindromes = function (str) {
	str = str.toLowerCase().replace(/[^a-z\d]/gi,'');
	return (str === str.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
