//Reference types

/*
    Objects are the fundamental types in JS
*/

//Primnitives: int, string, bool
var num1 = 123;
var num2 = num1;

console.log(num1);
console.log(num2);

num2 = 456;
console.log(num1);
console.log(num2);


//Refeences vars
var item1 = {
    "color": "red",
    "size": 15
}

var item2 = item1;

console.log(item1.color);
console.log(item2.color);

item2.color = "blue";
/*
Since both refer to the
same location in memory
both objects refer to the
same property 'blue'
*/
console.log(item1.color);
console.log(item2.color);

console.log("\n=============\nEquality for\nprimitive types\n=============\n");
/*
    Primitive types are comapred by value
    and can be coerced to the same type
    during comparison
*/

/*
    Reference types (as objects) are compared
    by their unique location in memory
*/

var fruits = 'Apples, pears, tomatoes';
var foods = 'Apples, pears, tomatoes';

console.log(foods == fruits);//both are the same string
//strict equality
console.log(foods === fruits);

//Primitive coercion
var int = 123;
var string = '123';
console.log(int ==  string); //int coerced into string - true bool val
console.log(int === string); // === forces comparison without coercion - false bool val

console.log("\n=============\nEquality for\nreference types\n=============\n");
//Reference coercion
var fruitsObject = {
    "apple" : 3,
    "pears" : 2
};

var foodsObject = {
    "apple" : 3,
    "pears" : 2
};

/*
    since they're seperate lcoations in memory
    they're not equal to each other
*/
console.log(fruitsObject == foodsObject);// 2 reference types that are seprate each other are nto equal