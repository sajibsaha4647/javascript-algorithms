// Output: [1,1,2,1,1]
function flatten(nestedList) {
  var ret = [];
  for (var i = 0; i < nestedList.length; i++) {
    if (Array.isArray(nestedList[i])) {
      ret = ret.concat(flatten(nestedList[i]));
    } else {
      ret.push(nestedList[i]);
    }
  }
  return ret;
}

// const flatten = (ary) =>
//   ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
console.log(flatten([[[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]]));
