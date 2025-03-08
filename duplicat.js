const duplicateElements = (arr) => arr.flatMap((item) => [item, item]);
//   arr.map((items) => [items, items]).flatMap((items) => items);

console.log(duplicateElements([1, 2, 3]));
// Output: [1, 1, 2, 2, 3, 3]

console.log(duplicateElements(["a", "b", "c"]));
// Output: ["a", "a", "b", "b", "c", "c"]
