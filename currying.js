//1ST Method
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3); // output - 6

//2ND Method
let newMultiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let newMultiplyByTwo = newMultiply(2);
newMultiplyByTwo(3); // output is 6
