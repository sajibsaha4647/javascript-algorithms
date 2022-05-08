GetBubblesort = (arr) => {
  let iswap = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        console.log(arr);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        iswap = true;
      }
    }
    if (!iswap) break;
  }
  return arr;
};

console.log(GetBubblesort([2, 35, 23, 1 - 45]));
