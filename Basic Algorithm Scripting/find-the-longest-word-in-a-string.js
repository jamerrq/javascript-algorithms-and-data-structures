function findLongestWordLength(str) {
  let words = str.split(" ");
  let word = words[0];
  let maxL = words[0].length;
  for(let i = 1; i < words.length; ++i){
    if(words[i].length > maxL){
      maxL = words[i].length;
      word = words[i];
    }
  }
  return word.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");