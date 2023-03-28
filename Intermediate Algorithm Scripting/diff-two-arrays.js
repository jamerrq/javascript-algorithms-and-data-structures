function diffArray(arr1, arr2) {
  const newArr = [];
  for(let i = 0; i < arr1.length; ++i){
    let item = arr1[i];
    if(arr2.indexOf(item) == -1){
      newArr.push(item);
    }
  }
  for(let i = 0; i < arr2.length; ++i){
    let item = arr2[i];
    if(arr1.indexOf(item) == -1){
      newArr.push(item);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
