// Recurtion = (n) => {
//   while (1 < n) {
//     console.log(n);
//     n /= 2;
//   }
// };

// Recurtion(8);

RecurtionTwo = () => {
  let url =
    "http://localhost:3000/ticket?status=success&slack=29ae7064-7d11-43eb-91b9-30349e6c88b0";

  const queryParams = new URLSearchParams(
    "http://localhost:3000/ticket?status=success&slack=29ae7064-7d11-43eb-91b9-30349e6c88b0"
  );
  // const status = queryParams.get("status");
  // const slack = queryParams.get("slack");

  let split = url.split("?");
  let split2 = split[1].split("&");
  let success = split2[0].split("=")[1];
  let slack = split2[1].split("=")[1];

  console.log(success);
  console.log(slack);
};

RecurtionTwo();
