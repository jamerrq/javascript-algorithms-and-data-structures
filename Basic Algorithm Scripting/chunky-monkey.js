function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length;) {
        let subArr = [];
        for (let j = 0; j < size && i < arr.length; j++) {
            subArr.push(arr[i]);
            ++i;
        }
        newArr.push(subArr);
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);