function palindrome(str) {
    str = str.replace(/([^A-Za-z\d])/g, "");
    str = str.toLowerCase();
    // console.log(str);
    return str === str.split("").reverse().join("");
}

palindrome("eye");