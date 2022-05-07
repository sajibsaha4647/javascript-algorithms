let temperature = [
  -2,
  4,
  NaN,
  undefined,
  23,
  -45,
  "skytrip",
  "react",
  "react native",
  67,
  90,
];

let a = temperature.filter((data, i) => typeof data == "number" && !!data);

console.log(a);
