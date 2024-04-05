//w.a.p to check a number is prime number or not

num = 19
isPrime = true
for (i = 2; i < num; i++) {
    if (num % i == 0) {
        isprime = false
        break;
    }
    else {
        isPrime = true
    }
}
console.log(isPrime ? "Prime number" : "not a prime number");

