//Reference types


//primitive types: int string bool

var num1 = 234;
var num2 = num1;
console.log(num2);

num2 = "string";
console.log(num2);

//referecne types cannot be coerced
var obj = {
    "name"  : "Scott",
    "age"   : 18
};

var person = obj;

console.log(obj.name);
console.log(person.name);
console.log(typeof person);

person.name = "Michaela";
//both obj will change name property
console.log(obj.name);
console.log(person.name);

var obj2 = {
    "name"  : "Scott",
    "age"   : 18
};
//since both obj have a seperate place in memory they are not equal
console.log(obj === obj2);
