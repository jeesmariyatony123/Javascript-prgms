for (row = 1; row <= 5; row++) {
    content = ""
    for (col = 1; col <= 5; col++) {
        if (row === 1 || row === 5) {
            content += '* '
        }
        else if (col === 1 || col === 5) {
            content += '* '
        }
        else {
            content += ' '

        }

    }

    console.log(content);
}