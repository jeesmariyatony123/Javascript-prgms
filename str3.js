//3. w.a.p to print all vowels from given string, input ="hello hai"
vowels = ["a", "e", "i", "o", "u"]
input = "hello hai"
output = input.split('').filter(char=>vowels.includes(char))
console.log(output);
