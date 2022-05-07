sumOfarray = (arr) => {
  //fast function
  return Helperarray(arr, 0);
};

Helperarray = (arr, index) => {
  if (arr.length === index) return 0;
  return arr[index] + Helperarray(arr, index + 1);
};

console.log(sumOfarray([1, 3, 4]));

// SumAftersliceOfArray = (n) => { //1300
//   //slow function
//   if (n.length === 0) return 0;
//   let rest = n.slice(1);

//   return n[0] + SumAftersliceOfArray(rest);
// };

// console.log(SumAftersliceOfArray([3, 2, 1]));
