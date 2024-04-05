//w.a.p to print a number in its reverse order
//input:123
//output:321

num = 123
// result = 0
// while (num > 0) {
//     r = num % 10
//     result = result * 10 + r
//     num = Math.floor(num / 10)
// }
// console.log(' ' + result);

input = num
reverseStr = " "
while (num > 0) {
    lastDigit = num % 10
    reverseStr += lastDigit
    num = Math.floor(num / 10)
}
console.log(`Reverse of ${input} = ${reverseStr}`);