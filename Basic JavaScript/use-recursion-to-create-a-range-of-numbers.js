function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return [];
  }else{
    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};