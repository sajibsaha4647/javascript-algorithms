let char = "Skysktripcplkoijuytghfr B2c";

getcountChar = (char) => {
  let chars = {};
  for (let i = 0; i < char.length; i++) {
    let item = char[i];
    if (chars[item] > 0) {
      chars[item]++;
    } else {
      chars[item] = 1;
    }
  }

  for (const [key, value] of Object.entries(chars)) {
    if (value >= 2) {
      console.log(key);
    }
  }
};

getcountChar(char);
