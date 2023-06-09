/**
 * Coderbyte
 *
 * Challenge #008 - BitwiseOne
 *
 *  Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101"
 *
 */

function BitwiseOne(strArr) {
	let resultStr = '';
	const binStr1 = strArr[0];
	const binStr2 = strArr[1];

	for (let i = 0; i < binStr1.length; i++) {
		if (binStr1[i] === '0' && binStr2[i] === '0') {
			resultStr += '0';
		} else {
			resultStr += '1';
		}
	}
	return resultStr;
}
