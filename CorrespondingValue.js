SameArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] * 2);
    console.log(currentIndex, "currentIndex");
  }
};

let arr1 = [2, 5, 8];
let arr2 = [4, 10, 19];

SameArray(arr1, arr2);
