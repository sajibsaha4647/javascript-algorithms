LinearSearch = (arr, val) => {
  //linear search
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) return i;
  }
  return -1;
};

console.log(LinearSearch([2, 4, 5, 7, 8], 7));
