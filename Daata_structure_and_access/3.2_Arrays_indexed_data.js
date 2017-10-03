/*
Arrays are sequential list of values
can grow or shrink dynamically with push() and pop()
Arrays are reference types, cannot be compared
without iterating through all of their contents
Arrays are excellent for qeues or stacks
relying on order
*/

var steps = ["brainstorm", "narrow", "focus", "prototype", "test", "propose"];
var stepTerm;

for (var i = 0; i < steps.length; i++) {
    switch(i) {
        case 0:
            stepTerm = "First";
            break;
        case steps.length - 1:
            stepTerm = "Finally";
            break;
        default :
            stepTerm = "Then";
    }
    console.log(stepTerm + " we " + steps[i]);
}