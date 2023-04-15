const removeFromArray = function (arr, ...args) {
	const argArr = Array.from(args);
	for (let j = 0; j < argArr.length; j++) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === argArr[j]) {
				arr.splice(i, 1);
			}
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
