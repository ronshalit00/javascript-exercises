const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	const initial = 0;
	const result = arr.reduce((a, b) => a + b, initial);
	return result;
};

const multiply = function (arr) {
	const initial = 1;
	const result = arr.reduce((a, b) => a * b, initial);
	return result;
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (num) {
	return num > 0 ? num * factorial(num - 1) : 1;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
