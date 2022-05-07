sumOfarray = (arr) => {
  //fast function
  return Helperarray(arr, 0);
};

Helperarray = (arr, index) => {
  if (arr.length === index) return 0;
  return arr[index] + Helperarray(arr, index + 1);
};

console.log(sumOfarray([1, 3, 4]));
