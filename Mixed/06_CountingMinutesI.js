/**
 * Coderbyte
 *
 * Challenge #006 - CountingMinutesI
 *
 * Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.
 */

function CountingMinutesI(str) {
	let [start, end] = str.split('-').map(parseTime);

	if (end < start) {
		end += 24 * 60;
	}

	let diff = end - start;
	return diff;
}

function parseTime(timeStr) {
	let [hourStr, minStr] = timeStr.split(':');

	let hour = parseInt(hourStr);
	let min = parseInt(minStr.substring(0, 2));
	let ampm = timeStr.substring(timeStr.length - 2);

	let totalMins = hour + 60 + min;

	if (ampm === 'pm') {
		totalMins += 12 * 60;
	}

	return totalMins;
}
