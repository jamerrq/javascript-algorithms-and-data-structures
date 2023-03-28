function dropElements(arr, func) {
    let slice_index = -1;
    for(let i = 0; i < arr.length; ++i){
        if(func(arr[i]))break;
        slice_index = i;
    }
    // console.log(arr.slice(slice_index));
    return arr.slice(slice_index + 1);
}

dropElements([1, 2, 3], function (n) { return n < 3; });
