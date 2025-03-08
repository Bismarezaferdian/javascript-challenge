// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// let mem = [];
var climbStairs = function (n) {
  // if (n <= 2) return n;
  // if (mem[n] != undefined) return mem[n];
  // mem[n] = climbStairs(n - 1) + climbStairs(n - 2);
  // console.log(mem);
  // return mem[n];

  //others option
  const noOfWays = [1, 2]; //jika tangga hanya ada 1 maka caranya hanya ada 1, dan jika ada 2 caranya hanya ada 2
  console.log(noOfWays);
  for (i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]; //index noOfWays akan selalu bertambah sesuai n yang di input
  }

  return noOfWays[n - 1]; //jika n 1/2 makan return noOfWays[index(n-1)]
};

// console.log(climbStairs(1));
// console.log(climbStairs(2));
console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));
// console.log(climbStairs(6));

//n=2 => 3= 2+1 == 3
//noOfWays = [1,2,3]
// n=3 =>4= 2+
