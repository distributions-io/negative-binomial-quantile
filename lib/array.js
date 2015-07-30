'use strict';

// MODULES //

var partial = require( './partial.js' );


// QUANTILE //

/**
* FUNCTION: quantile( out, arr, r, p )
*	Evaluates the quantile function for a Negative Binomial distribution with number of failures until experiment is stopped `r` and success probability `p` for each array element.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function quantile( y, x, r, p ) {
	var len = x.length,
		fcn,
		i;

	fcn = partial( r, p );
	for ( i = 0; i < len; i++ ) {
		if ( typeof x[ i ] === 'number' ) {
			y[ i ] = fcn( x[ i ] );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
