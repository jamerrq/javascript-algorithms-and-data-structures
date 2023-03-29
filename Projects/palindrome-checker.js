function palindrome(str) {
    str = str.replace(/([^A-Za-z\d])/g, "");
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}

console.log(palindrome("eye"));
