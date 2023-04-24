const palindromes = function (string) {
	const lowString = string.toLowerCase().replace(/[^a-z]/g, "");
	const array = [...lowString];
	const reverseArray = array.reverse();
	const reverseString = reverseArray.join("");

	if (reverseString === lowString) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
