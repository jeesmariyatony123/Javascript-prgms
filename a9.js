//w.ap to print all numbers < 10

numArray = [[10, 2], [45, 67], [56, 3], [8, 6]]

for (let subArray of numArray) {
    for (let num of subArray) {
        if (num < 10) {
            console.log(num);
        }
    }
}