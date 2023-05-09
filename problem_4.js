// Write a program to check whether a number is divisible by 5 and 11 or not.

function divisible(num) {
    if(num % 5 === 0 || num % 11 === 0){
        return "yes"
    }
    return "no"
}
console.log(divisible(43))