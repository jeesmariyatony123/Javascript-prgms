function digitSum(num) {
    sum = 0
    while (num > 0) {
        lastDigit = num % 10
        sum += lastDigit
        num = Math.floor(num / 10)
    }

}
digitSum(4367)
console.log(sum);