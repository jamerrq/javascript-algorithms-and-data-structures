const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line
  for(let i = 0; i < arr.length; ++i){
    let str = `<li class="text-warning">${arr[i]}</li>`;
    failureItems.push(str);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);