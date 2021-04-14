const employees = require("./01-Employees");

const emp = employees.length

console.log(emp);

function hireRangeDate(employees,startDate, endDate){

    let range = employees.filter(employee => employee.manager_id === null & employee.hire_date > startDate && employee.hire_date < endDate);
    return range;
}
console.log(hireRangeDate (employees,"12-01-1993","12-12-1995"));