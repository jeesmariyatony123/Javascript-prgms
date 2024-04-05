//var keyword
console.log(`First name: ${first_name}`);
var first_name = "Maxwell"
var age = 27
console.log("first_name:", first_name, "Age:", age);
console.log("first_name: " + first_name + " Age: " + age);
console.log(`First name: ${first_name} Age: ${age}`);
first_name = true
console.log(`First name: ${first_name}`);
const weekDays = "Sunday"
console.log(`WeekDays: ${weekDays}`);
let num = 10
console.log("Num: (Initially)", num);//num=10
for (let num = 1; num <= 5; num++) {  //num=1, 1<=5 t, num=2 2<=5 t, 3<=5 t, 4<=5 t, 5==5 t, 6<=5 f
    console.log("num:(Inside loop)", num); //1 2 3 4 5
}
console.log("Num:(outside loop)", num);