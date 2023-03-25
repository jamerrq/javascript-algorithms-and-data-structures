function confirmEnding(str, target) {
    let confirm = true;
    for (let i = str.length - target.length; i < str.length; ++i) {
        let stri = str[i];
        let trgi = target[i - str.length + target.length];
        // console.log(`STRI: ${stri}, TRGI: ${trgi}`);
        if (stri != trgi) {
            confirm = false;
            break;
        }
    }
    return confirm;
}

confirmEnding("Bastian", "n");