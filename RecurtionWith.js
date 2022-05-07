GetRecursionSum = (n) => {
  //addingtion function
  if (n < 0) return null;
  return n + GetRecursionSum(n - 1);
};

console.log(GetRecursionSum(100));
