const friends = ['Joe', 'Clara', 'Ana', 'Ella', 'Andrea']

for (friend of friends) {
    console.log(`${friend}`);
    for (let i = 0; i < 99; i++) {
        if (i == 98) {

            console.log(`${99 - i} line of code in the file, ${99 - i} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file.`);
        } else {
            console.log(`${99 - i}lines of code in the file,${99 - i}lines of code; ${friend} strikes one out, clears it all out, `);
        }
    }
}
