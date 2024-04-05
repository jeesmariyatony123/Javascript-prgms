a = 0
b = 1
c = 4
content = ""

if (a < b && a < c) {
    // console.log(a);
    content += a
    if (b < c) {
        content += b
    }
    else {
        content += c
    }
}
else if (b < a && b < c) {

    content += b
    if (a < c) {
        content += b
    }
    else {
        content += c
    }
}
else {
    console.log(c);
    content += c


}
console.log(`sorted = ${content}`);