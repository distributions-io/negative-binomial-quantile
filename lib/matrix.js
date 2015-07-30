'use strict';

// MODULES //

var partial = require( './partial.js' );


// QUANTILE //

/**
* FUNCTION: quantile( out, matrix, r, p )
*	Evaluates the quantile function for a Negative Binomial distribution with number of failures until experiment is stopped `r` and success probability `p` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @returns {Matrix} output matrix
*/
function quantile( y, x, r, p ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'quantile()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( r, p );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
