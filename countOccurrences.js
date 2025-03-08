// Buat fungsi untuk mengembalikan jumlah kemunculan setiap elemen dalam array dalam bentuk objek.
const countOccurrences = (items) => {
  return items.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};

console.log(countOccurrences([1, 2, 2, 3, 3, 3, 4]));
// Output: { 1: 1, 2: 2, 3: 3, 4: 1 }

console.log(countOccurrences(["a", "b", "a", "c", "b", "d", "a"]));
// Output: { a: 3, b: 2, c: 1, d: 1 }
