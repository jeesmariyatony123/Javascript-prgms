numArray = [10, 11, 12, 13, 14, 15]

//find even numbers
evenNum = numArray.filter(num => num % 2 == 0)
console.log(evenNum);

// find all numbers <13
numLess = numArray.filter(num => num < 13)
console.log(numLess);

//print squares of each number in the given array
numSquare = numArray.map(num => num ** 2)
console.log(numSquare);

//display an array with cube of all number in the given array
numCube = numArray.map(num => num ** 3)
console.log(numCube);

//create new array with numbers, from existing array while statisfying given condition
//if number<13, then increment number
//if number>=13, decrement number
//ans: 11,12 ,13,12,13,14

result = numArray.map(num => num < 13 ? num + 1 : num - 1)
console.log(result);

//find total sum of all numbers in the gven array
totalsum = numArray.reduce((n1, n2) => n1 + n2)
console.log(`total Sum = ${totalsum}`);

//find largest number
largest = numArray.reduce((n1, n2) => n1 > n2 ? n1 : n2)
console.log(`Largest = ${largest}`);

//find smallest number
smallest = numArray.reduce((n1, n2) => n1 < n2 ? n1 : n2)
console.log(`smallest = ${smallest}`);