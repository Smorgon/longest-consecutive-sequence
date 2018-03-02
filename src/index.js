module.exports = function longestConsecutiveLength(array) {
  let len = array.length;
	let max = 0;
	let count = 1;

	for (let i = 1; i < len; i++) {
		if (array[i] === array[i-1]) {
			count++;
		} else {
			if (count > max) {
				max = count;
			}
			count = 1;
		}
	}
}

return max;
