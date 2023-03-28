function smallestCommons(arr) {
    if(arr[0] === arr[1] && arr[1] === 1)return [1];
    //
    let a = Math.min(...arr);
    let b = Math.max(...arr);
    //
    function gcd(a, b){
        if(b === 0)return a;
        return gcd(b, a % b);
    }
    function lcm(a, b){
        return (a * b) / gcd(a, b);
    }
    let c = a;
    for(let i = c + 1; i <= b; ++i)c = lcm(c, i);
    return c;
}

smallestCommons([2, 10]);
