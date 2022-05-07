// sumOfanArray = (n) => {
//   let total = 0;
//   for (let i = 0; i < n.length; i++) {
//     total += n[i];
//   }
//   return total;
// };

// let array = [1, 2, 3, 4, 5, 6];

// let result = sumOfanArray(array);

// console.log(result, "total");

sumOfanArray = (n) => {
  let sum = [];
  for (let i = 0; i < n.length; i++) {
    sum.push(n[i] * 2);
  }
  return sum;
};
let array = [1, 2, 3, 4, 5, 6];

let result = sumOfanArray(array);

console.log(result, "total");
