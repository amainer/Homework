
class Car {
  constructor(wheels,topSpeed,color) {
    this.wheels = wheels;
    this.topSpeed = topSpeed;
    this.color = color;
  }

  vroomVroom() {
    return "I can travel a quarter mile in " + 60/this.topSpeed/4 + " minutes";
  }

}

let myCar = new Car(4,5,'white');
let anotherCar = new Car(2,60,'red')

console.log(myCar);
console.log(myCar.vroomVroom());
console.log(anotherCar);
console.log(anotherCar.vroomVroom());
