const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

function divide(a, b) {
  return a / b;
}

function increment(a) {
  return a + 1;
}

function decrement(a) {
  return a - 1;
}

function makeInt(a) {
  return parseInt(a, 10);
}

makeInt("5890"); // returns 5890
makeInt("199.89"); // returns 199
makeInt("VuslatSenaEmre"); // returns NaN

function preserveDecimal(a) {
  return parseFloat(a);
}
preserveDecimal(23.993);
preserveDecimal("melody");