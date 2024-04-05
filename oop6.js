function add(...num) {

    console.log(num);
    console.log(num.reduce((n1, n2) => n1 + n2));
}

// function add(a,b,c){
//     console.log("addition with 3 numbers");

// }
// function add(a,b,c,d){
//     console.log("addition with 4 numbers");

// }
add(10, 20)
add(10, 20, 30)
a = [10, 20]
a.push(30, '40', 50)
console.log(a);