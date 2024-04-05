input = "hello hai hello welcome"
//w.a.p to print word count along with each word
//output:{hello:2,hai:1,welcom:1}

//split input into array of words --[hello,hai,hello,welcome]
wordArray = input.split(" ")
//create empty object to hold output
output = {}
//get each word from array & check is in output object
//if word is in output:increment value of key
//not word in output:insert word as key and value as 1
//in /haown
wordArray.forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
//display output
console.log(output);