// class and object

class customer {
  constructor(n) {
    this.name = n;
  }
 
  age = 24;

  buy=()=> {
    console.log(this.name);
  }
}

// inheritance

class guestCustomer extends customer {
  hello() {
    console.log("Hanumanji");
  }
}

let customer1 = new customer("Radhikaa");

console.log(customer1);

customer1.buy();

let customer2 = new guestCustomer("hari bol");

console.log(customer2);

customer2.buy();
