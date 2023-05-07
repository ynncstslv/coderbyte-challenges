/**
 * Coderbyte
 *
 * Challenge #005 - GroupTotals
 *
 * Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the value is an integer. Your program should return a string with new key:value pairs separated by a comma such that each key appears only once with the total values summed up.

 * For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.

 * Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up.
 */

function GroupTotals(strArr) {
	let totals = {};

	for (let i = 0; i < strArr.length; i++) {
		let pair = strArr[i].split(':');
		let key = pair[0];
		let value = parseInt(pair[1]);

		if (totals.hasOwnProperty(key)) {
			totals[key] += value;
		} else {
			totals[key] = value;
		}
	}

	let output = [];
	let keys = Object.keys(totals).sort();

	for (let j = 0; j < keys.length; j++) {
		let key = keys[j];
		let value = totals[key];

		if (value !== 0) {
			output.push(`${key}:${value}`);
		}
	}
	return output.join(',');
}
