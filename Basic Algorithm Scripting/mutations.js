function mutation(arr) {
    let word1 = arr[0].toLowerCase();
    let word2 = arr[1].toLowerCase();
    let ans = true;
    for (let i = 0; i < word2.length; ++i) {
        let found = false;
        for (let j = 0; j < word1.length; ++j) {
            if (word2[i] === word1[j]) {
                found = true;
            }
        }
        ans = ans && found;
    }
    return ans;
}

mutation(["hello", "hey"]);
