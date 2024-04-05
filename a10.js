numArray = [[10, 2], [45, 67], [56, 3], [8, 6]]
flattendArray=numArray.flat(Infinity)
//1.w.a.p to print all numbers<10: filter
console.log(`print all numbers<10 filter: `);

console.log(flattendArray.filter(num => num < 10));

//2.print squares of each numbers in array: map
console.log(`squares of each numbers in array: `);
console.log(flattendArray.map((res) => (res**2)));

//3.print total sum of all numbers in the array: reduce
console.log(`total sum of all numbers in the array: `);
console.log(flattendArray.reduce((num1,num2)=> num1+num2));