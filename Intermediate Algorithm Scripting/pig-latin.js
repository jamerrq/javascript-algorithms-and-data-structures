function translatePigLatin(str) {
    let regex = /^([^aeiou]+)/gi;
    let consonants = str.match(regex);
    if(consonants){
        return str.slice(consonants[0].length) + consonants[0] + "ay";
    }else{
        return str + "way";
    }
}

translatePigLatin("algorithm");
