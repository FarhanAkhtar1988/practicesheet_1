// Write a program to check whether a character is alphabet or not.

function checkChar(char){
    var regex = /[a-z]/;
    var a = regex.test(char)
    if(a) {
        return "It is a alphabet"
    }
    return "It is not a alphabet"
}

console.log(checkChar("-"));
 