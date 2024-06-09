// Reference(array , object) and primitive type(string, number)


//primitive

let num1 = 100;

let num2 = num1;

num2 = 50;
console.log(num1);
console.log(num2);


// Reference

let  person = {
    name: "Sitaji",
    age:24
}

let person2 = {
   ... person
};

person2.name = "Janki";

console.log(person);
console.log(person2);


