/**
 * Coderbyte
 *
 * Challenge #005 - LetterCapitalize
 *
 * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
 *
 */

function LetterCapitalize(str) {
	let words = str.split(' ');

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substring(1);
	}
	return words.join(' ');
}
