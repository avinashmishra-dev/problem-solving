/*
 ** Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 ** Print the decimal value of each fraction on a new line with  places after the decimal.
 ** Note: This challenge introduces precision problems. 
 ** The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
 ** Example - 
 **    input = [1, 2, 0 , -1, -3, 4], and length of array (n) = 6 
 **    logical output - 4/6, 2/6, 1/6
 **    screen output - 0.500000, 0.333333, 0.166667
 **    question link - https://www.hackerrank.com/challenges/plus-minus/problem
 */

function plusMinus(arr) {
  let lessThanZero = 0;
  let greaterThanZero = 0;
  for (const newarr of arr) {
    if (newarr < 0) {
      lessThanZero++;
    } else if (newarr > 0) {
      greaterThanZero++;
    }
  }
  let zeroesRatio = (arr.length - lessThanZero - greaterThanZero) / arr.length;
  let greaterThanZeroRatio = greaterThanZero / arr.length;
  let lessThanZeroRatio = lessThanZero / arr.length;
  console.log(
    greaterThanZeroRatio.toFixed(6) +
      "\n" +
      lessThanZeroRatio.toFixed(6) +
      "\n" +
      zeroesRatio.toFixed(6)
  );
}
plusMinus([-4, 3, -9, 0, 4, 1]);