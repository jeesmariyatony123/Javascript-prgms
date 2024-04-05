nameArray = ["Maya", "Mohit", "Manuel", "Mahin", "Mihir"]
//Is "mohit" is present in the given array
console.log(`Using some method`);
console.log(`Is "mohit" is present in the given array: ${nameArray.some(name => name == "Mohit")} `);
console.log(`Using includes method`);
console.log(`Is "mohit" is present in the given array: ${nameArray.includes("Mohit")} `);


index = nameArray.indexOf("Mohit")

//if "mohit is in array then display its index"
if (nameArray.includes("Mohit")) {
    console.log(`Index of "Mohit": ${nameArray.indexOf("Mohit")}`);
}
else {
    console.log("Nothing to print");
}

//remove "Mohit" from given array
// console.log(nameArray.splice(index, 1));
// console.log(`Array after removal of"Mohit":`);
// console.log(nameArray);

//replace "mohit" 
console.log(nameArray.splice(index, 1, "Milind"));
console.log(`Array after removal of"Mohit" with "Milind":`);
console.log(nameArray);

//display new array without "mahin"
newArray = nameArray.filter(name => name != "Mahin")
console.log(`display new array without "mahin"`);
console.log(newArray);