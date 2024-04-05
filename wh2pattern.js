//print the pattern
//input:2       3       4       5
//      *12     *123    *1234   *12345
//output:24     369     4936    ?

input = 4
i = 1
str = ''
while (i <= input) {
    str += i
    i++
}
console.log(`input:${input} output:${str * input}`);
