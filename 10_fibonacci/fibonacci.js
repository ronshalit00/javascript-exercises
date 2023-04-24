const fibonacci = function (index) {
	if (index < 1) {
		return "OOPS";
	}

	let array = [];
	let n1 = 1,
		n2 = 1,
		nextTerm;

	for (let i = 1; i <= index; i++) {
		array.push(n1);
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
	}
	console.log(array);
	return array[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
