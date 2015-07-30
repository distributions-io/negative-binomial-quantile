options( digits = 16 )
library( jsonlite )

r = 6
p = 0.6
probs = 0:24 / 25
y = qnbinom( probs, r, p )

cat( y, sep = ",\n" )

data = list(
	r = r,
	p = p,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
