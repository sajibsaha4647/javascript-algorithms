findOddEvenNumber = (arr) => {
  //recursive with odd and even number
  let result = [];
  let result2 = [];
  helper = (input) => {
    if (input.length === 0) return null;
    if (input[0] % 2 == 0) {
      result.push(input[0]);
    } else if (input[0] % 2 !== 0) {
      result2.push(input[0]);
    }
    helper(input.slice(1));
  };
  helper(arr);
  // return result;
  console.log(result);
  console.log(result2);
};

findOddEvenNumber([1, 34, 56, 7, 89, 0, 8, 7, 56, 67, 55, 5, 40]);
