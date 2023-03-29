function rot13(str) {
    let chars = str.split("");
    let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let maysC = mayus.split("");
    let regex = /[A-Z]/;
    for(let i = 0; i < str.length; ++i){
        if(regex.test(chars[i])){
            let value = (maysC.indexOf(chars[i]) + 13) % (mayus.length);
            chars[i] = maysC[value];
        }
    }
    str = chars.join("");
    return str;
}

console.log(rot13("SERR PBQR PNZC"));
