// Write a program to input any character and check whether it is alphabet, digit or special character.

function checkExist(input) {
    let alphabet = /[a-z]/;
    let digit = /\d/g;
    if (alphabet.test(input)){
        return "It is alphabet"
    } else if (digit.test(input)){
        return "It is digit"
    } else {
        return "It is a special character"
    }
}
console.log(checkExist("9"))