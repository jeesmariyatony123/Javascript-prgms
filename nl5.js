// 1
// 22
// 333
// 4444

for (row = 1; row <= 4; row++) {
    content = ""
    for (col = 1; col <= row; col++) {
        content += row + " "
    }
    console.log(content);
}