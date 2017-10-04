var cars = {};
cars.ford = {"model": "focus", "engine" : 1500, "type": "hatchback"};
cars.tesla = {"model" : "S", "engine" : "electric", "type" : "saloon"};
cars.toyota = {"model" : "auris", "engine": "hybrid", "type" : "saloon"};

console.log(cars);
console.log(cars.tesla.model);

for(var key in cars.ford){
    console.log("%s : %s", key, cars.ford[key]);
}