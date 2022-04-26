class MathUtils {
  getSummationOfArrayOfNumbers(arrayOfNumbers) {
    return arrayOfNumbers.reduce((a, b) => a + b);
  }

  getQuotientOfTwoNumbers(number1, number2) {
    return number1 / number2;
  }
}

module.exports = MathUtils;
