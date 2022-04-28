const runVehicle = (listOfVehicles) => {
  listOfVehicles.map((item) => {
    new item().runVehicle();
  });
};

class Car {
  constructor() {
    this.vehicleType = "Sedan";
    this.vehicleColor = "red";
  }

  runVehicle() {
    console.log("running on Land");
  }
}

class Boat {
  constructor() {
    this.vehicleType = "Boat";
    this.vehicleColor = "blue";
  }
  runVehicle() {
    console.log("running on Water");
  }
}

class Airplane {
  constructor() {
    this.vehicleType = "Airplane";
    this.vehicleColor = "violet";
  }
  runVehicle() {
    console.log("running on air");
  }
}

const VEHICLES = [Car, Airplane, Boat];

runVehicle(VEHICLES);
