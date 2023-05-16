// Write a program to calculate profit or loss. 

function calculate(SP, BP) {
    let obj = {}
    if(SP > BP) {
       obj.profit = SP - BP;
       obj.loss = 0;
    } else {
       obj.profit = 0;
       obj.loss = SP - BP;
    }
    return obj;
}
console.log(calculate(500,100))
