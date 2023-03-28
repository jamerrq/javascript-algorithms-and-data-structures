function destroyer(arr) {
    for (let i = 1; i < arguments.length; ++i) {
        arr = arr.filter(num => num !== arguments[i]);
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
