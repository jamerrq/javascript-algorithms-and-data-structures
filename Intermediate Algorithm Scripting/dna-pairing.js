function pairElement(str) {
    let chars = str.split("");
    let pairs = [];
    for(let i = 0; i < chars.length; ++i){
        let charI = chars[i];
        if(charI == "A"){
            pairs.push(["A", "T"]);
        }else if(charI == "T"){
            pairs.push(["T", "A"]);
        }else if(charI == "C"){
            pairs.push((["C", "G"]));
        }else if(charI == "G"){
            pairs.push(["G", "C"]);
        }
    }
    return pairs;
}

pairElement("GCG");
