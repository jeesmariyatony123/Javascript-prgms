//w.a.p to check number 40 is present in the given number

numArray = [10, 20, 30, 40, 3, 5, 67, 89, 28]
//binary search
// console.log(numArray);
numArray.sort((a, b) => a - b)
// console.log(numArray);
low = 0
up = numArray.length - 1
search = 40
isPresent = false
count = 0
while (low <= up) {
    count++
    mid = Math.floor((low + up) / 2)
    if (search == numArray[mid]) {
        isPresent = true
        break
    }
    else if (search > numArray[mid]) {
        low = mid + 1
    }
    else {
        up = mid - 1
    }
}
console.log("Execution time:", count);
console.log(isPresent?"number found" : "number not found");
