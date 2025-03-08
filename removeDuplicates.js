const removeDuplicates = (arr) =>
  //indexOf(item) will return first index
  arr.filter((item, pos) => arr.indexOf(item) == pos);

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
// Output: ["a", "b", "c"]

// contoh iterasi
// [1, 2, 2, 3, 4, 4, 5]

// Iterasi	item	pos (index sekarang)	arr.indexOf(item) (index pertama)	Apakah pos === indexOf(item)?	Diterima?
// 1	    1    	0	                       0	                               ✅ Ya	                        ✅ Masuk
// 2	    2	    1                      	   1	                               ✅ Ya                       	✅ Masuk
// 3	    2	    2	                       1	                               ❌ Tidak	                    ❌ Skip
// 4	    3	    3	                       3	                               ✅ Ya	                        ✅ Masuk
// 5	    4	    4	                       4	                               ✅ Ya	                        ✅ Masuk
// 6	    4	    5	                       4	                               ❌ Tidak	                    ❌ Skip
// 7	    5	    6	                       6	                                ✅ Ya	                    ✅ Masuk
