const findTheOldest = function(people) {
	return people.reduce((oldest, thisPerson) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const thisAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
		return oldestAge < thisAge ? thisPerson : oldest;
	})
};

const getAge = function(birth, death) {
	if (!death) {
		// base age calc on present year instead of a death year
		death = new Date().getFullYear();
	}
	return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
