
const person = { name: "SANJAY", age: 19};
const student = Object.create(person);
student.course = "Computer Science";
console.log("Person:", person,"Student:", student);
