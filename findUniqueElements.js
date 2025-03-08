const findUniqueElements = (items) =>
  //filter return all index is same if use find only return firts index of same
  //indexOf will find first index
  items.filter((item) => items.indexOf(item) === items.lastIndexOf(item));

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 3, 5]

console.log(findUniqueElements(["a", "b", "a", "c", "b", "d"]));
// Output: ["c", "d"]
