//Creating an array stack

/*
A stack takes a list of items and delivers
them one at a time in the opposite order they
were added. 
using push() and pop()
*/

var stack = [];
stack.push("urgent");
stack.push("super urgent");
stack.push("mega urgent");
console.log(stack);

var current = stack.pop();
console.log(current);
console.log(stack);