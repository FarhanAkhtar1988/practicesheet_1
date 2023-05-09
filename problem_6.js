// Write a program to check whether a year is leap year or not.

function leapYear(num) {
    if(num % 4 === 0 && num % 100 === 0 && num % 400 === 0){
            return "It is leap year";
}
           return "It is not leap year";
}
   
console.log(leapYear(2400));