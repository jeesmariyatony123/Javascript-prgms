const Boleno = {
    price: "15 lakhs",
    varient: ["automatic", "manual"]
}
const Glanza = {
    price: "17 lakhs"
}

Glanza.__proto__ = Boleno
console.log(Glanza.varient);