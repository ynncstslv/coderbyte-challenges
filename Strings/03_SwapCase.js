/**
 * Coderbyte
 *
 * Challenge #003 - SwapCase
 *
 * Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
 *
 */

function SwapCase(str) {
	let swap = '';

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (char === char.toUpperCase()) {
			swap += char.toLowerCase();
		} else if (char === char.toLowerCase()) {
			swap += char.toUpperCase();
		} else {
			swap += char;
		}
	}
	return swap;
}
