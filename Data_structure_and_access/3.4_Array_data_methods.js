//Array data methods
var steps = ["brainstorm", "narrow", "focus", "prototype", "test", "propose"];

//Add item at the end of array
steps.push("profit");
console.log(steps);

//Pop() removes the last element in an array
var popped = steps.pop();
console.log(popped);//removes profit
console.log(steps);

//Add element to first index of array
steps.unshift("drink");
console.log(steps);

//Remove first element of array
var shifted = steps.shift();
console.log(shifted);
console.log(steps);// removes drink