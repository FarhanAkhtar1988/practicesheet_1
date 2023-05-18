// Write a program to check whether the triangle is equilateral, isosceles or scalene triangle.

function checkType(a,b,c){
     if(a === b && b === c && c === a){
        return "It is a Equilateral Triangle"
     } else if(a !== b && b !== c && c !== a){
        return "It is a Scalene Triangle"
     } else if(a === b || b === c || c === a){
        return "It is a Isosceles triangle"
     }
}
console.log(checkType(7,78,79))