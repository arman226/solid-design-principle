const { displayResult } = require("./logger");
const MathUtils = require("./mathUtils");
const JAMES_MATHEMATICS = [90, 95, 98, 100];

class GradeCalculator {
  constructor(gradesToCalculate) {
    this.grades = gradesToCalculate;
  }

  calculateGrades() {
    const mathUtil = new MathUtils();

    const total = mathUtil.getSummationOfArrayOfNumbers(this.grades);

    const average = mathUtil.getQuotientOfTwoNumbers(total, this.grades.length);

    displayResult(average);
  }
}

const gc = new GradeCalculator(JAMES_MATHEMATICS);

gc.calculateGrades();
