/**
 * Coderbyte
 *
 * Challenge #003 - DistinctCharacters
 *
 * Have the function DistinctCharacters(str) take the str parameter being passed and determine if it contains at least 10 distinct characters, if so, then your program should return the string true, otherwise it should return the string false. For example: if str is "abc123kkmmmm?" then your program should return the string false because this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.
 */

function DistinctCharacters(str) {
	let charMap = {};

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (!charMap[char]) {
			charMap[char] = true;
		}
	}
	return Object.keys(charMap).length >= 10 ? 'true' : 'false';
}
