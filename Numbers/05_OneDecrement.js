/**
 * Coderbyte
 *
 * Challenge #005 - OneDecrement
 *
 * Have the function OneDecremented(str) count how many times a digit appears that is exactly one less than the previous digit. For example: if str is "5655984" then your program should return 2 because 5 appears directly after 6 and 8 appears directly after 9. The input will always contain at least 1 digit.
 *
 */

function OneDecrement(str) {
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (Number(str[i]) === Number(str[i - 1]) - 1) {
			count++;
		}
	}
	return count;
}
