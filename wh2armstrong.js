//w.a.p to check a 3 digit number is an Armstrong number or not

//num=153
//=> 1^3 +5^3 +5^3 == num

num = 153
input = num
sum = 0
while (num > 0) {
    lastDigit = num % 10
    sum += lastDigit ** 3
    num = Math.floor(num / 10)
}
console.log(sum == input ? `${input} is an armstrong number` : `${input} is not an armstrong number`);
