/**
 * Coderbyte
 *
 * Challenge #004 - DashInsert
 *
 * Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
 *
 */

function DashInsert(str) {
	let resultStr = '';

	for (let i = 0; i < str.length; i++) {
		resultStr += str[i];

		if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0 && i !== str.length - 1) {
			resultStr += '-';
		}
	}
	return resultStr;
}
