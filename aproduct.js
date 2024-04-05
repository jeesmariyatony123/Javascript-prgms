//[id,name,price,stock]
products = [
    [1, 'hide and seek', 50, 20],
    [2, 'lays', 20, 80],
    [3, 'oreo', 40, 100],
    [4, 'parleG', 25, 0],
    [5, 'tiger', 20, 30],
    [6, 'unibic', 60, 20],
    [7, 'good day', 70, 20]
]

//1. display all product name
console.log("1. all product name:");
products.forEach(pro => console.log(pro[1]));

console.log('-----------------');

//2. display product whose price < Rs.50
console.log("2. product whose price < Rs.50");
check = products.filter(pro => pro[2] < 50).forEach(pro => console.log(pro[1]))
// console.log(check);

console.log('-----------------');

//3. print price of oreo
findoreoprice = products.find(pro => pro[1] == "oreo")
console.log(`3. price of oreo: ${findoreoprice[2]}`);

console.log('-----------------');


//4. print costly product name
costly = products.reduce((p1, p2) => p1[2] > p2[2] ? p1 : p2)
console.log(`4. costly product: ${costly[1]}`);

console.log('-----------------');

//5. display out of stock product
console.log(`5. out of stock product:`);
products.filter(pro => pro[3] == 0).forEach(pro => console.log(pro[1]))

console.log('-----------------');

//6. sort products based on stock in decsending order
console.log('6. sort products based on stock in decsending order');
products.sort((p1, p2) => (p2[3] - p1[3])).forEach(p => console.log(p[1]))
console.log('-----------------');

//7. print product having maximum available stock
maximum = products.reduce((p1, p2) => p1[3] > p2[3] ? p1 : p2)
console.log(`7. print product having maximum available stock: ${maximum[1]}`);

console.log('-----------------');

//8. is there any product can be purchased by Rs. 10

console.log(`8. Is there any product can be purchased by Rs. 10: ${products.some(pro => pro[2] <= 10) ? 'yes available' : 'No products are in the given range'}`);

console.log('-----------------');


//9. Is there any product in the range of 10 to 30
range = products.some(pro => pro[2] >= 10 && pro[2] <= 30)
console.log(`9. Is there any product in the range of 10 to 30: ${range ? 'Yes available' : 'No products are in the given range'}`);

console.log('-----------------');

//10. print all products in the range of 10 to 30
console.log('10. print all products in the range of 10 to 30:');
rangelist = products.filter(pro => pro[2] >= 10 && pro[2] <= 30).forEach(pro => console.log(pro[1]))

console.log('-----------------');

//11. print total stock of all products

totals = products.map((s) => s[3]).reduce((s1, s2) => s1 + s2)
console.log(`Total stock of all products =${totals}`);

