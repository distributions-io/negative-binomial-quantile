'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( r, p )
*	Partially applies number of failures until experiment is stopped `r` and success probability `p` and returns a function for evaluating the quantile function for a Negative Binomial distribution.
*
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @returns {Function} quantile function
*/
function partial( r, p ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Negative Binomial distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
