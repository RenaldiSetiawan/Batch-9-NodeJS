const employees = require("./01-Employees");

const emp = employees.length

console.log(emp);


function totalSalaryAllEmployee(employees) {
    
    let total = employees.reduce(function(total, employee) {
        return total + parseFloat(employee.salary)
    },0)
return total;
}
console.log(totalSalaryAllEmployee(employees));






