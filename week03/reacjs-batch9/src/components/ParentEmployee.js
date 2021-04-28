import React, { Component } from 'react'
import ChildEmployee from './ChildEmployees'

const employees = [
    { empId: 1, empName: "dian", salary: 100 },
    { empId: 2, empName: "asep", salary: 200 },
    { empId: 3, empName: "budi", salary: 300 },
    { empId: 4, empName: "bayu", salary: 400 }
]

export default class ParentEmployee extends Component {
    /*State adalah data private sebuah component. 
      Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses dari component lain*/
    state = {
        emps: employees
    }

    // setiap tipe OBJEK ARRAY BISA MENGGUNAKAN MAP
    // Spred Operator [...]
    upSalary = (empId) => {
        this.setState({
            emps: [...this.state.emps.map(emp => {
                if (emp.empId === empId) {
                    emp.salary = emp.salary + 10
                }
                return emp;
            })]
        })
    }

    downSalary = (empId) => {
        this.setState({
            emps: [...this.state.emps.map(emp => {
                if (emp.empId === empId) {
                    emp.salary = emp.salary - 10
                }
                return emp;
            })]
        })
    }

    render() {
        const { emps } = this.state;
        return (
            <div>
                {
                    emps.map(emp => {
                        return (
                            <ChildEmployee
                                empId={emp.empId}
                                empName={emp.empName}
                                salary={emp.salary}
                                upSalary={this.upSalary}
                                downSalary={this.downSalary} />
                        )
                    })
                }
            </div>
        )
    }
}
