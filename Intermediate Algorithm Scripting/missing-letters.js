function fearNotLetter(str) {
    let values = [];
    let chars = str.split("");
    for(let i = 0; i < chars.length; ++i){
        values.push(chars[i].charCodeAt(0));
    }
    values = values.sort((a, b) => a - b);
    console.log(values);
    //
    let brk_value = undefined;
    //
    for(let i = 1; i < chars.length; ++i){
        if(values[i] - values[i - 1] > 1){
            brk_value = values[i] - 1;
            break;
        }
    }
    if(brk_value){
        return String.fromCharCode(brk_value);
    }
    return brk_value;
}


fearNotLetter("abce");
