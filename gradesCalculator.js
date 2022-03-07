const JAMES_MATHEMATICS = [90, 95, 98, 100];

//1. get the sum of all items
//2. divide the sum by the total number of items
class GradeCalculator {

    constructor(gradesToCalculate){
        this.grades = gradesToCalculate
    }


    calculateGrades (){
      
    }

}

const calculateGrades = (listOfGrades) => {
  const total = getTheSumOfArrayOfNumbers(listOfGrades);
  const average = divideTwoNumbers(total, listOfGrades.length);

  return average;
};

const getTheSumOfArrayOfNumbers = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((a, b) => a + b);
};

const divideTwoNumbers = (number1, number2) => {
  return number1 / number2;
};

// const jamesMathematicsAverageGrade = calculateGrades(JAMES_MATHEMATICS);

// console.log('Mathematics: ', jamesMathematicsAverageGrade);


const gc = new GradeCalculator('test')

gc.calculateGrades()
