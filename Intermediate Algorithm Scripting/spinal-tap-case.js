function spinalCase(str) {
    let words = [];
    let regex = /[a-z]/;
    let regex2 = /[A-Z]/;
    let current_word = "";
    for(let i = 0; i < str.length; ++i){
        if(regex.test(str[i])){
            current_word += str[i];
        }
        else{
            words.push(current_word);
            current_word = "";
            if(regex2.test(str[i])){
                current_word += str[i];
            }
        }
    }
    if(current_word.length)words.push(current_word);
    return words.filter(word => word.length).map(word => word.toLowerCase()).join("-");
}

spinalCase('This Is Spinal Tap');
