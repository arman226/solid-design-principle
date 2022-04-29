const Airplane = require("./Airplane");
const Boat = require("./Boat");
const Sedan = require("./Sedan");

const runVehicles = (listOfVehicles) => {
  listOfVehicles.map((item) => {
    item.runVehicle();
  });
};

const VEHICLES = [new Sedan("blue"), new Airplane("violet"), new Boat("red")];

runVehicles(VEHICLES);
