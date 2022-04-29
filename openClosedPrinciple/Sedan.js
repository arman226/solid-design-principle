class Sedan {
  constructor(color) {
    this.vehicleType = "Sedan";
    this.vehicleColor = color;
  }

  runVehicle() {
    console.log(
      `=============RUNNING A ${this.vehicleColor} SEDAN CAR=============`
    );
    console.log("1. Get in the driver's seat and buckle up");
    console.log("2. Insert the key into the ignition.");
    console.log(
      "3. If you're starting a car with a manual transmission, put the gear stick in neutral."
    );
    console.log("4. Twist the ignition key to start the car");
  }
}

module.exports = Sedan;
