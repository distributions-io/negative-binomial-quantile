'use strict';

// FUNCTIONS //


// QUANTILE //

/**
* FUNCTION: quantile( p, r, p )
*	Evaluates the quantile function for a Negative Binomial distribution with number of failures until experiment is stopped `r` and success probability `p` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @returns {Number} evaluated quantile function
*/
function quantile( p, r, p ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
