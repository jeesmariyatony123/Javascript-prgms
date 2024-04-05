//w.a.p to check a number is pallindrome or not

num = 121
input = num
reverseStr = " "
while (num > 0) {
    lastDigit = num % 10
    reverseStr += lastDigit
    num = Math.floor(num / 10)
}
console.log(input == reverseStr ? `${input} is a pallindrome` : `${input} is not a pallindrome`);
