function BinarioADecimal(num) {
    return String(num).split("").reverse().reduce((acc, value, index) => {
        return acc + parseInt(value) * Math.pow(2, index);
    }, 0);
}

function binaryAgent(str) {
    let agent = "";
    let bins  = str.split(" ");
    for(let i = 0; i < bins.length; ++i){
        let num = BinarioADecimal(bins[i]);
        agent += String.fromCharCode(num);
    }
    console.log(agent);
    return agent;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
