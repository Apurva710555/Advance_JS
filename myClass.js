class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.passwords = password;
  }

  encryptPassword() {
    return `${this.passwords}@3101`;
  }

  changeUsername() {
    return this.username.toUpperCase();
  }

  static changePassword() {
    //it cannot be accessed
    console.log("no");
  }
}

let Apurva = new User("Apurva710", "amuthyae1@gmail.com", "Itachi");
console.log(Apurva.username);
console.log(Apurva.email);
console.log(Apurva.encryptPassword());
console.log(Apurva.changeUsername());
// console.log(Apurva.changePassword());  error thrown

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }

  read() {
    console.log("reading");
  }

  write() {
    console.log(`${this.username} is writing`);
  }
}

let mam = new Teacher("Itachi", "it@gmail.com");
mam.read();
console.log(mam.changeUsername());
mam.write();
