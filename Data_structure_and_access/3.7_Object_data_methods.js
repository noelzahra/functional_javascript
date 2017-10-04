//Object data methods

/*
ES5 you can get an object's own enumerbale property
by passing keys method of Object
*/

var fruits = {};
fruits.apple = "red";
fruits.orange = "orange";
fruits.pear = "green";

console.log(Object.keys(fruits));//returns just the keys

Object.prototype.newProperty = "something";
console.log(fruits);
console.log(Object.keys(fruits));

for (var item in fruits) {
    console.log("Fruit item: " + item + " = " + fruits[item]);
}

//Defining new Object types
/*
Sharing an Object property or method with new types of object
this keyword to make Object properties and methods public
*/

var Food = function(name) {
    var label = name;//private - local scope only
    this.edible = true;//public
    this.formal = function() {
        return name.toUpperCase() + " ESQ";
    };
}


var apple = new Food("apple");
console.log(apple.label);//undefined
console.log(apple.edible);//exposed to public by this keyword
console.log(apple.formal());//exposed to public by this keyword
console.log(typeof apple);