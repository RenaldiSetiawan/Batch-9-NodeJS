const employees = require("./01-Employees");

const emp = employees.length

console.log(emp);


function totalSalaryByDepartement(employees,departementid) {
    
    let salary = employees.filter(employees => employees.department_id === departementId) 

    let total = salary.reduce((val, element) =>{
        return val + parseInt(element.salary)
    },0)
        
console.log(total)
}
totalSalaryByDepartement(employees,departementId)

