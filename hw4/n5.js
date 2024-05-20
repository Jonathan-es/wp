function countChar(char) {
    const count = {};

    for (let i = 0; i < char.length; i++) {
        let x = str[i];
        if (count[x]) {
            count[x]++;
        }
        else {
            count[x] = 1
        }
    }
    return count;
}

var char = "abbcccddddeeeee";
console.log(countChar(char));