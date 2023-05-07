/**
 * Coderbyte
 *
 * Challenge #002 - RemoveBrackets
 *
 * Have the function RemoveBrackets(str) take the str parameter being passed, which will contain only the characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets. For example: if str is "(()))" then your program should return the number 1. The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.
 *
 */

function RemoveBrackets(str) {
	let stack = [];
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			stack.push(str[i]);
		} else {
			if (stack.length > 0) {
				stack.pop();
			} else {
				count++;
			}
		}
	}
	return stack.length + count;
}
