//pattern

//             *
//         *       *
//     *       *       *
// *       *       *       *

for (row = 1; row <= 4; row++) {
    content = ""
    for (space = 3; space >= row; space--) {
        content += " "
    }
    for (col = 1; col <= row; col++) {
        content += "* "
    }
    console.log(content);
}