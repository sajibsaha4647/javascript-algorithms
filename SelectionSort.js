SelectionSort = (arr) => {
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};
console.log(SelectionSort([000, 1000, 3000, 00, 00]));
