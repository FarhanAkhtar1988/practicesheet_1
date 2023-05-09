// Write a program to input month number and print number of days in that month.

function checkNumOfDays(input) {
      if(input >= 13 || input <= 0) {
        return "Input should be between 1 to 12";
      } else if(input === 1) {
        return 31;
      } else if(input === 2) {
        return 28;
      } else if(input === 3) {
        return 31;
      } else if(input === 4) {
        return 30;
      } else if(input === 5) {
        return 31;
      } else if(input === 6) {
        return 30;
      } else if(input === 7) {
        return 31;
      } else if(input === 8) {
        return 31;
      } else if(input === 9) {
        return 30;
      } else if(input === 10) {
        return 31;
      } else if(input === 11) {
        return 30;
      } else if(input === 12) {
        return 31;
      }
    }

console.log(checkNumOfDays(4));