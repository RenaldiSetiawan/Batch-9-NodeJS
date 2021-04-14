const employees = require("./01-Employees");

const emp = employees.length

console.log(emp);

function totalEmployeeByDepartement(employees){

    const filterDepartementId= (employees, department_id) =>{
        return employees.filter(x => x.department_id === department_id);
    }
    console.log(filterDepartementId(employees, 9));
}
totalEmployeeByDepartement(employees);