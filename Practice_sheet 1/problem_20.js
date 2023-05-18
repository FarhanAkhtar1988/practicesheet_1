// Write a program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

function salary(sal) {
    let grossSalary = 0;
     switch(true){
        case sal <= 10000:
           grossSalary = sal + (sal*20)/100 + (sal*80)/100;
            return grossSalary;
        case sal <= 20000 && sal > 10000:
            grossSalary = sal + (sal*25)/100 + (sal*90)/100;
            return grossSalary;
        case sal > 20000:
            grossSalary = sal + (sal* 30)/100 + (sal*95)/100;
            return grossSalary;
        default:
            return "What is your basic salary";
     }
}
console.log(salary(25000))