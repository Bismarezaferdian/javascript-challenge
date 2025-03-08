// Buat fungsi yang menerima angka n dan mengembalikan jumlah dari semua digitnya
const sumDigits = (item) => item.toString();
// .reduce((acc,curr)=> curr+acc)

console.log(sumDigits(123)); // ➞ 6   (1 + 2 + 3)
sumDigits(9876); // ➞ 30  (9 + 8 + 7 + 6)
sumDigits(2024); // ➞ 8   (2 + 0 + 2 + 4)
