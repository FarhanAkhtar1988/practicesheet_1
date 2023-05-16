// Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

function newPercentage(arr) {
    let secureMarks = 0;
    let totalMarks = arr.length * 100;
    let percentage;
    for (let i = 0; i < arr.length; i++) {
        secureMarks += arr[i];
    }
    percentage = (secureMarks / totalMarks) * 100;
    switch (true) {
        case percentage >= 90:
            return percentage + "%" + "," + "GRADE A";
        case percentage >= 80 && percentage < 90:
            return percentage + "%" + "," + "GRADE B";
        case percentage >= 70 && percentage < 80:
            return percentage + "%" + "," + "GRADE C";
        case percentage >= 60 && percentage < 70:
            return percentage + "%" + "," + "GRADE D"
        case percentage >= 40 && percentage < 60:
            return percentage + "%" + "," + "GRADE E"
        case percentage < 40:
            return percentage + "%" + "," + "GRADE F"
        default:
            return "Fail";
    }
}
console.log(newPercentage([49, 27, 90, 82, 44]));


