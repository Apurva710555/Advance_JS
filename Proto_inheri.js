let object = {
  name: "Apurva",
  salary: 20000,
  getIntro: function () {
    console.log(this.name + " is my name, my salary is " + this.salary);
  },
};

let newObj = {
  name: "Karan",
};

newObj.__proto__ = object;

let a = newObj.getIntro();
console.log(a); //OUTPUT - Karan is my name, my salary is 20000
