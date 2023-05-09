// Write a program to input angles of a triangle and check whether triangle is valid or not.

function checkTriangle(a, b, c) {
  if(a+b+c === 180) {
    return "It is a valid triangle"
  }
  return "It is not a valid triangle"
}
console.log(checkTriangle(32, 117, 31));