const employees = require("./01-Employees");

const emp = employees.length

console.log(emp);

function sortSalary(employees) {
    const sort = employees.sort((a,b )=>{
        return a.salary - b.salary;
    });
    return sort
    
}
console.log(sortSalary(employees));