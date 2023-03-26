const squareList = arr => {
  // Only change code below this line
  let filtered_array = arr.filter(num => parseInt(num) == num && num > 0);
  let mapped_array = filtered_array.map(num => num ** 2);
  return mapped_array;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);