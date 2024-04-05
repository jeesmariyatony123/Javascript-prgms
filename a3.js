//w.a.p to check number 40 is present in the given number

numArray = [10, 20, 30, 40, 3, 5, 67, 89, 28]
//linear search
find = 407
findstatus = false
count = 0
for (let num of numArray) {
    count++
    if (num === find) {
        findstatus = true
        //forcefully exit
        break;
    } else {
        findstatus = false
    }
}
console.log("Execution time:", count);
console.log(findstatus ? "number found" : "number not found");
