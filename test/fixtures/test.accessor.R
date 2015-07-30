options( digits = 16 )
library( jsonlite )


r = 17
p = 0.4
probs = seq( 0, 1, 0.01 )
y = qnbinom( probs, r, p )

cat( y, sep = ",\n" )

data = list(
	r = r,
	p = p,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
