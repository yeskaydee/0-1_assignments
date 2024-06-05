
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

// Create a new instance of the Animal class
let dog = new Animal("Dog", 4);

// Use the describe method to log a description of the dog
console.log(dog.describe()); 
