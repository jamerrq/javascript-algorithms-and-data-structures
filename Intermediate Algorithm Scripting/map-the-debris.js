function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for(let i = 0; i < arr.length; ++i){
        var a = earthRadius + arr[i]['avgAlt'];
        var T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
        arr[i]["orbitalPeriod"] = Math.floor(T + 0.5);
    }
    for(let i = 0; i < arr.length; ++i)delete arr[i]["avgAlt"];
    return arr;
}
