function titleCase(str) {
    let words = str.split(" ");
    let newWords = [];
    for (let i = 0; i < words.length; ++i) {
        let newWord = words[i][0].toUpperCase() + words[i].slice(1, words[i].length).toLowerCase();
        newWords.push(newWord);
    }
    let newStr = newWords.join(" ");
    return newStr;
}

titleCase("I'm a little tea pot");