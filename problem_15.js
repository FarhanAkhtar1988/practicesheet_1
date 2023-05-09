// Write a program to input all sides of a triangle and check whether triangle is valid or not.

function validTriangle(a,b,c) {
   if(a + b > c || b + c > a || c + a > b){
       return "It is a triangle"
   }
   return "It is not a triangle"
}
console.log(validTriangle(20,24,38));