//Objects as keyed data

/*
    An object can store values that can
    be of any type keyed to unique strings
    *Can be of mulitiple types
    *Objects can grow and shrink dynamically
    as items are added or removed
    *Objects are reference types
    *Changing an object property alters
    data stored in the object
*/

//Keyed data
/*
    Objects associate String keys with arbitrary value
    Each news tring becomes a property on the object
    Access value by assocaitining it with its string
*/

var fruits = {};//empty object
fruits.apple = {"color": "red", "price": 0.75};
fruits.orange = {"color": "orange", "price": 0.65};
fruits.pear = {"color": "green", "price": 0.95};
console.log(fruits);
console.log(fruits.apple.color);

//DO NOT alter native object properties
/*
    Altering a propoerty can add new enumerable 
    properties to other objects from a base object
*/

var vanilla = { "color": "neutral", "size": "medium"};
for (var item in vanilla) {
    console.log("vanilla " + item + " = " + vanilla[item]);
}

//Base object in JS

Object.prototype.extender = "crap";
for(item in vanilla){
    console.log("vanilla " + item + " = " + vanilla[item]);
}

//Protecting object properties
for(item in vanilla) {
    if (vanilla.hasOwnProperty(item)) {
        console.log("vanilla" + item + " = " + vanilla[item]);
    }
}

//Adding and removing Object Data
/*
    Add, delete or change a value in an boject by referencing the key
    String keys with spaces need to accessed with baracket notation
    order of data is arbitrary - do not count on it
*/

var favFruits = {};//empty object
favFruits.apple = {"skin color": "red", "price": 0.75};
favFruits.orange = {"skin color": "orange", "price": 0.65};
favFruits.pear = {"skin color": "green", "price": 0.95};

console.log(favFruits.apple["skin color"]);
favFruits.apple.price = 0.80;
favFruits.apple["skin color"] = "green";
for(var key in favFruits.apple) {
    if (favFruits.apple.hasOwnProperty(key)) {
        console.log(key + " = " + favFruits.apple[key]);
    }
}// order of properties varies - no particular order

//ES6 map funciton
/*
Map type better alternative for keyed data storage
Follows conventions of an object data storage
Maps do not include a prototype by default - all key:value pairs are data
A Map can use any type for a key, Objects rely on String keys only
Map has a buil-in size method - you don't need to keep track of size manually
as you would with an object
*/
