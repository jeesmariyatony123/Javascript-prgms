//w.a.function to add 2 numbers

//function definition

// function add(num1, num2) {
//     console.log("Inside add Function:");
//     const result = num1 + num2
//     console.log(`${num1} + ${num2} = ${result}`);
//     // returning value
//     return result
// }

//arrow
const add = (num1, num2) => {
    console.log("Inside add Function:");
    const result = num1 + num2
    console.log(`${num1} + ${num2} = ${result}`);
    // returning value
    return result
}
console.log("Addition of 2 numbers");
//function call
// add(2,6)
console.log("Result:", add(20, 30));