function uniteUnique(arr) {
    let uniques = [];
    let mySet = new Set();
    for(let i = 0; i < arguments.length; ++i){
        for(let j = 0; j < arguments[i].length; ++j){
            let aij = arguments[i][j];
            if(!mySet.has(aij)){
                uniques.push(aij);
                mySet.add(aij);
            }
        }
    }
    return uniques;
}

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);
