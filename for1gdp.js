//w.a.p to find gcd/hcf of the numbers

// a=6
// b=24
// gcd=0
// for(i=1;i<=a;i++){
//     if(a % i === 0 && b % i === 0){
//         gcd= i
//     }
// }
// console.log(gcd);


a = 40
b = 110
gcd = 0
if (a < b) {
    for (i = 1; i <= a; i++) {
        if (a % i == 0 && b % i == 0) {
            gcd = i
        }
    }
    console.log(`GCD(${a},${b})=${gcd}`);
}
else {
    for (i = 1; i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            gcd = i
        }
    }
    console.log(`GCD(${a},${b})=${gcd}`);
}