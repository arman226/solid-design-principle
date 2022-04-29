class Boat {
  constructor(color) {
    this.vehicleType = "Boat";
    this.vehicleColor = color;
  }
  runVehicle() {
    console.log(
      `============DRIVING A ${this.vehicleColor} BOAT================`
    );
    console.log("1. Run the Blower");
    console.log("2. Start the Engine ");
    console.log("3. Remove the Lines ");
    console.log("4. Start Moving");
    console.log("5. Adjust the Throttle");
  }
}

module.exports = Boat;
