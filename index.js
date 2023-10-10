// Scooter Constructor Function
function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

// Driver Constructor Function
function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// PickupLocation Constructor Function
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

// Creating instances
const myScooter = new Scooter(2022, 'Red', 'X100');
const myDriver = new Driver('John Doe', 30, '5 years');
const myPickupLocation = new PickupLocation('123 Main St', 'Cityville');

// Accessing properties
console.log(myScooter.year); // Output: 2022
console.log(myDriver.name); // Output: John Doe
console.log(myPickupLocation.city); // Output: Cityville

