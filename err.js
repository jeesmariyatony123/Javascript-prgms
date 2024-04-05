try{expr = "10-10*2+30"
const result = eval(expr)
console.log(`Result=${result}`);}
catch{
    console.log("Invalid expression");
}
finally{
    console.log("Finally Block");
}