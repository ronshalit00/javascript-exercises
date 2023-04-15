const convertToCelsius = function (inFar) {
	const cel = ((inFar - 32) * 5) / 9;
	let outCel;
	if (cel > 0 || cel < 0) {
		outCel = cel.toFixed(1);
	} else {
		outCel = cel;
	}
	return +outCel;
};

const convertToFahrenheit = function (inCel) {
	const far = (inCel * 9) / 5 + 32;
	let outFar;
	if (far > 0 || far < 0) {
		outFar = far.toFixed(1);
	} else {
		outFar = far;
	}
	return +outFar;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
