// Write a program to find maximum between three numbers.
let maximum;
function maxNum(a,b,c){
    if(a >= b && a >= c){
        maximum = a;
    } else if(b >= c && b >= a){
        maximum = b;
    } else {
        maximum = c;
    }
    return maximum;
}
console.log(maxNum(1,7,7))
