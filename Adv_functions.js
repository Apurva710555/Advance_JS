//RECURSION
//to print nth term of fibonacci series we can use recursion
//nth fibonacci term = fib(n-1) + fib(n-2)
function fib(n) {
  if (n == 1) {
    return 0;
  }

  if (n == 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); //34

//Rest parameters and spread syntax

function spread(...args) {
  let sum = 0;
  for (arg of args) {
    sum = sum + arg;
  }
  return sum;
}

console.log(spread(1, 2, 3, 4, 5)); //OUTPUT - 15

//declaration scoping
if (true) {
  var a = "hii there";
}
console.log(a); //var has function scope

if (true) {
  let b = "hii there";
}
// console.log(b);// b is not defined as let has block scope

//Scheduling: setTimeout and setInterval
// let time1 = setTimeout(() => {
//     setInterval
// }, 2000);(() => {
// }, 5000);

// let time2 = setInterval(() => {
//     console.log("bye!");
// }, 5000);

//BIND
let emp = {
  name: "Apurva",
  work: function (day) {
    return `${this.name} submit it by ${day}`;
  },
};
let ans = emp.work.bind(emp);
console.log(ans("fri"));
console.log(ans("today"));
