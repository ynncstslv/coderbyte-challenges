// NUMBERS

/*  01. Check Nums

    Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.
*/

/* ---------- SOLUTION
function CheckNums(num1, num2) {
	if (num2 > num1) {
		return 'true';
	} else if (num2 < num1) {
		return 'false';
	} else {
		return '-1';
	}
}

console.log(CheckNums(1, 122));
console.log(CheckNums(122, 1));
console.log(CheckNums(122, 122));
*/

/*  02. Simple Adding

    Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
*/

/* ---------- SOLUTION
function SimpleAdding(num) {
	let sum = 0;

	for (let i = 1; i <= num; i++) {
		sum += i;
	}

	return sum;
}

console.log(SimpleAdding(8));
*/

/*  03. Simple Evens

    Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number.
*/

/* ---------- SOLUTION
function SimpleEvens(num) {
	let str = num.toString();

	for (let i = 0; i < str.length; i++) {
		if (Number(str[i]) % 2 !== 0) return 'false';
	}
	return 'true';
}

console.log(SimpleEvens(4602225));
*/

/*  04. Dash Insert

    Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
*/

/* ---------- SOLUTION
function DashInsert(str) {
	let result = '';

	for (i = 0; i < str.length; i++) {
		result += str[i];

		if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0 && i !== str.length - 1) {
			result += '-';
		}
	}
	return result;
}

console.log(DashInsert('454793'));
*/

/*  05. One Decrement

    Have the function OneDecremented(str) count how many times a digit appears that is exactly one less than the previous digit. For example: if str is "5655984" then your program should return 2 because 5 appears directly after 6 and 8 appears directly after 9. The input will always contain at least 1 digit.
*/

/* ---------- SOLUTION
function OneDecrement(str) {
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (Number(str[i]) === Number(str[i - 1]) - 1) {
			count++;
		}
	}
	return count;
}

console.log(OneDecrement('5655984'));
*/

/*  06. Superincreasing

    Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false"
*/

/* ---------- SOLUTION
function Superincreasing(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > sum) {
			sum += arr[i];
		} else {
			return 'false';
		}
	}
	return 'true';
}

console.log(Superincreasing([1, 3, 6, 13, 54]));
*/

/*  07. Changing Sequence

    Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.
*/

/* ---------- SOLUTION
function ChangingSequence(arr) {
	let increasing = arr[1] > arr[0];

	for (let i = 2; i < arr.length; i++) {
		if (arr[i] > arr[i - 1] && !increasing) {
			return i - 1;
		} else if (arr[i] < arr[i - 1] && increasing) {
			return i - 1;
		}
	}
	return -1;
}

console.log(ChangingSequence([1, 2, 4, 6, 4, 3, 1]));
*/

/*  08. Bitwise One

    Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101"
*/

/* ---------- SOLUTION
function BitwiseOne(strArr) {
	let resultStr = '';
	const bin1 = strArr[0];
	const bin2 = strArr[1];

	for (let i = 0; i < bin1.length; i++) {
		if (bin1[i] === '0' && bin2[i] === '0') {
			resultStr += '0';
		} else {
			resultStr += '1';
		}
	}
	return resultStr;
}

console.log(BitwiseOne(['1001', '0100']));
*/

/*  09. First Factorial

    Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/

/* ---------- SOLUTION
function FirstFactorial(num) {
	if (num === 1) {
		return 1;
	} else {
		return num * FirstFactorial(num - 1);
	}
}

console.log(FirstFactorial(8));
*/

// STRINGS

/*  01. Word Count

    Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces.
*/

/*  02. Vowel Count

    Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge.
*/

/*  03. Swap Case

    Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
*/

/*  04. First Reverse

    Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

/*  05. Letter Capitalize

    Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
*/

// MIXED

/*  01. Find Intersection
 */

/*  02. Remove Brackets
 */

/*  03. Distinct Characters

*/

/*  04. Time Convert

*/

/*  05. Group Totals

*/

/*  06. Counting Minutes I

*/

// EXTRA CREDITS

/*  01. Longest Word

*/

/*  02. Nonrepeating Character

*/

/*  03. Overlapping Ranges

*/

/*  04. Number Addition

*/

/*  05. Letter Count I

*/

/*  06. Star Rating

*/

// CODERBYTE JS COURSE EXERCISES

/*  01. Letter Changes

*/

/*  02. Simple Symbols

*/

/*  03. Alphabet Soup

*/
