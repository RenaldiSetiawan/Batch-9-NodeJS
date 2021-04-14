const employees = require("./01-Employees");

const emp = employees.length

console.log(emp);

// 1. Buat function untuk menampilkan employees dengan prefix yang dicari : 

function searchEmployee(employees,prefix) {
    return employees.filter(employees => employees.first_name.startsWith(prefix))
}

console.log(searchEmployee(employees, "D"));
