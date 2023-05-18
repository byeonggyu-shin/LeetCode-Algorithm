/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
	let result = 0;
	let sign = 1;
	let originalDivisor = divisor;

	//Convert dividend & divisor to positive numbers
	if (dividend < 0) {
		dividend = -dividend;
		sign = -sign;
	}

	if (divisor < 0) {
		divisor = -divisor;
		originalDivisor = divisor;
		sign = -sign;
	}

	//Shortcut for predetermined result
	if (dividend === divisor) return sign;

	/**
	 * Use left shift to multiply the previous divisor by 2, and the same for the result,
	 * which decrease the run time.
	 * @example
	 * 53/3 ====> divisor: 3 => 6 => 12 => 24 => 48 => (remains 5 handled in the next loop)
	 * 			  result : 0 => 2 => 4 =>  8  => 16 => (remains 1 handled in the next loop)
	 *
	 */
	while (divisor < dividend) {
		const shift = divisor << 1;

		if (shift > dividend || shift <= 0) {
			break;
		}

		if (!result) result = 2;
		else result = result << 1;

		divisor = shift;
	}

	/**
	 * Loop to increase by the original divisor value if there are remainder.
	 * @example Using the previous example we've got 5 left, so we add them 3 by 3
	 * in this case we add only 3 before we exceed the dividend value.
	 * 53/3 ====> divisor: 48 + 3 => 51
	 * 			  result: 16 + 1  => 17
	 */
	while (divisor + originalDivisor <= dividend) {
		divisor += originalDivisor;
		result++;
	}

	/**
	 * Fix the problem of below multiplication divisors.
	 * @example 10/7 => will not pass any of the above loops, so the result would've been 0.
	 * */
	if (!result && dividend - divisor >= 0) {
		result++;
	}

	result = result * sign;

	// Number Boundaries
	if (result < -2147483648) return -2147483648;
	if (result > 2147483647) return 2147483647;

	return result;
};