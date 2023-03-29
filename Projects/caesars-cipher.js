function rot13(str) {
    let chars = str.split("");
    let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let maysC = mayus.split("");
    // console.log(mayus.length)
    let regex = /[A-Z]/;
    for(let i = 0; i < str.length; ++i){
        if(regex.test(chars[i])){
            let value = (maysC.indexOf(chars[i]) + 13) % (mayus.length);
            // console.log(value);
            chars[i] = maysC[value];
        }
    }
    str = chars.join("");
    console.log(str);
    return str;
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
