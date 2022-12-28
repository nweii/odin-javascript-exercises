const removeFromArray = function(things, ...specks) {
	return things.filter(thing => !specks.includes(thing))
};

// Do not edit below this line
module.exports = removeFromArray;
