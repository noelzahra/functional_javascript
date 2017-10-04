//Iterate with a forEach statement

/*
Alternative to for loop,
without the need of a counter
or length test
*/

var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];

console.log("\n=================\nfor Loop\n=================\n");

//for loop
for(var i = 0; i < steps.length; i++) {
    console.log("Item #%d: %s", steps.indexOf(steps[i]), steps[i]);
}

console.log("\n=================\nforEach\n=================\n");

//forEach
steps.forEach(function(item) {
    console.log(item);
});

//forEach with counter - passing count as a param
steps.forEach(function(item, count) {
    console.log("Item number %d: %s", count, item);
});

console.log("\n=================\nforEach statement\on objects\n=================\n");

var fruits = {};
fruits.apple = {"color": "red", "price" : 0.75};
fruits.orange = {"color": "orange", "price" : 0.88};
fruits.pear = {"color": "green", "price" : 0.95};

Object.keys(fruits).forEach(function(fruit) {
    console.log("Fruit color: %s at $%d", fruits[fruit].color, fruits[fruit].price);
})