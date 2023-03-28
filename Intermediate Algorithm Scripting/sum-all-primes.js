function sumPrimes(num) {
    function isPrime(num){
        let divs = 2;
        for(let i = 2; i < num; ++i){
            if (num % i == 0) divs++;
        }
        return divs == 2;
    }
    let ans = 0;
    for(let i = 2; i <= num; ++i){
        if(isPrime(i))ans += i;
    }
    return ans;
}

sumPrimes(977);
