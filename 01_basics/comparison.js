console.log(2>1)
console.log(2<1)
console.log(2>=1)
console.log(2<=1)

console.log(2==1)
console.log(2==2)

console.log(2!=1)
console.log(2!=2)

console.log(null > 0) //null is converted to 0 and then compared. this is a case for comparison operators where null is considered equal to 0 when using the >= operator, but not when using the == comparison operator.
console.log(null == 0) //null is only equal to undefined and not to any other value. So null == 0 is false
console.log(null >= 0) //null is converted to 0 and then compared. So null >= 0 is true. This is a special case in JavaScript where null is considered equal to 0 when using the >= operator, but not when using the == comparison operator.

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

//Strict Checking "==="
console.log("2" == 2) //In JavaScript, the == operator performs type coercion, which means it converts the operands to the same type before making the comparison. In this case, "2" (a string) is converted to 2 (a number) before the comparison is made, resulting in true.
console.log("2" === 2) // === operator checks for equality of value after performing type coercion, while === operator checks for both value and type equality without performing type coercion. In this case, "2" (a string) is not equal to 2 (a number) when using the === operator, resulting in false.