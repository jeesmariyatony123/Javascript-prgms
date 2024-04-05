//print pair whose sum is 6 from the given array = (2,4)
numArray = [2, 3, 4, 5]
pairSum = 6
for (i = 0; i < numArray.length; i++) {
    for (j = i + 1; j < numArray.length; j++) {
        if (numArray[i] + numArray[j] === pairSum) {
            console.log(`Pair: (${numArray[i]},${numArray[j]})`);
        }
    }
}