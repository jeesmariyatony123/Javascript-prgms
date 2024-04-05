for (row = 1; row <= 5; row++) {
    content = ""
    for (space = 1; space <= row; space++) {
        content += " "
    }
    for (col = 5; col >= row; col--) {
        content += "* "
    }
    console.log(content);
}