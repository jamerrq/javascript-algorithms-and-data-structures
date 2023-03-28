function sumAll(arr) {
  let suma = 0;
  for(let i = Math.min(...arr); i < Math.max(...arr) + 1; ++i)suma += i;
  return suma;
}

sumAll([1, 4]);