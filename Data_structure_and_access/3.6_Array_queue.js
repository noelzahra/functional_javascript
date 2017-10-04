//Array qeues

/*
A qeue takes a list of items and delivers one at a time
in the order they were added, strating with first one 
using push() and shift()
*/

var queue = [];
queue.push("brainstorm");
queue.push("narrow");
queue.push("prototype");
console.log(queue);

var current = queue.shift();
console.log(current);
console.log(queue);