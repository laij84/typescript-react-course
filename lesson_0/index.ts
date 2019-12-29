type stringOrNumber = string | number

type booleanOrNull = boolean | null

const blah: stringOrNumber & booleanOrNull = 'hello'

console.log(blah)
