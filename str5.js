
//5. w.a.p to display all products which includes given string 'a' from the given array
//search a string is available in a product array, it return an array of product which include sthe given string otherwise display no products are available
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

//search string= a
//output= ['hide and seek','lays','parleG','good day']

console.log(`display all products which includes given string 'a' from the given array: `);
search = "ay"
output = products.filter(item => item[1].includes(search)).map(item => item[1])
console.log(output);
