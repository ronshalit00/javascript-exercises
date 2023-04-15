const repeatString = function (string, num) {
	let output = "";
	if (num > -1) {
		for (let i = 0; i < num; i++) {
			output += string;
		}
	} else {
		return "ERROR";
	}
	return output;
};

// Do not edit below this line
module.exports = repeatString;
