let letters = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]


function convertToRoman(num) {
    let roman = "";
    let index = 0;
    while(num > 0){
        if(num < values[index])
        {
            index += 1
            continue
        }
        else
        {
            num -= values[index];
            roman += letters[index];
        }
    }
    return roman;
}


console.log(convertToRoman(359));
