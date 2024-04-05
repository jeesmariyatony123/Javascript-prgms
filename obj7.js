
products = [
    { pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led' },
    { pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led' },
    { pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led' },
    { pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd' },
    { pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd' }
]

//1. print product name only

// products.forEach(pro => {
//     console.log(`${pro['pName']}`);
// })
console.log(`1. All products: ${products.map(product => product.pName)}`);
console.log(`---------------`);

//2. print all mobile details whose display is lcd = filter
console.log(`2. print all mobile details whose display is lcd`);
check = products.filter(product => product.display == 'lcd').forEach(product => console.log(product.pName))

console.log(`---------------`);

//3. print 5g mobile phone name =filter 
console.log(`3. print 5g mobile phone name`);
check = products.filter(product => product.band == '5g').forEach(product => console.log(product.pName))

console.log(`---------------`);
//4. sort mobile based on price ==sort
console.log(`4. sort mobile based on price`);
products.sort((p1, p2) => (p2.price - p1.price)).forEach(product => console.log(product.pName))
console.log(`---------------`);

//5. print costly mobile ==reduce
costly = products.reduce((p1, p2) => p1.price > p2.price ? p1 : p2)
console.log(`5. print costly mobile: ${costly.pName}`);
console.log(`---------------`);

//6. print low cost mobile ==reduce
lowcost = products.reduce((p1, p2) => p1.price < p2.price ? p1 : p2)
console.log(`6. print costly mobile: ${lowcost.pName}`);
