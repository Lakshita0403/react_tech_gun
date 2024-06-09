// spread and rest operator(...)

let list = ["Radhe", "krishna", "Govind"];

let newList = [...list,"Sita","Ram"];
console.log(newList);

let person = 
{
    name: "Rukhmani",
    age:28

}

let newPerson = 
{
    ...person,
    city:"delhi"
}

console.log(newPerson);