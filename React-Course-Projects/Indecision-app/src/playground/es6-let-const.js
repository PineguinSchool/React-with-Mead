var nameVar = "Lucas";
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = "Lucas";
nameLet = "Mike";
console.log('nameLet', nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Lucas Handley";
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);