MaxLog = (n) => {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

let result1 = MaxLog(1);

console.log(result1);
MinLog = (n) => {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

let result = MinLog(10);

console.log(result);
