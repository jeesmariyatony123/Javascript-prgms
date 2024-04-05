numArray = [10, 20, 30, 40, 67, 89, 28]

// w.a.p to find total sum of all numbers in the above array
sum = 0
for (let num of numArray) {
    sum += num
}
console.log(`sum of all numbers in the array [${numArray}] = ${sum}`);

//w.a.p to find highest number in the given array
highest = numArray[0]
for (let num of numArray) {
    if (num > highest) {
        highest = num
    }
}
console.log(`highest number in the given array : ${highest}`);

//w.a.p to find smallest number in the given array

smallest = numArray[0]
for (let num of numArray) {
    if (num < smallest) {
        smallest = num
    }
}
console.log(`smallest number in the given array : ${smallest}`);
