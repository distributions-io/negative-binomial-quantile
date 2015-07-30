options( digits = 16 )
library( jsonlite )


r = 50
p = 0.006
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qnbinom( probs, r, p )

cat( y, sep = ",\n" )

data = list(
	r = r,
	p = p,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
