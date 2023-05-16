// Write a program to find all roots of a quadratic equation.

function squareRoot(a,b,c) {
      return Math.sqrt(b*b - 4*a*c);
}
function findFinalRoot(a,b,r) {
    return (-b + r)/2*a;
}


function findRoot (a,b,c){
   let r = squareRoot(a,b,c);

   return { first: findFinalRoot(a, b, -r) , second: findFinalRoot(a, b, r) };
}

console.log(findRoot(1,-7,10))

