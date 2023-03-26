// Only change code below this line
function urlSlug(title) {
  let words = title.split(/[^A-Za-z]/);
  let lowerWords = words.map(word => word.toLowerCase()).filter(word => word.length);
  return lowerWords.join("-");
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");