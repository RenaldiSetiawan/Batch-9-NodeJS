import React from 'react'

export default function Employees() {
    const employees = [
        { empId: 1, empName: "dian", salary: 100 },
        { empId: 2, empName: "asep", salary: 200 },
        { empId: 3, empName: "budi", salary: 300 }
    ];


    return (
        <div>
            <ul>
            {
                
                employees.map((emp,index) =>{
                    return (
                        <li key={index}>{emp.empId} - {emp.empName}-{emp.salary} </li>
                    )
                })
            }   
            </ul>     
        </div>
    )
}
