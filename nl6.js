// 1
// 12
// 123
// 1234


for (row = 1; row <= 4; row++) {
    content = ""
    for (col = 1; col <= row; col++) {
        content += col + " "
    }
    console.log(content);
}