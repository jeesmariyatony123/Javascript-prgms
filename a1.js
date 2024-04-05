weekDays = ["Monday", "Tuesday", "Wednesday"]
console.log(`weekDays : ${weekDays}`);
console.log(`Type of weekDays array : ${typeof weekDays}`);
console.log(`First vaue in weekDays : ${weekDays[0]}`);
// length of array
console.log(`Total items in weekDays : ${weekDays.length}`);
console.log(`Last item in weekDays: ${weekDays[weekDays.length - 1]}`);
console.log("---Access items one by one in an array - for loop---");
for (index = 0; index < weekDays.length; index++){
    console.log(weekDays[index]);
}
console.log("---Access items one by one in an array - for of loop---");
for(let day of weekDays){
    console.log(day);
}
for(let index in weekDays){
    console.log(index);
}
for(let index in weekDays){
    console.log(weekDays[index]);
}

//insert new day to weekDays @end
weekDays.push("Thursday")
weekDays.push(5)
console.log(`weekDays = ${weekDays}`);

////insert new day to weekDays @beginning
weekDays.unshift("Sunday")
console.log(`weekDays = ${weekDays}`);
weekDays.pop()
console.log(`weekDays = ${weekDays}`);
weekDays.shift()
console.log(`weekDays = ${weekDays}`);