const VEHICLES = [
  {
    vehicleType: "Sedan",
    vehicleColor: "Red",
  },
  {
    vehicleType: "Airplane",
    vehicleColor: "Violet",
  },
  {
    vehicleType: "Boat",
    vehicleColor: "Green",
  },
];

const runVehicle = (listOfVehicles) => {
  console.log(listOfVehicles.length);
  listOfVehicles.map((item) => {
    switch (item.vehicleType) {
      case "Sedan": {
        console.log("running on land");
        break;
      }
      case "Boat": {
        console.log("running on water");
        break;
      }
      default: {
        console.log("Unknown Vehicle");
        break;
      }
    }
  });
};

runVehicle(VEHICLES);
