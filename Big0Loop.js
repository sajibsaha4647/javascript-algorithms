sumOFall = (n) => {
  let Total = n;
  for (let i = 0; i < n; i++) {
    Total += i;
  }
  return Total;
};
let result = sumOFall(10);
console.log(result);

sumOfAll = (n) => {
  return (n * (n + 1)) / 2;
};

// sumOfAll(100);

let result2 = sumOfAll(100);
console.log(result2);
