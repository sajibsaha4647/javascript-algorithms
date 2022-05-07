SumAftersliceOfArray = (n) => {
  if (n.length === 0) return 0;
  let rest = n.slice(1);

  return n[0] + SumAftersliceOfArray(rest);
};

console.log(SumAftersliceOfArray([3, 2, 1]));
