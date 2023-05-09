/**
 * Coderbyte
 *
 * Challenge #004 - NumberAddition
 *
 * Have the function NumberAddition(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.
 *
 */

function NumberAddition(str) {
	let regNum = /\d+/g;
	let num = str.match(regNum);

	let sum = 0;

	if (num) {
		for (let i = 0; i < num.length; i++) {
			sum += parseInt(num[i]);
		}
	}
	return sum;
}
