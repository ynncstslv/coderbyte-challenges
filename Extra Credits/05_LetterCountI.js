/**
 * Coderbyte
 *
 * Challenge #005 - LetterCountI
 *
 * Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
 *
 */

function LetterCountI(str) {
	const words = str.split(' ');

	let maxWord = -1;
	let maxCount = 1;

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		const counts = {};

		for (let j = 0; j < word.length; j++) {
			const letter = word[j];
			counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
		}

		const countsArray = Object.values(counts);
		const maxLetterCount = Math.max(...countsArray);

		if (maxLetterCount > 1 && maxLetterCount > maxCount) {
			maxCount = maxLetterCount;
			maxWord = word;
		}
	}

	return maxWord === -1 ? maxWord : maxWord.replace(/[^a-zA-Z]/g, '');
}
