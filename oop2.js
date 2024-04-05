//create a class for student and dispaly data like id, name,batch,division,address for 2 students 
class Student {
    constructor(id, name,batch, division, address) {
        this.StudentId = id
        this.StudentName = name
        this.StudentBatch = batch
        this.StudentDivision = division
        this.StudentAddress = address
    }
    printDetails() {
        console.log(`----------Students Details------
    Student Id: ${this.StudentId}
    Student Name: ${this.StudentName}
    Student Batch: ${this.StudentBatch}
    Student Division: ${this.StudentDivision}
    Student Address: ${this.StudentAddress}`);

    }
}
const stu1 = new Student(100, "Manu","A3", 8, "XYZ PO Box, kochi")
const stu2 = new Student(102, "Priya","B3", 8, "ABC PO Box, Aluva")

stu1.printDetails()
stu2.printDetails()