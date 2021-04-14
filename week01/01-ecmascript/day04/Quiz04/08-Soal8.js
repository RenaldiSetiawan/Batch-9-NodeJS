const employees = require("./01-Employees");

const emp = employees.length

console.log(emp);

function totalEmployeeByJobId(employees){

    const filterJobId= (employees, job_id) =>{
        return employees.filter(x => x.job_id === job_id);
    }
    console.log(filterJobId(employees, 6));
}
totalEmployeeByJobId(employees);

