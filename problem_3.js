// Write a program to check whether a number is negative, positive or zero.

function checkNum (num) {
     if(num < 0) {
        return "negative"
     } else if(num == 0) {
        return "zero"
     } else {
        return "positive"
     }
}

console.log(checkNum(-1))
