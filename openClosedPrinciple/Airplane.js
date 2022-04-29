class Airplane {
  constructor(color) {
    this.vehicleType = "Airplane";
    this.vehicleColor = color;
  }
  runVehicle() {
    console.log(
      `==============FLYING A ${this.vehicleColor} AIRPLANE==============`
    );
    console.log("1. Perform an inspection of the aircraft before getting in");
    console.log("2. Locate the flight control (column) in the cockpit");
    console.log("3. Locate the throttle and fuel mixture controls.");
    console.log("4. Familiarize yourself with the flight instruments.");
    console.log("5. Locate the landing gear controls.");
    console.log("6. Place your feet on the rudder pedals.");
  }
}

module.exports = Airplane;
