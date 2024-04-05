// object creation
const employee = {
    empId: 1000, empName: 'Neel', empDesg: 'developer', empLoc: 'kochi', empSalary: 25000, empExp: 3
}

console.log(employee);

// access value
console.log(`Employee Name: ${employee['empName']}`);
console.log(`Employee Designation: ${employee.empDesg}`);
"empSalary" in employee && console.log(`Employee Salary: ${employee.empSalary}`);
"isVaccinated" in employee ? console.log(`Employee Vaccination status:${employee.isVaccinated}`) : employee.isVaccinated = true

// change value
employee.empSalary += 5000
console.log(employee);

console.log("----Employee Details-----");
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}


