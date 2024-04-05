var car = {
    name: "boleno",
    model: "hatch-back",
    manufacturer: "Maruti Suzuki",
    price: "13 lakh"
}

//display car name and its manufacturer
console.log(`car name: ${car.name}, manufacturer: ${car.manufacturer}`);

//check 'model' key is present then display its value
"model" in car && console.log(`Car Model: ${car.model}`);

//add 'varient' as automatic, manual
console.log(`add 'varient' as automatic, manual and color as red,white,blue,ash,black : `);
car.varient = ["automatic", "manual"]

//add color as red,white,blue,ash,black
car.color = ["red", "white", "blue", "ash", "black"]
console.log(car);

//insert hybrid varient to the given car
car.varient.push("hybrid")
console.log(car);

const { name, model, price } = car
console.log(`Car price: ${price}`);
console.log(`to check key is in an object:`);
console.log(car.hasOwnProperty("name"));
console.log(`to get all keys:`);
console.log(Object.keys(car));
console.log(`to get all values:`);
console.log(Object.values(car));