months = ["jan", "feb", "mar", "apr"]
console.log("months:", months);
console.log("Type of months array:", typeof months);
// total items inside = arrayname.length
console.log(`Total item: ${months.length}`);
console.log(`First item: ${months[0]}`);
console.log(`Last item: ${months[months.length - 1]}`);
console.log(`Displaying array items one by one using for loop`);
for (index = 0; index < months.length; index++) {
    console.log(months[index]);
}
console.log("Displaying arrray items one by one using for of loop");
for (let month of months) {
    console.log(month);
}
console.log("Displaying arrray items one by one using for in loop");
for (let index in months) {
    console.log(months[index]);
}

//insert data

months.push("may")
months.unshift("Dec")
console.log("Months:", months);
//delete data
months.pop()
console.log("months:", months);
months.shift()
console.log("months:", months);