//map array

var steps = ["brainstorm", "narrow", "prototype", "test", "propose"];

var forEachReturns = steps.forEach(function(item){
    console.log(item);
});

console.log(forEachReturns);//undefined - returns nothing

console.log("\n=================\nmap() returns\nan array\n=================\n");
//map()
var mapReturns = steps.map(function(item) {
    return item;
});
console.log(mapReturns);

console.log("\n=================\nchaining with map()\n=================\n");

/*
map() returns a transformed array
with same length and updated values
array becomes a functor, can be chained
*/

var capitalize = function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

var appendCount = function(word) {
    return word + " (" + word.length + ") "; 
};

var mapReturns = steps.map(capitalize).map(appendCount);
console.log(mapReturns); //returns capitalized words with length
console.log(steps);//original steps array is not modified

/*
Benefits of functional js map()
Function is run on a copy of the
original array
*/

console.log("\n=================\nmap() tracks count by a param\n=================\n");
var mapWithCounter = steps.map(function(item, count){
    return count + " for " + item;
});
console.log(mapWithCounter);