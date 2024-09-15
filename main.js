import { welcome } from "./welcome.js";
import { arrayTest } from "./arrayTest.js";
import { Car } from "./car.js";

// playground to refresh on javascript in 2024
const main = () => {
  welcome(); // greeting to the javascript refresher
  let car = new Car("Ford Mustang", "2024");

  let testArr = arrayTest();
  testArr.push("matthew");
  let result = testArr.find((person) => person === "brad");
  console.log(`result is : ${result}`);
  console.log(`testArr is : ${testArr}`);
  console.log(`Car is: ${car.name}, ${car.year}`);
};

main();
