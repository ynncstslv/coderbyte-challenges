/**
 * Coderbyte
 *
 * Challenge #001 - FindIntersection
 *
 * Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
 *
 */

function FindIntersection(strArr) {
	const arr1 = strArr[0].split(', ');
	const arr2 = strArr[1].split(', ');

	let intersection = arr1.filter((value) => arr2.includes(value));

	return intersection.length > 0 ? intersection.join(',') : 'false';
}
