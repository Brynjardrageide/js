let land = { navn: "Norge", hovedstad: "Oslo", myntenhet: "NOK" };
console.log(land.navn); // Skriver ut: "Norge" 
console.log(land["navn"]); // Skriver ut: "Norge"

function Person(first, last, age, eye) { 
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.eyeColor = eye; 
} 

// Create a Person object 
const myFather = new Person("John", "Doe", 50, "blue");