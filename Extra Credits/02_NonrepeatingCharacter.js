/**
 * Coderbyte
 *
 * Challenge #002 - NonrepeatingCharacter
 *
 * Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character.
 *
 */

function NonrepeatingCharacter(str) {
	let nonRepeating = '';

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (nonRepeating.indexOf(char) !== -1) {
			continue;
		}

		if (str.indexOf(char) === str.lastIndexOf(char)) {
			return char;
		}

		nonRepeating += char;
	}
	return nonRepeating;
}
