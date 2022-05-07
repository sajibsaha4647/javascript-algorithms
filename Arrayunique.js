console.time();
uniqueName = (name) => {
  let uniquename = [];
  for (let i = 0; i < name.length; i++) {
    // let ele = name[i];
    let ele = name[i].toLowerCase();
    if (!uniquename.includes(ele)) {
      uniquename.push(ele);
    }
  }
  return uniquename;
};

let array = ["skytrip", "Skytrip", "Buyostocks", "Hrm", "hrm", "hrm"];

// let newArray = array.map((q) => q.toLowerCase());

// let unique = [...new Set(array)];

let result = uniqueName(array);

// let time2 = Performance.now();

// let timeresult = (time2 - time1) / 1000;

console.log(result);

// console.log(unique);
console.timeEnd();
