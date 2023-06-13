const employees = [
  { name: "John Doe", age: 28, department: "Sales", salary: 50000 },
  { name: "Jane Smith", age: 35, department: "Marketing", salary: 60000 },
  { name: "Michael Johnson", age: 42, department: "IT", salary: 80000 },
  { name: "Emily Davis", age: 31, department: "Sales", salary: 55000 },
  { name: "Robert Brown", age: 39, department: "Finance", salary: 70000 },
  { name: "Olivia Wilson", age: 27, department: "Marketing", salary: 55000 },
  { name: "David Taylor", age: 45, department: "IT", salary: 90000 },
];

// Mostrar únicamente los empleados que pertenezcan al departamento de "Sales".
const salesEmployees = employees.filter(employee => employee.department =="Sales")
console.log(salesEmployees)
// Mostrar únicamente los empleados que tengan un salario mayor a 60000.
const employeesSalary = employees.filter(employee => employee.salary > 60000)
console.log(employeesSalary)
// Crea un array que contenga solo los nombres de los empleados.
const employeesNames = employees.map(employee => employee.name)
console.log(employeesNames)
// Crea un array que contenga solo el nombre y edad de cada empleado.
const employeesNamesAndAges = employees.map(employee =>{
 const nameAndAge ={name: employee.name, age:employee.age}
 return nameAndAge
})
console.log(employeesNamesAndAges)
// Crea un array que contenga los nombres de los empleados menores de 35
const employeesNameUnder35 = employees.filter(employee => employee.age < 35)
.map(employee=> employee.name)
console.log(employeesNameUnder35)
// Crea un array que muestre el nombre y el salario de los empleados que tengan un salario entre 55.000 y 85.000 incluidos
const employeesSalaryBetween = employees.filter(employee => employee.salary >= 55000 && employee.salary <= 85000 ).map(employee => {
  const newEmployee = {
    name:employee.name,
    salary:employee.salary
  }
  return newEmployee
})
console.log(employeesSalaryBetween)
// Guarda en el localStorage el array que creaste que contiene nombre y edad de cada empleado.
localStorage.setItem("empleadosNombreEdad",JSON.stringify(employeesNamesAndAges))
console.log(typeof employeesNamesAndAges)
// Trae del localStorage ese array que has guardado previamente y muestralo por consola
let empleadosNombreEdad = JSON.parse(localStorage.getItem("empleadosNombreEdad")) 
console.log(empleadosNombreEdad)
// Pinta en el DOM el nombre y edad de cada empleado utilizando el array que te has traido del localStorage
const empleadosDiv = document.querySelector(".empleados")

// for (const iterator of empleadosNombreEdad ) {
//   empleadosDiv.innerHTML += `<p>${iterator.name}</p> <p>${iterator.age}</p> `
// }
empleadosNombreEdad.forEach(element => {
  empleadosDiv.innerHTML += `<p>${element.name}</p> <p>${element.age}</p> `
});