/**
 * Coderbyte
 *
 * Challenge #001 - LongestWord
 *
 * Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
 *
 */

function LongestWord(sen) {
	let regSen = sen.replace(/[^\w\s]/gi, ' ');
	let words = regSen.split(' ');
	let longestWord = '';

	for (let i = 0; i < words.length; i++) {
		let word = words[i];

		if (word.length > longestWord.length) {
			longestWord = word;
		}
	}
	return longestWord;
}
