class Employee {
    //property
    //function
    //default function/methods for initialising class variable/property
    constructor(id, name, desg, salary) {
        this.empId = id
        this.empName = name
        this.empDesg = desg
        this.empSalary = salary
    }
    printDetails() {
        console.log(`-------Employee Details------------
        Employee id :${this.empId}
        Employee Name: ${this.empName}
        Employee Designation: ${this.empDesg}
        Employee Salary:${this.empSalary}
        `);
    }
}
const emp1=new Employee(1000, "Neel Patel","devOps",56000)
const emp2=new Employee(1001, "Laisha Agarwal","Testing",46000)

emp1.printDetails()
emp2.printDetails()