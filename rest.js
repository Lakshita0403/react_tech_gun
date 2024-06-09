// rest operator

function hello(...all)
{
    console.log(all);
}

hello(1,2,3,4,55,6,6);

// array destructuring

let list = ["kanha","kishna","govind"];

let [name1, name2] = list;

console.log(name2);


// object destructuring

const person = {
    name:"Ramji",
    age:25
}

let{name,age} = person;

console.log(name, age);
 