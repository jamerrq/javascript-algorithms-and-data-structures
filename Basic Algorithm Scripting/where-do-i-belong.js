function getIndexToIns(arr, num) {
    arr = arr.sort((a, b) => a - b);
    if (num <= arr[0]) return 0;
    for (let i = 1; i < arr.length; ++i) {
        if (num >= arr[i - 1] && num <= arr[i]) { return i; }
    }
    return arr.length;
}

getIndexToIns([40, 60], 50);
