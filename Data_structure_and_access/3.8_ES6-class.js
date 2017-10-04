//ES6 class object

//Class syntac behaves as in other languages
class Food {
    constructor(name) {
        this.label = name;
        this.edible = true;
    }
    formal() {
        return this.label.toUpperCase() + ", ESQ.";
    }
}

var apple = new Food("apple");
console.log("%s is %s", apple.label, apple.edible);
console.log(apple.formal());