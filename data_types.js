//Methods of primitives
let str = "hello world";
console.log(str.toUpperCase()); // HELLO WORLD

let n = 1.2345678;
console.log(n.toFixed(4)); // 1.234

//NUMBERS
let b = 1_000_000_000; // _acts a commas
console.log(b); //1000000000;

let num = 255;
console.log(num.toString(16)); //convert

//STRINGS
let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;
let slashn = "I will print this in \nnewline";
console.log(single + " " + double + " " + backticks);
console.log(slashn);
console.log(single.length); //prints length
console.log(single.charAt());

//ARRAYS
let arr = ["orange", "apple", "banana"];
let arr1 = new Array();
arr1.push("orange", "apple", "banana");
console.log(arr);
console.log(arr1);

console.log(arr[0]);

let new1 = arr.pop();
console.log("this is popped : " + new1);

console.log(arr.shift());

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]); // 5 is at 1,1 position so it will get printed!!

//ITERABLES
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

//MAPS
let map = new Map();
map.set(1, "apurva");
map.set(2, "karan");
map.set(3, "esha");

console.log(map.get(1));
console.log(map.get(3));

console.log(map.size);
console.log(map.has(3));
// console.log(map.clear());

console.log(map.keys()); //returns keys
console.log(map.values());
console.log(map.entries());

//SETS
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

for (let user of set) {
  console.log; // John (then Pete and Mary)
}
