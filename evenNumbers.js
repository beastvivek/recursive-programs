function isEven(number) {
  return number % 2 === 0;
}

function printEven(number) {
  if (isEven(number)) {
    console.log(number);
  }
}

// Prints all even numbers between two numbers
function printEvenNumbers(startingNumber, endingNumber) {
  if (startingNumber > endingNumber) {
    return;
  }
  printEven(startingNumber);
  printEvenNumbers(startingNumber + 1, endingNumber);
}

// Gives sum of all even numbers between two numbers
function sumOfEvenNumbers(startingNumber, endingNumber) {
  if (startingNumber > endingNumber) {
    return 0;
  }
  if (isEven(startingNumber)) {
    return startingNumber + sumOfEvenNumbers(startingNumber + 1, endingNumber);
  }
  return sumOfEvenNumbers(startingNumber + 1, endingNumber);
}

// Prints even numbers backwards from number to 1
function printEvenNumbersBackwards(startingNumber) {
  if (startingNumber === 0) {
    return;
  }
  printEven(startingNumber);
  return printEvenNumbersBackwards(startingNumber - 1);
}

function callOperation(choice) {
  switch (choice) {
    case 1:
      console.log("Even Numbers from 2 to 8");
      printEvenNumbers(2, 8);
      break;
    case 2:
      console.log("Sum of Even Numbers from 2 to 5 :", sumOfEvenNumbers(2, 5));
      break;
    case 3:
      console.log("Even Numbers from 8 to 1 backwards");
      printEvenNumbersBackwards(8);
      break;
    default:
      console.log("Wrong choice.");
      break;
  }
}

function main() {
  callOperation(1);
  callOperation(2);
  callOperation(3);
  callOperation(8);
}

main();