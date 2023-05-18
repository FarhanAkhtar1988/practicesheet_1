// Write a program to check whether a character is uppercase or lowercase alphabet.

function check(char){
    if(char === char.toLowerCase()){
        return "It is in lowercase"
    } else if(char === char.toUpperCase()){
        return "It is is uppercase"
    }
}
console.log(check("C"));
