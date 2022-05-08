BinarySearch = (arr, val) => {
  // let arrays = [];
  // let arryd = arr.sort((a, b) => {
  //   //array sorting
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  //   return 0;
  // });
  // arrays = arryd;

  let results;
  arr.map((items, i) => {
    if (items === val) {
      results = i;
    }
  });

  return results;

  // let start = 0;
  // let end = arrays.length - 1;
  // // while (start <= end) {
  // let middle = Math.round((end - start) / 2);

  // if (middle === val) return middle;

  // if (val > arrays[middle]) {
  //   start = middle + 1;
  // } else if (val < arrays[middle]) {
  //   end = middle - 1;
  // }
  // }
  // return -1;
};

console.log(BinarySearch([2, 3, 34, 13, 4, 7, 35, 36], 2));
