function myReplace(str, before, after) {
    let chars  = before.split("");
    chars[0]   = chars[0].toUpperCase();
    let Before = chars.join("");
    chars      = after.split("");
    chars[0]   = chars[0].toUpperCase();
    let After  = chars.join("");
    before = before.toLowerCase();
    after  = after.toLowerCase();
    str = str.replace(before, after);
    str = str.replace(Before, After);
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
