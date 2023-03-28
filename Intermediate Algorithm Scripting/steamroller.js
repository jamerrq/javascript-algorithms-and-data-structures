function steamrollArray(arr) {
    if(!(arr instanceof Array)){
        return [arr];
    }
    let flatten = [];
    for(let i = 0; i < arr.length; ++i){
        let elem = arr[i];
        let result = steamrollArray(elem);
        flatten = flatten.concat(steamrollArray(elem));
    }
    return flatten;
}

console.log(
    steamrollArray([1, [2], [3, [[4]]]])
);
