const employees = require("./01-Employees");

const emp = employees.length

console.log(emp);


function salaryRange(employees,minSalary, maxSalary) {
    let range = employees.filter(employees => employees.salary <= maxSalary && employees.salary >= minSalary);
    return range;
        
}

console.log(salaryRange(employees,2400,4800));

