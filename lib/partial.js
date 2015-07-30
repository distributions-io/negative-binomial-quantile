'use strict';

// MODULES //

var cdf = require( 'distributions-negbinomial-cdf/lib/number.js' ),
	erfcinv = require( 'compute-erfcinv/lib/number.js' ),
	search = require( './search.js' );


// FUNCTIONS //

var round = Math.round,
	sqrt = Math.sqrt;


// CONSTANTS //

var ROOT_TWO = sqrt( 2 );


// PARTIAL //

/**
* FUNCTION: partial( r, prob )
*	Partially applies number of failures until experiment is stopped `r` and success probability `p` and returns a function for evaluating the quantile function for a Negative Binomial distribution.
*
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} prob - success probability
* @returns {Function} quantile function
*/
function partial( r, prob ) {
	var mu,
		sigma, sigma_inv;

	mu = ( r * prob ) / ( 1 - prob );
	sigma = sqrt( r * prob ) / ( 1 - prob );
	sigma_inv = ( 2/prob - 1 ) / sigma;
	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Negative Binomial distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		var x, x2,
			corr,
			guess;

		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
		if ( p === 0 ) {
			return 0;
		}
		if ( p === 1 ) {
			return Number.POSITIVE_INFINITY;
		}
		// Cornish-Fisher expansion
		if ( p < 0.5 ) {
			x = -erfcinv( 2 * p ) * ROOT_TWO;
		} else {
			x = erfcinv( 2 * ( 1 - p ) ) * ROOT_TWO;
		}
		x2 = x * x;
		// Skewness correction:
		corr = x + sigma_inv * ( x2 - 1 ) / 6;
		guess = round( mu + sigma * corr );
		return ( cdf( guess, r, prob ) >= p ) ? search.left( guess, p, r, prob ) : search.right( guess, p, r, prob );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
