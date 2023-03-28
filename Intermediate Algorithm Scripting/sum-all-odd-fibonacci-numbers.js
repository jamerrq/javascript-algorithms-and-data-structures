function sumFibs(num) {
    let suma = 0;
    let f1 = 0;
    let f2 = 1;
    while (f2 <= num)
    {
        if(f2 % 2)suma += f2;
        let ft = f2 + f1;
        f1 = f2;
        f2 = ft;
    }
    return suma;
}

sumFibs(10);
