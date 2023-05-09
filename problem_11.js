// Write a program to input week number and print week day.

function checkDay(input) {
    let days = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      7: "Sunday"
    }
      if(input >= 8 || input <= 0){
        return "Input should be between 1 to 7";
      }
      return days[input];
}
console.log(checkDay(7));