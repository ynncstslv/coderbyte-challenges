/**
 * Coderbyte
 *
 * Challenge #001 - WordCount
 *
 * Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces.
 *
 */

function WordCount(str) {
	return str
		.trim()
		.split(' ')
		.filter((word) => word.length > 0).length;
}
