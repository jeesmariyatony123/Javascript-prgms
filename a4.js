// console.log(`${find} is present in given array`);

//find pattern
//inputs:[4,5,6]        [10,11,12]
//output: [11,10,9]     [23,22,21]

input = [4, 5, 6]
sum = 0
output = []
for (let num of input) {
    sum += num
}
// console.log(`sum of all numbers in the array [${input}] = ${sum}`);
for (let num of input) {
    output.push(sum - num)
}
console.log(`input: ${input}`);
console.log(`output: ${output}`);