//Task 1
//find the first recursive character from the given pattern="ABBCCBAD"
//ans: B
pattern = "ABBCCBAD"

output = {}
for (let char of pattern) {
    if (char in output) {
        console.log(`First recursive character: ${char}`);
        break
    } else {
        output[char] = 1
    }
}

