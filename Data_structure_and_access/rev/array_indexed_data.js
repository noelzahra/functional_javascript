//Array methods

var investProcess = ["research", "technical", "filter", "market profile", "trade"];
var step;

for(var i = 0; i < investProcess.length; i++) {
    switch(i) {
        case 0:
            step = "First ";
            break;
        case investProcess.length - 1:
            step = "Last ";
            break;
        default:
            step = "Next ";
    }
    console.log("%s we %s", step, investProcess[i]);
}